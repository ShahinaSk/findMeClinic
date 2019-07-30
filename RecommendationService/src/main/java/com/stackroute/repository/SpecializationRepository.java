package com.stackroute.repository;

import com.stackroute.domain.Specialization;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SpecializationRepository extends Neo4jRepository<Specialization, String> {
}
