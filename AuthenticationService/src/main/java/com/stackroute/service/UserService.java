package com.stackroute.service;

import com.stackroute.domain.Doctor;
import com.stackroute.domain.Patient;
import com.stackroute.domain.User;


import java.util.List;

public interface UserService {

    User findByEmailId(String emailId);
    public User saveUser(User user);
    public void consumeJson(Patient patient);
    public void consumeJson1(Doctor doctor);

}
