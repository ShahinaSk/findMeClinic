package com.stackroute.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class DoctorAppointment {

    private Patient patient;
    private Date appointmentDate;
    private String slot;
    private String appointmentTime;
    private Integer appointmentId;

}
