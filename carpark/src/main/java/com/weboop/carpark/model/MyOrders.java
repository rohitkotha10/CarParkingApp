package com.weboop.carpark.model;

import java.util.*;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "my_orders")
public class MyOrders {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String slotTime;//8digit string format HHMM-HHMM
    private int rating; //from 1 to 5
    private int totalPayment;
    private boolean dryCleaning;
    private boolean carWash;
    private boolean airFill;

    @ElementCollection
    private List<String> comments = new ArrayList<String>();

    private int ParkingSlotID;
    private int userID;
    private int workerID;

    public int getDuration() {
        Integer.parseInt(this.slotTime);
        return 1;
    }
    
    public boolean isAirFill() {
        return airFill;
    }

    public void setAirFill(boolean airFill) {
        this.airFill = airFill;
    }

    public boolean isCarWash() {
        return carWash;
    }

    public void setCarWash(boolean carWash) {
        this.carWash = carWash;
    }

    public boolean isDryCleaning() {
        return dryCleaning;
    }

    public void setDryCleaning(boolean dryCleaning) {
        this.dryCleaning = dryCleaning;
    }

    public int getWorkerID() {
        return workerID;
    }

    public void setWorkerID(int workerID) {
        this.workerID = workerID;
    }

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    public int getParkingSlotID() {
        return ParkingSlotID;
    }

    public void setParkingSlotID(int parkingSlotID) {
        this.ParkingSlotID = parkingSlotID;
    }

    public int getTotalPayment() {
        return totalPayment;
    }

    public void setTotalPayment(int totalPayment) {
        this.totalPayment = totalPayment;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
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
