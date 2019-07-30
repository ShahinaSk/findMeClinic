package com.stackroute.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document
@Data
@NoArgsConstructor
@AllArgsConstructor
public class BookAppointment {

    @Id
    private String appointmentId;
    private Doctor doctor;
    private Patient patient;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date appointmentDate;
    private String slot;

}
