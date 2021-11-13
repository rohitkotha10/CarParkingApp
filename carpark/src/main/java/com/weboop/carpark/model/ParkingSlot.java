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
@Table(name = "parking_slots")
public class ParkingSlot {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String location;
    private boolean isOccupied;

    @ElementCollection
    private List<Integer> linkedOrderIDs = new ArrayList<Integer>();

    public int getAvgRating() {
        return 3;
        //avgs of all linkedOrderRatings
    }
    // get avg rating
}
// SlotNumber, location
// occupied/unoccupied
// link to the orderID if occupied
// Ratings(fetched from order)
