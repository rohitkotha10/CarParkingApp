package com.weboop.carpark.controller;

import java.util.List;

import com.weboop.carpark.model.ParkingSlot;
import com.weboop.carpark.service.ParkingService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/parking")
@CrossOrigin
public class ParkingController {
    @Autowired
    private ParkingService parkingService;

    @PostMapping("/getinfo")
    public ParkingSlot getInfo(@RequestBody ParkingSlot details) {
        try {
            ParkingSlot cur = parkingService.findByLocation(details.getLocation());
            return cur;
        } catch (Exception e) {
            return new ParkingSlot();
        }
    }

    @PostMapping("/addparking")
    public int addparking(@RequestBody ParkingSlot details) {
        try {
            if (parkingService.existsByLocation(details.getLocation()))
                return 1;// already exists
            parkingService.saveParkingSlot(details);
            return 0;
        } catch (Exception e) {
            return 9;
        }
    }

    @PostMapping("/removeparking")
    public int removeParking(@RequestBody ParkingSlot details) {
        try {
            if (!parkingService.existsByLocation(details.getLocation()))
                return 1;// not exists
            parkingService.removeByLocation(details.getLocation());
            return 0;
        } catch (Exception e) {
            return 9;
        }
    }

    @GetMapping("/getallparking")
    public List<ParkingSlot> getAllOrders() {
        return parkingService.getAllParking();
    }

}
