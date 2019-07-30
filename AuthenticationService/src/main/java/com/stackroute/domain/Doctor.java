package com.stackroute.domain;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Id;
import java.util.Date;
import java.util.List;


@NoArgsConstructor
@AllArgsConstructor
@Data
public class Doctor {

    @Id
    private String emailId;
    private String role;
    private String name;
    private String gender;
    private String phone;
    private String medicalLicense;
    private String qualification;
    private String specialization;
    private Date practiceStartedDate;
    private String clinicName;
    private Address address;
    private String password;
    private List<DoctorAppointment> doctorAppointmentList;
}
