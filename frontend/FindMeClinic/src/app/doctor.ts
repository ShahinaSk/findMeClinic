import { Address } from './address';
import { DoctorAppointment } from './doctorappointment';

export class Doctor {
  name:String;
  role:String;
  gender:String;
  medicalLicense:String;
  profileImage:String;
  practiceStartedDate:String
  emailId:String;
  password:String; 
    qualification:String
    specialization:String;
    clinicName:String;
    address:Address;
    doctorAppointment:DoctorAppointment;


  }