package com.stackroute.service;

import com.stackroute.domain.Clinic;
import com.stackroute.repository.ClinicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClinicServiceImpl implements ClinicService {

    private ClinicRepository clinicRepository;

    @Autowired
    public ClinicServiceImpl(ClinicRepository clinicRepository) {
        this.clinicRepository = clinicRepository;
    }

    @Override
    public Clinic save(Clinic clinic) {

        return clinicRepository.save(clinic);
    }

    @Override
    public List<Clinic> getClinicsByLocation(String area) {
        return clinicRepository.getClinicsByLocation(area);
    }

    @Override
    public List<Clinic> getClinicsByLocationAndSpecialization(String area, String specialization) {
        return clinicRepository.getClinicsByLocationAndSpecialization(area, specialization);
    }

    @Override
    public List<Clinic> getClinicsByLocationAndSpecializationForPatient(String emailId) {
        return clinicRepository.getClinicsByLocationAndSpecializationForPatient(emailId);
    }


}
