package com.stackroute.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.NodeEntity;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@NodeEntity
public class DoctorDTO {
    @Id
    private String emailId;
    private String name;
    private String gender;
    private String phone;
    private String profileImage;
    private String qualification;
    private Date practiceStartedDate;
    private int noOfAppointments;
}
