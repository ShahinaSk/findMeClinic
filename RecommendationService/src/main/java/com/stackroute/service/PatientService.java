package com.stackroute.service;

import com.stackroute.domain.Patient;
import org.springframework.stereotype.Service;

public interface PatientService {

    Patient save(Patient patient);

    Patient update(Patient patient);

    String delete(String emailId);

    void consumeJson(Patient patient);

    Patient createRelationForPatientAndDoctor(String patientMailId, String docEmailId);

    Patient deleteRelationForPatientAndDoctor(String patientMailId, String docEmailId);


}
