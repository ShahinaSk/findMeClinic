package com.stackroute.repository;

import com.stackroute.domain.Scheduler;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ScheduleRepository extends CrudRepository<Scheduler,String> {

}
