package com.stackroute.service;

import com.stackroute.domain.BookAppointment;
import com.stackroute.domain.Patient;
import com.stackroute.domain.PatientAppointment;
import com.stackroute.exceptions.PatientAlreadyExistsException;
import com.stackroute.exceptions.PatientNotFoundException;
import com.sun.source.doctree.DocTree;

import java.util.List;

public interface PatientService {
   Patient savePatient(Patient patient) throws PatientAlreadyExistsException;
   List<Patient> getPatients();
   Patient getPatientByEmailId(String emailId);
   Patient deletePatientById(String emailId) throws PatientNotFoundException;
   Patient updatePatient(Patient patient);
   String sendJson(Patient patient);
   void consumeJson(BookAppointment bookAppointment);
   void updatePatientAppointment(PatientAppointment patientAppointment, String emailId);

   }
