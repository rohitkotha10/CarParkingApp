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

    private String myOrderdate;
    private String myCheckin;
    private String myCheckout;

    private int rating; // from 1 to 5
    private int totalPayment;
    private boolean carWash = false;
    private boolean airFill = false;

    @ElementCollection
    private List<String> comments = new ArrayList<String>();

    private String parkingSlotLocation;
    private String userEmail;
    private String workerEmail;

    public int getId() {
        return id;
    }

    public String getMyCheckout() {
        return myCheckout;
    }

    public void setMyCheckout(String myCheckout) {
        this.myCheckout = myCheckout;
    }

    public String getMyCheckin() {
        return myCheckin;
    }

    public void setMyCheckin(String myCheckin) {
        this.myCheckin = myCheckin;
    }

    public String getMyOrderdate() {
        return myOrderdate;
    }

    public void setMyOrderdate(String myOrderdate) {
        this.myOrderdate = myOrderdate;
    }

    public List<String> getComments() {
        return comments;
    }

    public void setComments(List<String> comments) {
        this.comments = comments;
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
