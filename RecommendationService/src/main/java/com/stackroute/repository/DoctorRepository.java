package com.stackroute.repository;

import com.stackroute.domain.Doctor;
import com.stackroute.domain.DoctorDTO;
import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DoctorRepository  extends Neo4jRepository<DoctorDTO, String>{

   @Query("MATCH (d:DoctorDTO),(a:Address) WHERE d.emailId={emailId} AND a.pinCode={pinCode} CREATE (d)-[r:located_in]->(a) RETURN d")
   DoctorDTO createRelationBetweenDoctorDTOAndAddress(String emailId, String pinCode);

   @Query("MATCH (d:DoctorDTO),(s:Specialization) WHERE d.emailId={emailId} AND s.specialization={specialization} CREATE (d)-[r:specialized_in]->(s) RETURN d")
   DoctorDTO createRelationBetweenDoctorDTOAndSpecialization(String emailId, String specialization);

   @Query("MATCH (d:DoctorDTO),(c:Clinic) WHERE d.emailId={emailId} AND c.clinicName={clinicName} CREATE (d)-[r:works_at]->(c) RETURN d")
   DoctorDTO createRelationBetweenDoctorDTOAndClinic(String emailId, String clinicName);

   @Query("MATCH (d:DoctorDTO)-[r:works_at]-(c:Clinic) WHERE d.emailId={emailId} DELETE r RETURN d")
   DoctorDTO deleteRelationShipBetweenDoctorDTOAndClinic(String emailId);

   @Query("MATCH (d:DoctorDTO)-[r:located_in]-(a:Address) WHERE d.emailId={emailId} DELETE r RETURN d")
   DoctorDTO deleteRelationShipBetweenDoctorDTOAndAddress(String emailId);

   @Query("MATCH (d:DoctorDTO) WHERE d.emailId={emailId} DETACH DELETE d RETURN 'node deleted' ")
   Doctor deleteNode(String emailId);

   @Query("MATCH (d:DoctorDTO) RETURN d")
   List<DoctorDTO> getAll();

   @Query("MATCH (d:DoctorDTO)-[r:located_in]-(a:Address) WHERE a.area={area} RETURN d"+
           " ORDER BY d.noOfAppointments DESC,d.practiceStartedDate")
   List<DoctorDTO> getDoctorsByLocation(String area);

   @Query("MATCH (s:Specialization)<-[:specialized_in]-(d:DoctorDTO)-[:located_in]->(a:Address) "+
           "WHERE s.specialization={specialization} AND a.area={area} RETURN d " +
           "ORDER BY d.noOfAppointments DESC,d.practiceStartedDate LIMIT 4")
   List<DoctorDTO> getDoctorsByLocationAndSpecialization(String area, String specialization);


   @Query("MATCH (p:Patient)-[:visited]->(d:DoctorDTO)-[:specialized_in]->"+
           "(s:Specialization)<-[:specialized_in]-(doc:DoctorDTO) WHERE p.emailId={emailId} "+
           "RETURN doc ORDER BY doc.noOfAppointments DESC,doc.practiceStartedDate LIMIT 4")
   List<DoctorDTO> getDoctorsByLocationAndSpecializationForPatient(String emailId);


}

