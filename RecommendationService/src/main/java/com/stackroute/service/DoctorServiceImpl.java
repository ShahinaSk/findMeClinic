package com.stackroute.service;

import com.stackroute.domain.*;
import com.stackroute.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DoctorServiceImpl implements DoctorService {


    private DoctorRepository doctorRepository;
    private AddressServiceImpl addressService;
    private ClinicServiceImpl clinicService;
    private SpecializationServiceImpl specializationService;

    @Autowired
    public DoctorServiceImpl(DoctorRepository doctorRepository, AddressServiceImpl addressService,
                             ClinicServiceImpl clinicService, SpecializationServiceImpl specializationService) {
        this.doctorRepository = doctorRepository;
        this.addressService = addressService;
        this.clinicService = clinicService;
        this.specializationService = specializationService;
    }

    @Override
    public DoctorDTO save(Doctor doctor) {

        DoctorDTO doctorDTO = new DoctorDTO();
        doctorDTO.setEmailId(doctor.getEmailId());
        doctorDTO.setName(doctor.getName());
        doctorDTO.setGender(doctor.getGender());
        doctorDTO.setPhone(doctor.getPhone());
        doctorDTO.setProfileImage(doctor.getProfileImage());
        doctorDTO.setQualification(doctor.getQualification());
        doctorDTO.setPracticeStartedDate(doctor.getPracticeStartedDate());
        doctorDTO.setNoOfAppointments(doctor.getDoctorAppointmentList().size());
        doctorDTO = doctorRepository.save(doctorDTO);

        Clinic savedClinic = clinicService.save(new Clinic(doctor.getClinicName(), doctor.getClinicImage()));
        Address address = addressService.save(doctor.getAddress());

        Specialization specialization = specializationService.save(doctor.getSpecialization());
        doctorDTO = createRelationBetweenDoctorDTOAndAddress(doctorDTO.getEmailId(), address.getPinCode());
        doctorDTO = createRelationBetweenDoctorDTOAndClinic(doctorDTO.getEmailId(), savedClinic.getClinicName());
        doctorDTO = createRelationBetweenDoctorDTOAndSpecialization(doctorDTO.getEmailId(), specialization.getSpecialization());
        return doctorDTO;
    }

    @Override
    public String delete(String emailId) {
        doctorRepository.deleteNode(emailId);
        return "Deleted Successfully";
    }

    @Override
    public DoctorDTO update(Doctor doctor) {

        Address address = addressService.save(doctor.getAddress());
        Clinic clinic = clinicService.save(new Clinic(doctor.getClinicName(), doctor.getClinicImage()));
        DoctorDTO doctorDTO = doctorRepository.findById(doctor.getEmailId()).get();
        doctorDTO = doctorRepository.deleteRelationShipBetweenDoctorDTOAndClinic(doctorDTO.getEmailId());
        doctorDTO = doctorRepository.deleteRelationShipBetweenDoctorDTOAndAddress(doctorDTO.getEmailId());

        doctorDTO.setEmailId(doctor.getEmailId());
        doctorDTO.setName(doctor.getName());
        doctorDTO.setGender(doctor.getGender());
        doctorDTO.setPhone(doctor.getPhone());
        doctorDTO.setProfileImage(doctor.getProfileImage());
        doctorDTO.setQualification(doctor.getQualification());
        doctorDTO.setPracticeStartedDate(doctor.getPracticeStartedDate());
        doctorDTO.setNoOfAppointments(doctor.getDoctorAppointmentList().size());

        doctorDTO = doctorRepository.save(doctorDTO);

        doctorDTO = doctorRepository.createRelationBetweenDoctorDTOAndClinic(doctorDTO.getEmailId(), clinic.getClinicName());
        doctorDTO = doctorRepository.createRelationBetweenDoctorDTOAndAddress(doctorDTO.getEmailId(), address.getPinCode());

        return doctorDTO;

    }

    @Override
    public List<DoctorDTO> getAll() {
        return doctorRepository.getAll();
    }

    @Override
    public DoctorDTO getDoctorByEmailId(String emailId) {
        return doctorRepository.findById(emailId).get();
    }

    @Override
    public DoctorDTO createRelationBetweenDoctorDTOAndAddress(String emailId, String pinCode) {
        return doctorRepository.createRelationBetweenDoctorDTOAndAddress(emailId, pinCode);
    }

    @Override
    public DoctorDTO createRelationBetweenDoctorDTOAndClinic(String emailId, String clinicName) {
        return doctorRepository.createRelationBetweenDoctorDTOAndClinic(emailId, clinicName);
    }

    @Override
    public DoctorDTO createRelationBetweenDoctorDTOAndSpecialization(String emailId, String specialization) {
        return doctorRepository.createRelationBetweenDoctorDTOAndSpecialization(emailId, specialization);
    }

    @Override
    public DoctorDTO deleteRelationShipBetweenDoctorDTOAndClinic(String emailId) {
        return doctorRepository.deleteRelationShipBetweenDoctorDTOAndClinic(emailId);
    }

    @Override
    public DoctorDTO deleteRelationShipBetweenDoctorDTOAndAddress(String emailId) {
        return doctorRepository.deleteRelationShipBetweenDoctorDTOAndAddress(emailId);
    }

    @Override
    public List<DoctorDTO> getDoctorsByLocation(String area) {
        return doctorRepository.getDoctorsByLocation(area);
    }

    @Override
    public List<DoctorDTO> getDoctorsByLocationAndSpecialization(String area, String specialization) {
        return doctorRepository.getDoctorsByLocationAndSpecialization(area, specialization);
    }

    @Override
    public List<DoctorDTO> getDoctorsByLocationAndSpecializationForPatient(String emailId) {
        return doctorRepository.getDoctorsByLocationAndSpecializationForPatient(emailId);
    }

    @KafkaListener(topics = "doctorcredentials", groupId = "Group_Json1", containerFactory = "kafkaListenerContainerFactory1")
    public void consumeJson1(@Payload Doctor doctor) {
        save(doctor);
        System.out.println("Consumed doctor" + doctor.toString());
    }

    @KafkaListener(topics = "doctorupdateddetails", groupId = "Group_Json2", containerFactory = "kafkaListenerContainerFactory2")
    public void consumeJson2(@Payload Doctor doctor) {
        update(doctor);
        System.out.println("Consumed doctor" + doctor.toString());
    }

    @KafkaListener(topics = "appointmentDetails", groupId = "Group_Json3")
    public void consumeJson(@Payload BookAppointment bookAppointment) {
        System.out.println("Consumed appointment" + bookAppointment.toString());
        updateAppointments(doctorRepository.findById(bookAppointment.getDoctor().getEmailId()).get());
    }

    public DoctorDTO updateAppointments(DoctorDTO doctorDTO) {
        doctorDTO.setNoOfAppointments(doctorDTO.getNoOfAppointments() + 1);

        return doctorRepository.save(doctorDTO);
    }
}






