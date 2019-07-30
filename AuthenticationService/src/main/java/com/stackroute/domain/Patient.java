package com.stackroute.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
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
        private String password;
        private String role;
        private List<PatientAppointment> patientAppointmentList;

    }


