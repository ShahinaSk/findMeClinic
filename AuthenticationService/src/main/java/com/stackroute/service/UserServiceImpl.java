package com.stackroute.service;

import com.stackroute.domain.Doctor;
import com.stackroute.domain.Patient;
import com.stackroute.domain.User;
import com.stackroute.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {


    UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User findByEmailId(String emailId) {

        Optional optional= userRepository.findById(emailId);
        User user=null;

        if(optional.isPresent())
        {
            user=userRepository.findById(emailId).get();

        }
        return  user;
    }

    @Override
    public User saveUser(User user)  {
        User savedUser = userRepository.save(user);
        System.out.println(savedUser);
        return savedUser;
    }

    @KafkaListener(topics = "patientcredentials",groupId = "Group_Json")
    public void consumeJson(@Payload Patient patient)
    {
        System.out.println("Consumed patient"  +patient.toString());
        User user=new User(patient.getEmailId(),patient.getPassword(),patient.getRole());
        saveUser(user);
    }

    @KafkaListener(topics = "doctorcredentials",groupId = "Group_Json1",containerFactory = "kafkaListenerContainerFactory1")
    public void consumeJson1(@Payload Doctor doctor)
    {
        System.out.println("Consumed doctor"  +doctor.toString());
        User user=new User(doctor.getEmailId(),doctor.getPassword(),doctor.getRole());
        saveUser(user);
    }

}