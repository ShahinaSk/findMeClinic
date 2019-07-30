package com.stackroute.controller;

import com.stackroute.domain.Patient;
import com.stackroute.exceptions.PatientAlreadyExistsException;
import com.stackroute.exceptions.PatientNotFoundException;
import com.stackroute.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1")
@CrossOrigin(value="*")
public class PatientContoller {


    private PatientService patientService;

    @Autowired
    public PatientContoller(PatientService patientService) {
        this.patientService = patientService;
    }

    @PostMapping("patient")
    public ResponseEntity<?> savePatient(@RequestBody Patient patient){
        try {
            Patient savedPatient = patientService.savePatient(patient);
            return new ResponseEntity<Patient>(savedPatient, HttpStatus.CREATED);
        }
        catch(PatientAlreadyExistsException p)
        {
            return new ResponseEntity<String>("Patient Already Exists", HttpStatus.CONFLICT);
        }
    }

    @GetMapping("patients")
    public ResponseEntity<?> getAllPatients(){
        return new ResponseEntity<List<Patient>>(patientService.getPatients(),HttpStatus.OK);
    }

    @GetMapping("patients/{emailId}")
    public ResponseEntity<?> getPatientByEmailId(@PathVariable String emailId){
        return new ResponseEntity<>(patientService.getPatientByEmailId(emailId),HttpStatus.OK);
    }

    @DeleteMapping("patient/{emailId}")
    public ResponseEntity<?> deletePatient(@PathVariable String emailId){
        try {
            return new ResponseEntity<Patient>(patientService.deletePatientById(emailId), HttpStatus.OK);
        }
        catch(PatientNotFoundException p)
        {
            return new ResponseEntity<String>("Patient Not Found", HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("patient")
    public ResponseEntity<?> updatePatient(@RequestBody Patient patient)  {
        return new ResponseEntity<Patient>(patientService.updatePatient(patient),HttpStatus.OK);
    }



}
