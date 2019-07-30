package com.stackroute.service;


import com.stackroute.domain.BookAppointment;
import com.stackroute.domain.Doctor;
import com.stackroute.domain.Patient;
import com.stackroute.repository.BookAppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Service;

import java.awt.print.Book;

@Service
public class BookAppointmentServiceImpl  implements BookAppointmentService{



    private BookAppointmentRepository bookAppointmentRepository;

    @Autowired
    public BookAppointmentServiceImpl(BookAppointmentRepository bookAppointmentRepository) {
        this.bookAppointmentRepository = bookAppointmentRepository;
    }

    @Autowired
    KafkaTemplate<String,BookAppointment > kafkaTemplate;

    private static String topic= "appointmentDetails";


    @Override
    public BookAppointment saveAppointment(BookAppointment bookAppointment) {

        BookAppointment bookAppointment1=bookAppointmentRepository.save(bookAppointment);

        sendJson(bookAppointment);

        System.out.println("Harshitha");
        return bookAppointment1;
    }

    @Override
    public String sendJson(BookAppointment bookAppointment) {

        kafkaTemplate.send(topic,bookAppointment);

        return "returned json successfully";
    }

}
