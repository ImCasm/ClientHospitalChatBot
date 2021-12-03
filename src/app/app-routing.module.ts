import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatDialogComponent } from './modules/chat/chat-dialog/chat-dialog.component';
import { AppointmentAssignmentComponent } from './modules/chat/appointment-assignment/appointment-assignment.component';

const routes: Routes = [
  {
    path: 'assignment',
    component: AppointmentAssignmentComponent,
  },
  {
    path: 'bot', component: ChatDialogComponent,
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'bot'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
