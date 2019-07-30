package com.stackroute.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(value= PatientAlreadyExistsException.class)
    public ResponseEntity<String> returnPatientAlreadyExistsException(PatientAlreadyExistsException patientAlreadyExistsException)
    {

        return new ResponseEntity<String>(patientAlreadyExistsException.getMessage(), HttpStatus.CONFLICT);
    }
    @ExceptionHandler(value= PatientNotFoundException.class)
    public ResponseEntity<String> returnPatientNotFoundException(PatientNotFoundException patientNotFoundException)
    {
        return new ResponseEntity<String>(patientNotFoundException.getMessage(), HttpStatus.NOT_FOUND);
    }
}
