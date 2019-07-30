package com.stackroute.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class DoctorAppointment {

    private String appointmentId;
    private Patient patient;
    private Date appointmentDate;
    private String slot;
}

