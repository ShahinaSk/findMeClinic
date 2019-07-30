package com.stackroute;

import com.stackroute.controller.SchedulerController;
import com.stackroute.domain.QuartzJob;
import org.quartz.*;
import org.quartz.impl.StdSchedulerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.quartz.SchedulerFactoryBean;

@SpringBootApplication
@EnableEurekaClient
public class SchedulerServiceApplication {

	public static void main(String[] args) throws SchedulerException {

		//String exp="0 5 15 1/1 * ? *";
		SpringApplication.run(SchedulerServiceApplication.class, args);
//		JobDetail job=JobBuilder.newJob(QuartzJob.class).build();
//		Trigger t1= TriggerBuilder.newTrigger().withIdentity("SimpleTrigger").startNow().build();
//		Scheduler sc=StdSchedulerFactory.getDefaultScheduler();
//		sc.start();
//		sc.scheduleJob(job,t1);
	}

}
