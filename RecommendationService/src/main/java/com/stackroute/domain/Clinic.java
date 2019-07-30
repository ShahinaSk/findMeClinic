package com.stackroute.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.NodeEntity;

@Data
@NodeEntity
@NoArgsConstructor
@AllArgsConstructor
public class Clinic {

    @Id
    private String clinicName;
    private String clinicImage;
}
