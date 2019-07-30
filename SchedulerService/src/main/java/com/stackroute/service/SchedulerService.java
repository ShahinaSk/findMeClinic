package com.stackroute.service;

import com.stackroute.domain.Scheduler;

import java.util.List;

public interface SchedulerService {

    Scheduler getSlots(String emailId);
    Scheduler save(Scheduler scheduler);
    Scheduler putSlots(String emailId,String key,Integer value);
    List<Scheduler> getAll();
}
