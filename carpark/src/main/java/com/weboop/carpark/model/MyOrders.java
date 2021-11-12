package com.weboop.carpark.model;

import lombok.Data;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Data
@Table(name="Orders")
public class MyOrders {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private int duration;
    private int hello;
    private int slotTime;
    private int rating;
    private int totalPayment;
    // private ArrayList<String> comments = new ArrayList<String>();
    // private ParkingSlot slot;
    // private User user;
    // private Worker worker;

    // calculate payment implementation
    // services offered

    // Unique ID
    // Linked parking spot, time, duration services
    // display/calculate payment
    // payment details, user, worker
    // segregate into past/current or future
    // time, rating, comments
}
