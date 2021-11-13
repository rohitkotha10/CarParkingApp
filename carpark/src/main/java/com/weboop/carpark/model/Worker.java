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
@Table(name = "worker")
public class Worker {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private String email;
    private int workExperience; //in hours
    private String password;
    
    @ElementCollection
    private List<Integer> linkedOrderIDs = new ArrayList<Integer>();

    public int getRating() {
        return 3;
        //avg of linkedorder ratings
    }

    public List<String> getComments() {
        return new ArrayList<String> ();
        //get all comments from orderIDs
    }
}