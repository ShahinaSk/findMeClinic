package com.stackroute.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.NodeEntity;

@Data
@NodeEntity
@AllArgsConstructor
@NoArgsConstructor
public class Address {

    private String state;
    private String city;
    private String address;
    private String area;
    @Id
    private String pinCode;

}
