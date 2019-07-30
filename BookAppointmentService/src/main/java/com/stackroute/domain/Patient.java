package com.stackroute.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;


import java.util.Date;
import java.util.List;


@NoArgsConstructor
@AllArgsConstructor
@Data
public class Patient {

    private String name;
    private Date dateOfBirth;
    private String gender;
    private String phone;
    @Id
    private String emailId;
    @Transient
    private String password;
    @Transient
    private String role;
    private List<PatientAppointment> patientAppointmentList;

}
