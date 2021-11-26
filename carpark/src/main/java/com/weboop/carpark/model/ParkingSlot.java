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
    private Set<Integer> linkedOrderIDs = new HashSet<Integer>();

    public int getAvgRating() {
        return 3;
        // avgs of all linkedOrderRatings
    }
    // get avg rating

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

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

    public Set<Integer> getLinkedOrderIDs() {
        return linkedOrderIDs;
    }

    public void setLinkedOrderIDs(Set<Integer> linkedOrderIDs) {
        this.linkedOrderIDs = linkedOrderIDs;
    }
}
// SlotNumber, location
// occupied/unoccupied
// link to the orderID if occupied
// Ratings(fetched from order)
