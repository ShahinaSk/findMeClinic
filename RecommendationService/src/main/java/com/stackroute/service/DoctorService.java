package com.stackroute.service;


import com.stackroute.domain.Doctor;
import com.stackroute.domain.DoctorDTO;
import org.springframework.stereotype.Service;

import java.util.List;

public interface DoctorService {

    DoctorDTO save(Doctor doctor);

    String delete(String emailId);

    DoctorDTO update(Doctor doctor);

    List<DoctorDTO> getAll();

    DoctorDTO getDoctorByEmailId(String emailId);

    DoctorDTO createRelationBetweenDoctorDTOAndAddress(String emailId, String pinCode);

    DoctorDTO createRelationBetweenDoctorDTOAndClinic(String emailId, String clinicName);

    DoctorDTO createRelationBetweenDoctorDTOAndSpecialization(String emailId, String specialization);

    DoctorDTO deleteRelationShipBetweenDoctorDTOAndClinic(String emailId);

    DoctorDTO deleteRelationShipBetweenDoctorDTOAndAddress(String emailId);

    List<DoctorDTO> getDoctorsByLocation(String area);

    List<DoctorDTO> getDoctorsByLocationAndSpecialization(String area, String specialization);

    List<DoctorDTO> getDoctorsByLocationAndSpecializationForPatient(String emailId);

    void consumeJson1(Doctor doctor);
    void consumeJson2(Doctor doctor);


}
