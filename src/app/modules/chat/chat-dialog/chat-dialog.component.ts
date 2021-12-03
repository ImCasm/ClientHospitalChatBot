import { DatePipe } from '@angular/common';
import {
  AfterViewChecked,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Appointment } from 'src/app/entities/appointment';
import { ChatRender } from 'src/app/entities/chatRender';
import { Context } from 'src/app/entities/context';
import { State } from 'src/app/entities/state';
import { User } from 'src/app/entities/user';
import { formatString } from 'src/app/helpers/stringHelpers';
import { ChatService } from '../../../services/chat.service';

@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.scss'],
  providers: [DatePipe]
})
export class ChatDialogComponent implements OnInit, AfterViewChecked {
  user: User = {};
  @ViewChild('scrolledChat') private scrolledChat: ElementRef;
  nextId = 999;
  context: Context;
  actualState: State;
  frm: FormGroup = this.fb.group({ response: ['', Validators.required] });
  messages: ChatRender[] = [];
  messagesTemplates = [
    'Se realizó correctamente la solicitud para el paciente {0} con número de identificación {1}.',
    'Puede consultar la solicitud realizada con el número {0}',
    'Adios. 🙋‍♂️',
    'La solicitud hecha por {0} con el número de identificación {1} fue asignada con el especialista {2} en la fecha {3}',
  ];
  states0 = [
    {
      id: '0',
      desctiption: 'Estado inicial para seleccionar el contexto',
      text: [
        'Hola, ¿te puedo ayudar en algo?',
        '- Solicitar cita',
        '- Consultar cita',
      ],
      res: '',
      prevStateId: '',
      nextStateId: '',
    },
    {
      id: '1',
      desctiption: 'Pide los nombres',
      text: ['¿Cuáles son tus nombres?'],
      res: '',
      prevStateId: '0',
      nextStateId: '2',
      userProp: 'firstName',
    },
    {
      id: '2',
      desctiption: 'Pide los apellidos',
      text: ['¿Cuáles son tus apellidos?'],
      res: '',
      prevStateId: '1',
      nextStateId: '3',
      userProp: 'lastName',
    },
    {
      id: '3',
      desctiption: 'Pide el dni',
      text: ['¿Cuál es tu número de identificación?'],
      res: '',
      prevStateId: '2',
      nextStateId: '4',
      userProp: 'dni',
    },
    {
      id: '4',
      desctiption: 'Pide la entidad de salud',
      text: ['¿Cuál es tu entidad de salud?'],
      res: '',
      prevStateId: '3',
      nextStateId: '5',
      userProp: 'entity',
    },
    {
      id: '5',
      desctiption: 'Pide la URL',
      text: ['¿Cuál es la URL para el alojamiento de la remisión?'],
      res: '',
      prevStateId: '4',
      nextStateId: '6',
      userProp: 'url',
    },
    {
      id: '6',
      desctiption: 'Mensaje final de creación',
      text: [],
      res: '',
      prevStateId: '5',
      nextStateId: '0',
      userProp: '',
      end: true,
    },
  ];

  states1 = [
    {
      id: '0',
      desctiption: 'Estado inicial para seleccionar el contexto',
      text: [
        'Hola, ¿te puedo ayudar en algo?',
        '- Solicitar cita',
        '- Consultar cita',
      ],
      res: '',
      prevStateId: '',
      nextStateId: '',
    },
    {
      id: '1',
      desctiption: 'Solicita el identificador para buscar la solicitud',
      text: [
        'Ingrese el identificador de la consulta que se le asignó al realizar la solicitud.',
      ],
      res: '',
      prevStateId: '0',
      nextStateId: '2',
    },
    {
      id: '2',
      desctiption: 'Muestra la información de la solicitud hecha',
      text: [''],
      res: '',
      prevStateId: '0',
      nextStateId: '2',
      end: true,
    },
  ];

  constructor(private fb: FormBuilder, private chatService: ChatService, private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.initConfig();
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  private initConfig(): void {
    this.asignQueryId();
    this.user = {};
    this.context = null;
    this.actualState = this.states0[0];
    this.addMessage(this.actualState.text, true);
  }

  private saveAppointmentRequest(user: User, id: number): void {
    this.chatService.saveAppointmentRequest(user, id, () => {
      this.chatService.getNextId().subscribe((next) => {
        this.nextId = next;
      });
    });
  }

  request(): void {
    if (this.frm.valid) {
      this.context ? this.nextRequestHandler() : this.firstRequestHandler();
      this.frm.reset();
    }
  }

  private firstRequestHandler(): void {
    const contextRes = this.frm.get('response').value;
    this.addMessage([contextRes], false);
    let isCreationRequest: boolean;
    if (contextRes.toUpperCase() === 'SOLICITAR CITA') {
      isCreationRequest = true;
    } else if (contextRes.toUpperCase() === 'CONSULTAR CITA') {
      isCreationRequest = false;
    } else {
      this.addMessage(['Lo siento, no entiendo lo que quieres decir.'], true);
      return;
    }
    this.context = {
      id: isCreationRequest ? '0' : '1',
      description: isCreationRequest ? 'Creación de cita' : 'Consulta de cita',
      states: isCreationRequest ? this.states0 : this.states1,
    };
    this.changeState('1');
    this.addMessage(this.actualState.text, true);
  }

  private nextRequestHandler(): void {
    const stateRes = this.frm.get('response').value;
    this.addMessage([stateRes], false);
    this.stateHandler(this.context, this.actualState, stateRes);
  }

  private changeState(stateId: string): void {
    if (!stateId || stateId === '0') {
      stateId = '0';
      this.resetContext();
      return;
    }
    this.actualState = this.context.states.find(
      (state) => state.id === stateId
    );
  }

  private toNextState(): void {
    this.changeState(this.actualState.nextStateId);
    if (this.context?.id === '0') {
      this.createAppointmentHandler();
    } else if (this.context?.id === '1') {
      if (this.actualState.id === '2') {
        this.chatService.getAppointments().subscribe((res) => {
          this.getAppointmentStatus(res);
        });
      }
    }
  }

  private createAppointmentHandler(): void {
    if (this.actualState.id === '6') {
      const name = this.user.firstName + ' ' + this.user.lastName;
      const dni = this.user.dni;
      const id = this.nextId;
      this.actualState.text = [
        formatString(this.messagesTemplates[0], name, dni),
        formatString(this.messagesTemplates[1], id?.toString()),
        this.messagesTemplates[2],
      ];
      this.saveAppointmentRequest(this.user, id);
    }
  }

  private getAppointmentStatus(res: Appointment[]): void {
    const queryId = this.states1.find((s) => s.id === '1').res;
    const appointment = res.find((a) => a.id === Number(queryId));
    if (appointment) {
      const isAssigned = appointment.assigned;
      const userName =
        appointment.user.firstName + ' ' + appointment.user.lastName;
      const id = appointment.user.dni;
      const doctor = appointment.doctorName;
      const date = appointment.date ? this.datePipe.transform(new Date(appointment.date), 'dd/MM/yyy HH:mm:s') : '';
      this.actualState.text = [
        isAssigned
          ? formatString(this.messagesTemplates[3], userName, id, doctor, date)
          : 'La solicitud aún se encuentra en trámite.',
        this.messagesTemplates[2],
      ];
    } else {
      this.actualState.text = [
        'No existe un trámite con el identificador dado.'
      ];
    }
    this.addMessage(this.actualState.text, true);
    if (this.actualState?.end) {
      this.initConfig();
    }
  }

  private resetContext(): void {
    this.context = null;
  }

  private getResponse(): string {
    return this.frm.get('response').value;
  }

  private addMessage(text: string[], isBot: boolean): void {
    text?.forEach((t) => {
      this.messages.push({
        text: t,
        isBot,
        div1: isBot ? 'user-incoming_msg' : '',
        div2: isBot ? 'received_msg' : 'outgoing_msg',
        div3: isBot ? 'received_withd_msg' : 'sent_msg',
      });
    });
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    try {
      this.scrolledChat.nativeElement.scrollTop =
        this.scrolledChat.nativeElement.scrollHeight;
    } catch {}
  }

  private stateHandler(context: Context, state: State, response: string): void {
    this.actualState.res = response;
    if (context.id === '0') {
      if (state.userProp) {
        this.user[this.actualState.userProp] = this.actualState.res =
        this.getResponse();
        console.log(this.user);
      }
      this.toNextState();
      this.addMessage(this.actualState?.text, true);
      if (this.actualState?.end) {
        this.initConfig();
      }
    } else if (context.id === '1') {
      this.toNextState();
    }
  }

  private asignQueryId(): void {
    this.chatService.getNextId().subscribe((id) => {
      this.nextId = id;
    });
  }
}
