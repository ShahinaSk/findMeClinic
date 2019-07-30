package com.stackroute.controller;


import com.stackroute.domain.BookAppointment;
import com.stackroute.service.BookAppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1")
@CrossOrigin(value="*")
public class BookAppointmentController {

    BookAppointmentService bookAppointmentService;

    @Autowired
    public BookAppointmentController(BookAppointmentService bookAppointmentService)
    {
        this.bookAppointmentService=bookAppointmentService;
    }

    @PostMapping("appointment")
    public ResponseEntity<?> saveAppointment(@RequestBody BookAppointment bookAppointment) {

            BookAppointment bookAppointment1 = bookAppointmentService.saveAppointment(bookAppointment);
            return new ResponseEntity<BookAppointment>(bookAppointment1, HttpStatus.CREATED);
    }

}
