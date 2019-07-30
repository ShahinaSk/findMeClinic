package com.stackroute.exception;

public class DoctorAlreadyExistsException extends Exception {
    String message;

    public DoctorAlreadyExistsException(String message) {
        super(message);
        this.message = message;
    }
}
