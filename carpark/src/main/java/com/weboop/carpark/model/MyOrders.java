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
@Table(name = "my_orders")
public class MyOrders {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private int duration;
    private String slotTime;//8digit string format HHMM-HHMM
    private int rating; //from 1 to 5
    private int totalPayment;
    public boolean dryCleaning = false;
    public boolean carWash = false;
    public boolean airFill = false;

    @ElementCollection
    private List<String> comments = new ArrayList<String>();

    private int ParkingSlotID;
    private int userID;
    private int workerID;

    public int getDuration() {
        Integer.parseInt(this.slotTime);
        return 1;
    }

    public int calculatePayment() {
        return 100;
    }

    // Unique ID
    // Linked parking spot, time, duration services
    // display/calculate payment
    // payment details, user, worker
    // segregate into past/current or future
    // time, rating, comments
}
