package com.stackroute.service;

import com.stackroute.domain.Specialization;
import com.stackroute.repository.SpecializationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SpecializationServiceImpl implements SpecializationService {

    SpecializationRepository specializationRepository;

    @Autowired
    public SpecializationServiceImpl(SpecializationRepository specializationRepository) {
        this.specializationRepository = specializationRepository;
    }

    @Override
    public Specialization save(String specialization) {
        if (!specializationRepository.existsById(specialization)){
            return specializationRepository.save(new Specialization(specialization));
        }
        return specializationRepository.findById(specialization).get();
    }
}
