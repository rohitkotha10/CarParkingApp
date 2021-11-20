package com.weboop.carpark.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "waiting_list")
public class WaitingUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private int userID;
    private int parkingSlotID;
    
    public int getUserID() {
        return userID;
    }
    public int getParkingSlotID() {
        return parkingSlotID;
    }
    public void setParkingSlotID(int parkingSlotID) {
        this.parkingSlotID = parkingSlotID;
    }
    public void setUserID(int userID) {
        this.userID = userID;
    }
}
