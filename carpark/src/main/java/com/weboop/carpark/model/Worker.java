package com.weboop.carpark.model;

import lombok.Data;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Transient;

@Entity
@Data
public class Worker {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private String email;
    private int workExperience;

    @Transient
    private String password;
    // private ArrayList<Integer> linkedOrders;

    // calculate rating
}
// unique ID, name, email, age, gender,
// order history
// hours worked
// rating, comments from order
