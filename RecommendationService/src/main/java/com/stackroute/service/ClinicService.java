package com.stackroute.service;

import com.stackroute.domain.Clinic;
import org.springframework.stereotype.Service;

import java.util.List;

public interface ClinicService {

    Clinic save(Clinic clinic);

    List<Clinic> getClinicsByLocation(String area);

    List<Clinic> getClinicsByLocationAndSpecialization(String area, String specialization);

    List<Clinic> getClinicsByLocationAndSpecializationForPatient(String emailId);
}
