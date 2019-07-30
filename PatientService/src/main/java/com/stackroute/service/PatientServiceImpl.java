package com.stackroute.service;

import com.stackroute.domain.BookAppointment;
import com.stackroute.domain.Patient;
import com.stackroute.domain.PatientAppointment;
import com.stackroute.exceptions.PatientAlreadyExistsException;
import com.stackroute.exceptions.PatientNotFoundException;
import com.stackroute.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class PatientServiceImpl implements PatientService{

    private PatientRepository patientRepository;

    @Autowired
    public PatientServiceImpl(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }
    @Autowired
    KafkaTemplate<String,Patient > kafkaTemplate;

    private static String topic= "patientcredentials";

    @Autowired
    KafkaTemplate<String,Patient > kafkaTemplate1;

    private static String topic1= "patientupdateddetails";

    @Override
    public Patient savePatient(Patient patient) throws PatientAlreadyExistsException {

        if (patientRepository.existsById(patient.getEmailId())) {
            throw new PatientAlreadyExistsException("Doctor Already exists");
        }
        List<PatientAppointment> patientAppointmentList=new ArrayList<>();
        patient.setPatientAppointmentList(patientAppointmentList);
        Patient savedPatient=patientRepository.save(patient);
        sendJson(patient);
        return savedPatient;

    }

    @Override
    public List<Patient> getPatients() {

        return patientRepository.findAll();
    }

    @Override
    public Patient getPatientByEmailId(String emailId) {
        return patientRepository.findById(emailId).get();
    }

    @Override
    public Patient deletePatientById(String emailId) throws PatientNotFoundException {

        Patient patient;
        Optional optional=patientRepository.findById(emailId);
        if (optional.isPresent()){
            patient=patientRepository.findById(emailId).get();
            patientRepository.deleteById(emailId);
            return patient;
        }
        else
        {
            throw  new PatientNotFoundException("Patient Not Found");
        }


    }

    @Override
    public Patient updatePatient(Patient patient) {

        Optional optional=patientRepository.findById(patient.getEmailId());
        if (optional.isPresent())
        {
          sendJson(patient);
          patientRepository.save(patient);

        }

        return patient;
    }
    @Override
    public void updatePatientAppointment(PatientAppointment patientAppointment,String emailId) {

        Optional optional=patientRepository.findById(emailId);
        if (optional.isPresent())
        {
            System.out.println(patientAppointment.toString());
            Patient patient=patientRepository.findById(emailId).get();
            System.out.println(patient);
            List<PatientAppointment> patientAppointments=patient.getPatientAppointmentList();
            patientAppointments.add(patientAppointment);
            patient.setPatientAppointmentList(patientAppointments);
            patientRepository.save(patient);
            System.out.println(patient);
        }

    }


    @Override
    public String sendJson(Patient patient) {

        kafkaTemplate.send(topic,patient);

        return "returned json successfully";
    }




    @KafkaListener(topics = "appointmentDetails",groupId = "Group_Json2")
    public void consumeJson(@Payload BookAppointment bookAppointment)
    {
        System.out.println("Consumed appointment"  +bookAppointment.toString());
        PatientAppointment patientAppointment=new PatientAppointment(bookAppointment.getAppointmentId(),bookAppointment.getDoctor(),bookAppointment.getAppointmentDate(),bookAppointment.getSlot());
        String emailId=bookAppointment.getPatient().getEmailId();
        updatePatientAppointment(patientAppointment,emailId);

    }
}
