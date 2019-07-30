package com.stackroute.repository;

import com.stackroute.domain.Clinic;
import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClinicRepository extends Neo4jRepository<Clinic, String> {

    @Query("MATCH (c:Clinic)<-[:works_at]-(d:DoctorDTO)-[r:located_in]-(a:Address) WHERE a.area={area} RETURN c"+
            " ORDER BY d.noOfAppointments DESC,d.practiceStartedDate")
    List<Clinic> getClinicsByLocation(String area);

    @Query("MATCH (a:Address)<-[:located_in]-(d:DoctorDTO)-[:works_at]->(c:Clinic) WHERE a.area={area} RETURN c "+
            "ORDER BY d.noOfAppointments DESC,d.practiceStartedDate LIMIT 4")
    List<Clinic> getClinicsByLocationAndSpecialization(String area, String specialization);

    @Query("MATCH (p:Patient)-[:visited]->(d:DoctorDTO)-[:specialized_in]->"+
            "(s:Specialization)<-[:specialized_in]-(d1:DoctorDTO)-[:works_at]->(c:Clinic) WHERE p.emailId={emailId} "+
            "RETURN c ORDER BY d1.noOfAppointments DESC,d1.practiceStartedDate LIMIT 4")
    List<Clinic> getClinicsByLocationAndSpecializationForPatient(String emailId);

}
