package com.weboop.carpark.model;

import lombok.Data;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
public class ParkingSlot {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String location;
    private boolean isOccupied;

    // get avg rating
}
// SlotNumber, location
// occupied/unoccupied
// link to the orderID if occupied
// Ratings(fetched from order)
