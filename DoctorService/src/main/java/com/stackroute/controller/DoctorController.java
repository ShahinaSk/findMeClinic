package com.stackroute.controller;

import com.stackroute.domain.Doctor;
import com.stackroute.domain.Slot;
import com.stackroute.exception.DoctorAlreadyExistsException;
import com.stackroute.exception.DoctorNotFoundException;
import com.stackroute.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1")
@CrossOrigin(value = "*")
public class DoctorController {

    private DoctorService doctorService;

    @Autowired
    public DoctorController(DoctorService doctorService) {
        this.doctorService = doctorService;
    }

    @PostMapping("doctor")
    public ResponseEntity<?> save(@RequestBody Doctor doctor) {

        try {
          return new ResponseEntity<>(doctorService.save(doctor), HttpStatus.CREATED);

        } catch (DoctorAlreadyExistsException e) {
            return new ResponseEntity<>("Doctor Already Exists",HttpStatus.CONFLICT);
        }
    }

    @DeleteMapping("doctor/{emailId}")
    public ResponseEntity<?> delete(@PathVariable String emailId) {

        return new ResponseEntity<>(doctorService.delete(emailId), HttpStatus.OK);
    }

    @PutMapping("doctor/{emailId}")
    public ResponseEntity<?> updateDoctorDetails(@RequestBody Doctor doctor) {

        ResponseEntity responseEntity;
        try{
            return new ResponseEntity<>(doctorService.update(doctor),HttpStatus.OK);
        } catch (DoctorNotFoundException e) {
            return new ResponseEntity<>("Doctor doesn't exist",HttpStatus.NOT_FOUND);

        }
    }

    @PutMapping("doctor1/{emailId}")
    public ResponseEntity<?> updateSlots(@RequestBody Slot slot,@PathVariable String emailId) {

        System.out.println(slot+"\t"+emailId);

        ResponseEntity responseEntity;

            return new ResponseEntity<>(doctorService.updateSlot(slot,emailId),HttpStatus.OK);
    }

    @GetMapping("doctors1/{emailId}")
    public ResponseEntity<?> getDoctorByEmailId(@PathVariable String emailId){

        return new ResponseEntity<>(doctorService.getDoctorByEmailId(emailId),HttpStatus.OK);
    }



    @GetMapping("doctors")
    public ResponseEntity<?> getAll(){

        return new ResponseEntity<>(doctorService.getAll(),HttpStatus.OK);
    }

    @GetMapping("doctors/{area}")
    public ResponseEntity<?> findDoctorByLocation(@PathVariable String area){
        return new ResponseEntity<>(doctorService.findDoctorByLocation(area), HttpStatus.OK);
    }

    @GetMapping("doctor/{specialization}")
    public ResponseEntity<?> findDoctorBySpecialization(@PathVariable String specialization){
        return new ResponseEntity<>(doctorService.findDoctorBySpecialization(specialization),HttpStatus.OK);
    }

    @GetMapping("doctor/{area}/{specialization}")
    public ResponseEntity<?> findDoctorByLocationAndSpecialization(@PathVariable String area,@PathVariable String specialization){
        return new ResponseEntity<>(doctorService.findDoctorByLocationAndSpecialization(area, specialization), HttpStatus.OK);
    }

}
