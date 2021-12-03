import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollToBottomDirective } from 'src/app/directives/scroll-to-bottom.directive';
import { AppointmentAssignmentComponent } from './appointment-assignment/appointment-assignment.component';



@NgModule({
  declarations: [ChatDialogComponent, ScrollToBottomDirective, AppointmentAssignmentComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ChatDialogComponent]
})
export class ChatModule { }
