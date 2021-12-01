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

    private String date; // 6digit string format DD-MM-YY
    private String slotTime;// 8digit string format HHMM-HHMM
    private int rating; // from 1 to 5
    private int totalPayment;
    private boolean dryCleaning;
    private boolean carWash;
    private boolean airFill;

    @ElementCollection
    private List<String> comments = new ArrayList<String>();

    private String parkingSlotLocation;
    private String userEmail;
    private String workerEmail;

    public int getId() {
        return id;
    }

    public String getParkingSlotLocation() {
        return parkingSlotLocation;
    }

    public void setParkingSlotLocation(String parkingSlotLocation) {
        this.parkingSlotLocation = parkingSlotLocation;
    }

    public String getWorkerEmail() {
        return workerEmail;
    }

    public void setWorkerEmail(String workerEmail) {
        this.workerEmail = workerEmail;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public boolean isAirFill() {
        return airFill;
    }

    public String getSlotTime() {
        return slotTime;
    }

    public void setSlotTime(String slotTime) {
        this.slotTime = slotTime;
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
}
