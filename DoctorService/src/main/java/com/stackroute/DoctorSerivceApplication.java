package com.stackroute;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.kafka.annotation.EnableKafka;

@SpringBootApplication
@EnableEurekaClient
public class DoctorSerivceApplication {

	public static void main(String[] args) {
		SpringApplication.run(DoctorSerivceApplication.class, args);
	}

}
