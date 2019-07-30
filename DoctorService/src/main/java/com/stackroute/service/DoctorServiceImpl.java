package com.stackroute.service;

import com.stackroute.domain.BookAppointment;
import com.stackroute.domain.Doctor;
import com.stackroute.domain.DoctorAppointment;
import com.stackroute.domain.Slot;
import com.stackroute.exception.DoctorAlreadyExistsException;
import com.stackroute.exception.DoctorNotFoundException;
import com.stackroute.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class DoctorServiceImpl implements DoctorService {

    DoctorRepository doctorRepository;

    @Autowired
    public DoctorServiceImpl(DoctorRepository doctorRepository) {
        this.doctorRepository = doctorRepository;
    }

    @Autowired
    KafkaTemplate<String,Doctor > kafkaTemplate1;

    private static String topic1= "doctorcredentials";
    @Autowired
    KafkaTemplate<String,Doctor > kafkaTemplate2;

    private static String topic2= "doctorupdateddetails";




    @Override
    public Doctor save(Doctor doctor) {

        Optional optional=doctorRepository.findById(doctor.getEmailId());

        try {
            if (optional.isPresent()){
                throw new DoctorAlreadyExistsException("Doctor Already Exists");
            }
            String[] slots={"morning","afternoon","evening"};
            Slot slot=new Slot(slots);
            doctor.setSlot(slot);
            List<DoctorAppointment> doctorAppointmentList=new ArrayList<>();
            doctor.setDoctorAppointmentList(doctorAppointmentList);
            sendJson1(doctor);
            return doctorRepository.save(doctor);

        } catch (DoctorAlreadyExistsException e) {
            return null;
        }
    }

    @Override
    public String delete(String emailId) {
        Optional optional=doctorRepository.findById(emailId);

        try {
            if (optional.isPresent()){
                doctorRepository.deleteById(emailId);
                return "Deleted Successfully";
            }
            throw new DoctorNotFoundException("Doctor doesn't exists");
        } catch (DoctorNotFoundException e) {
            return "Doctor doesn't exists";
        }
    }

    @Override
    public String update(Doctor doctor) {
        Optional optional=doctorRepository.findById(doctor.getEmailId());

        try {
            if (optional.isPresent()){
                sendJson1(doctor);
                doctorRepository.save(doctor);

                return "Updated Successfully";
            }
            throw new DoctorNotFoundException("Doctor doesn't exists");
        } catch (DoctorNotFoundException e) {
            return "Doctor doesn't exists";
        }    }

    @Override
    public Doctor getDoctorByEmailId(String emailId) {
        return doctorRepository.findById(emailId).get();
    }

    @Override
    public List<Doctor> getAll() {
        return doctorRepository.findAll();
    }

    @Override
    public Doctor updateSlot(Slot slot,String emailId) {
        Optional optional=doctorRepository.findById(emailId);
        Doctor doctor=null;
        if (optional.isPresent()){
            doctor=doctorRepository.findById(emailId).get();
            doctor.setSlot(slot);
            doctorRepository.save(doctor);
            return doctor;
        }
        return null;
    }

    @Override
    public List<Doctor> findDoctorBySpecialization(String specialization) {
        List<Doctor> doctors=doctorRepository.findAll();
        List<Doctor> doctorList=new ArrayList<>();
       doctors.forEach(doctor -> {
           if (doctor.getSpecialization().equalsIgnoreCase(specialization)){
               doctorList.add(doctor);
           }
       });
        return doctorList;
    }

    @Override
    public List<Doctor> findDoctorByLocationAndSpecialization(String area, String specialization) {
        List<Doctor> doctors=doctorRepository.findAll();
        List<Doctor> doctorList=new ArrayList<>();
        doctors.forEach(doctor -> {
            if (doctor.getAddress().getArea().equalsIgnoreCase(area) && doctor.getSpecialization().equalsIgnoreCase(specialization)){
                doctorList.add(doctor);
            }
        });
        return doctorList;
    }

    @Override
    public List<Doctor> findDoctorByLocation(String area) {
        List<Doctor> doctors=doctorRepository.findAll();
        List<Doctor> doctorList=new ArrayList<>();
        doctors.forEach(doctor -> {
            if (doctor.getAddress().getArea().equalsIgnoreCase(area)){
                doctorList.add(doctor);
            }
        });

        return doctorList;
    }

    @Override
    public void updateDoctorAppointments(DoctorAppointment doctorAppointment,String emailId) {
        Optional optional=doctorRepository.findById(emailId);
        if (optional.isPresent())
        {
            System.out.println(doctorAppointment.toString());
            Doctor doctor=doctorRepository.findById(emailId).get();
            List<DoctorAppointment> doctorAppointments=doctor.getDoctorAppointmentList();
            doctorAppointments.add(doctorAppointment);
            doctor.setDoctorAppointmentList(doctorAppointments);
            doctorRepository.save(doctor);
            System.out.println("Doctor Service Impl: "+doctor);

        }
          }


    @Override
    public String sendJson1(Doctor doctor) {

        kafkaTemplate1.send(topic1,doctor);

        return "returned json successfully";
    }
    @Override
    public String sendJson2(Doctor doctor) {

        kafkaTemplate1.send(topic2,doctor);

        return "returned json successfully";
    }

    @KafkaListener(topics = "appointmentDetails",groupId = "Group_Json3")
    public void consumeJson(@Payload BookAppointment bookAppointment)
    {
        System.out.println("Consumed appointment"  +bookAppointment.toString());
        DoctorAppointment doctorAppointment=new DoctorAppointment(bookAppointment.getAppointmentId(),bookAppointment.getPatient(),bookAppointment.getAppointmentDate(),bookAppointment.getSlot());
        String emailId=bookAppointment.getDoctor().getEmailId();
        updateDoctorAppointments(doctorAppointment,emailId);

    }
}
