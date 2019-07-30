package com.stackroute.service;

import com.stackroute.domain.BookAppointment;
import com.stackroute.domain.Doctor;
import com.stackroute.domain.DoctorAppointment;
import com.stackroute.domain.Slot;
import com.stackroute.exception.DoctorAlreadyExistsException;
import com.stackroute.exception.DoctorNotFoundException;

import java.util.List;

public interface DoctorService {
    Doctor save(Doctor doctor) throws DoctorAlreadyExistsException;
    String delete(String emailId);
    String update(Doctor doctor) throws DoctorNotFoundException;
    Doctor getDoctorByEmailId(String emailId);
    List<Doctor> getAll();
    Doctor updateSlot(Slot slot,String emailId);
    String sendJson1(Doctor doctor);
    String sendJson2(Doctor doctor);
    List<Doctor> findDoctorBySpecialization(String specialization);
    List<Doctor> findDoctorByLocationAndSpecialization(String area,String specialization);
    List<Doctor> findDoctorByLocation(String area);
    void consumeJson(BookAppointment bookAppointment);
    void updateDoctorAppointments(DoctorAppointment doctorAppointment, String emailId);


}
