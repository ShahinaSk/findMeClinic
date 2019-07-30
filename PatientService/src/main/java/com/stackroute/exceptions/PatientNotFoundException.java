package com.stackroute.exceptions;

public class PatientNotFoundException extends  Exception{

    private String message;

    public PatientNotFoundException() {
    }

    public PatientNotFoundException(String message) {
        super(message);
        this.message = message;
    }
}
