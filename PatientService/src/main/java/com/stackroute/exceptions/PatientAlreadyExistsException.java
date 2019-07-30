package com.stackroute.exceptions;

public class PatientAlreadyExistsException extends Exception {

    private String message;

    public PatientAlreadyExistsException() {
    }

    public PatientAlreadyExistsException(String message) {
        super(message);
        this.message = message;
    }
}
