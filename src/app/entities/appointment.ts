import { User } from './user';

export interface Appointment {
  id: number;
  user: User;
  date?: Date | string;
  doctorName?: string;
  assigned?: boolean;
}
