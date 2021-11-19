package com.weboop.carpark.model;

import java.util.*;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "parking_slots")
public class ParkingSlot {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String location;
    private boolean Occupied;

    @ElementCollection
    private List<Integer> linkedOrderIDs = new ArrayList<Integer>();

    public int getAvgRating() {
        return 3;
        //avgs of all linkedOrderRatings
    }
    // get avg rating

    public boolean isOccupied() {
        return Occupied;
    }

    public void setOccupied(boolean occupied) {
        this.Occupied = occupied;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
}
// SlotNumber, location
// occupied/unoccupied
// link to the orderID if occupied
// Ratings(fetched from order)
