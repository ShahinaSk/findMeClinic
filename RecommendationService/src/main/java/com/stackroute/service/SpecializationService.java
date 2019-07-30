package com.stackroute.service;


import com.stackroute.domain.Specialization;
import org.springframework.stereotype.Service;

public interface SpecializationService {

    Specialization save(String specialization);
}
