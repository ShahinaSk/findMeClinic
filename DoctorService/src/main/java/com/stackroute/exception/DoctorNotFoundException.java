package com.stackroute.exception;

public class DoctorNotFoundException extends Exception {
    String message;

    public DoctorNotFoundException(String message) {
        super(message);
        this.message = message;
    }
}
