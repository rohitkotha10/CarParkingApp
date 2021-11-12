package com.weboop.carpark.model;

import lombok.Data;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Transient;

@Entity
@Data
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

    @Transient
    private String password;
}
// private ArrayList<Integer> linkedOrders;

// unique ID, name, email, age, gender,
// order history
// First Name, Last Name, Username, Password, Confirm Password, Residential
// Address, Email ID, Mobile number, and Car Registration number.
