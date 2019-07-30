package com.stackroute.controller;

import com.stackroute.domain.User;
import com.stackroute.exception.PasswordNotMatchException;
import com.stackroute.exception.UserNotFoundException;
import com.stackroute.exception.UserNameOrPasswordEmptyException;
import com.stackroute.jwt.SecurityTokenGenerator;
import com.stackroute.service.UserService;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.Jwts;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;


@CrossOrigin(value = "*")
@RequestMapping("api/v1")
@RestController
public class UserController {
    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @ApiOperation(value = "Accept user into repository and generating token")
    @PostMapping("/user")
    public ResponseEntity<?> login(@RequestBody User user1) throws UserNameOrPasswordEmptyException, UserNotFoundException, PasswordNotMatchException {


        String username=user1.getEmailId();
        String password=user1.getPassword();

        if (username == null || password == null ) {

            throw new UserNameOrPasswordEmptyException("Email or Password should not be empty");
        }

        User user = userService.findByEmailId(username);

        String fetchedPassword = user.getPassword();

        if (!password.equals(fetchedPassword)) {
            throw new PasswordNotMatchException();
        }

        // generating token

        SecurityTokenGenerator securityTokenGenrator = (User userDetails) -> {
            String jwtToken = "";

            jwtToken = Jwts.builder().setId(""+user.getEmailId()).setAudience(""+user.getRole()).setIssuedAt(new Date())

                    .signWith(SignatureAlgorithm.HS256, "secretkey").compact();

            Map<String, String> map1 = new HashMap<>();

            map1.put("token", jwtToken);

            map1.put("message", "user logged in successfully");

            return map1;

        };
        Map<String, String> map = securityTokenGenrator.generateToken(user);
        return new ResponseEntity<>(map, HttpStatus.OK);

    }
}