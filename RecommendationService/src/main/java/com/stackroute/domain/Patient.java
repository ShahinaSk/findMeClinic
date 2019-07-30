package com.stackroute.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.NodeEntity;
import org.springframework.data.annotation.Transient;

import java.util.Date;

@NodeEntity
@Data
@NoArgsConstructor
@AllArgsConstructor
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
//    private List<PatientAppointment> patientAppointmentList;

}









