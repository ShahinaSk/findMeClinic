package com.stackroute.repository;

import com.stackroute.domain.Patient;
import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PatientRepository extends Neo4jRepository<Patient, String> {

    @Query("MATCH (d:DoctorDTO {emailId:{emailId}}) DETACH DELETE d RETURN 'Patient Deleted' ")
    String delete(String emailId);

    @Query("MATCH (p:Patient),(d:DoctorDTO) WHERE p.emailId={patientMailId} AND d.emailId={docEmailId} CREATE (p)-[r:visited]->(d) RETURN p")
    Patient createRelationForPatientAndDoctor(String patientMailId, String docEmailId);

    @Query("MATCH (p:Patient {emailId:{patientMailId}})-[r:visited]->(d:DoctorDTO {emailId:{docEmailId}}) DELETE r RETURN p")
    Patient deleteRelationForPatientAndDoctor(String patientMailId, String docEmailId);

}
