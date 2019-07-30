package com.stackroute.domain;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BookAppointment {

    @Id
    private String appointmentId;
    private Doctor doctor;
    private Patient patient;
    private Date appointmentDate;
    private String slot;

}

