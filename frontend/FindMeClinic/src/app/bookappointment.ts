import { Patient } from './Patient';
import { Doctor } from './doctor';

export class BookAppointment {
    patient:Patient;
    doctor:Doctor;
    appointmentDate:Date;
    slot:String;
    appointmentId:String;
}