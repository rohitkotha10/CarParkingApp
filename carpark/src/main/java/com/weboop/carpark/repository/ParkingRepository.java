package com.weboop.carpark.repository;

import com.weboop.carpark.model.ParkingSlot;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ParkingRepository extends JpaRepository<ParkingSlot, Integer>{
    
}
