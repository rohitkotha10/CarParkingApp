package com.weboop.carpark.service;

import java.util.List;

import com.weboop.carpark.model.ParkingSlot;
import com.weboop.carpark.repository.ParkingRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ParkingService {

    @Autowired
    private ParkingRepository parkingRepository;

    public ParkingSlot findByLocation(String location) {
        return parkingRepository.findByLocation(location);
    }

    public boolean existsByLocation(String location) {
        return parkingRepository.existsByLocation(location);
    }

    public int removeByLocation(String location) {
        return parkingRepository.removeByLocation(location);
    }

    public ParkingSlot saveParkingSlot(ParkingSlot parking) {

        return parkingRepository.save(parking);
    }

    public List<ParkingSlot> getAllParking() {
        return parkingRepository.findAll();
    }

    // process login
    // get all Parking list
}
