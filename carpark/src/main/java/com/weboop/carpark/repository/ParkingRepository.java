package com.weboop.carpark.repository;

import com.weboop.carpark.model.ParkingSlot;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ParkingRepository extends JpaRepository<ParkingSlot, Integer> {

    public ParkingSlot findById(int id);

    public ParkingSlot findByLocation(String location);

    public boolean existsByLocation(String location);

    public int deleteByLocation(String location);
}
