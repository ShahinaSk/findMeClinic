package com.stackroute.service;

import com.stackroute.domain.BookAppointment;


public interface BookAppointmentService {

    BookAppointment saveAppointment(BookAppointment bookAppointment);
    String sendJson(BookAppointment bookAppointment);
}
