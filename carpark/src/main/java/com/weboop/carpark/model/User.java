package com.weboop.carpark.model;

import lombok.Data;

import java.util.*;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Data
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String firstName;
    private String lastName;
    private String address;
    private String mobileNumber;
    private String carNumber;
    private String email;
    private String password;
    
    @ElementCollection
    private List<Integer> linkedOrderIDs = new ArrayList<Integer>();
}