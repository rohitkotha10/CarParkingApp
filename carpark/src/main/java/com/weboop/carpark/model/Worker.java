package com.weboop.carpark.model;

import java.util.*;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "worker")
public class Worker {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private String email;
    private int workExperience; // in hours
    private String password;

    @ElementCollection
    private Set<Integer> linkedOrderIDs = new HashSet<Integer>();

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Set<Integer> getLinkedOrderIDs() {
        return linkedOrderIDs;
    }

    public void setLinkedOrderIDs(Set<Integer> linkedOrderIDs) {
        this.linkedOrderIDs = linkedOrderIDs;
    }

    public int getRating() {
        return 3;
        // avg of linkedorder ratings
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getWorkExperience() {
        return workExperience;
    }

    public void setWorkExperience(int workExperience) {
        this.workExperience = workExperience;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<String> getComments() {
        return new ArrayList<String>();
        // get all comments from orderIDs
    }
}