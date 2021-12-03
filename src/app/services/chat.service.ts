import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Appointment } from '../entities/appointment';
import { User } from '../entities/user';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private URL = environment.url;

  constructor(private http: HttpClient) { }

  saveAppointmentRequest(user: User, id: number, callback): void {
    const subject = new Subject<any>();
    this.getAppointments().subscribe(res => {
      const appointments = res || [];
      appointments.push({
        id,
        user,
        date: null,
        doctorName: null,
        assigned: false
      });
      return this.saveAppointments(appointments).subscribe(saved => { console.log(saved); callback(); });
    });
  }

  saveAppointments(appointments: Appointment[]): Observable<any> {
    return this.http.post<any>(`${this.URL}/save`, appointments);
  }

  getAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.URL + '/appointments');
  }

  getNextId(): Observable<number> {
    const subject$ = new Subject<number>();
    let nextId = 999;
    this.getAppointments().subscribe(res => {
      const appointments = res || [];
      appointments.forEach(appointment => {
        if (appointment.id > nextId) {
          nextId = appointment.id;
        }
      });
      subject$.next(nextId + 1);
    });
    return subject$.asObservable();
  }
}
