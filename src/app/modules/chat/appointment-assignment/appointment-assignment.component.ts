import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { Appointment } from '../../../entities/appointment';
import { ChatService } from '../../../services/chat.service';

@Component({
  selector: 'app-appointment-assignment',
  templateUrl: './appointment-assignment.component.html',
  styleUrls: ['./appointment-assignment.component.scss']
})
export class AppointmentAssignmentComponent implements OnInit {

  _appointmentsFull: Appointment[] = [];
  _appointments: Appointment[] = [];
  errorMessage = '';
  success = false;
  doctors = [
    'Carlos Matiz',
    'Rafael Enrique Conde Camacho',
    'Juan Pablo Rodríguez Gallego'
  ];
  frm = this.fb.group({
    appointments: this.fb.array([])
  });


  constructor(private chatService: ChatService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getAppointments();
  }

  save(): void {
    this.getAssignedObject();
    this.chatService.saveAppointments(this._appointmentsFull).subscribe(res => {
      if (res.success) {
        this.getAppointments();
        this.success = true;
        setTimeout(() => {
          this.success = false;
        }, 5000);
      }
    });
  }

  get appointments(): FormArray {
    return this.frm.get('appointments') as FormArray;
  }

  addAppointment(appointment: Appointment): void {
    const appointForm = this.fb.group({
      id: [{ value: appointment.id, disabled: true }],
      firstName: [{ value: appointment.user.firstName, disabled: true }],
      lastName: [{ value: appointment.user.lastName, disabled: true }],
      dni: [{ value: appointment.user.dni, disabled: true }],
      entity: [{ value: appointment.user.entity, disabled: true }],
      url: [{ value: appointment.user.url, disabled: true }],
      date: [{ value: appointment.date, disabled: appointment.assigned }],
      doctorName: [{ value: appointment.doctorName, disabled: appointment.assigned }],
      assigned: [{ value: appointment.assigned, disabled: true }]
    });
    this.appointments.push(appointForm);
  }

  getAppointments(): void {
    this._appointments = [];
    this._appointmentsFull = [];
    this.appointments.clear();
    this.chatService.getAppointments().subscribe(
      (appointments: Appointment[]) => {
        this._appointmentsFull = appointments;
        this._appointments = appointments.filter(a => !a.assigned);
        this._appointments.forEach(appointment => {
          this.addAppointment(appointment);
        });
      }
    );
  }

  assign(id: number): void {
    const control = this.appointments.get(id.toString())?.get('assigned');
    control.setValue(true);
    control.disable();
  }

  getAssignedObject(): void {
    const appointments = this.frm.getRawValue().appointments as Appointment[];
    appointments.forEach(appointment => {
      const ap = this._appointmentsFull.find(a => a.id === appointment.id);
      if (ap && appointment.assigned) {
        if (appointment.date && appointment.doctorName) {
          ap['assigned'] = true;
          ap['date'] = appointment.date;
          ap['doctorName'] = appointment.doctorName;
        } else {
          this.errorMessage = `Debe asignar una fecha y un doctor a la solicitud #${ap.id}`;
          this.success = false;
          setTimeout(() => {
            this.errorMessage = '';
          }, 6000);
        }
      }
    });
  }
}
