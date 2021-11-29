package com.weboop.carpark.service;

import java.util.List;

import com.weboop.carpark.model.MyOrders;
import com.weboop.carpark.repository.MyOrdersRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MyOrdersService {

    @Autowired
    private MyOrdersRepository myOrdersRepository;

    public MyOrders findBySlotTime(String slotTime) {
        return myOrdersRepository.findBySlotTime(slotTime);
    }

    public List<MyOrders> findByUserEmail(String userEmail) {
        return myOrdersRepository.findByUserEmail(userEmail);
    }

    public List<MyOrders> findByParkingSlotLocation(String parkingSlotLocation) {
        return myOrdersRepository.findByParkingSlotLocation(parkingSlotLocation);
    }

    public List<MyOrders> findByWorkerEmail(String workerEmail) {
        return myOrdersRepository.findByWorkerEmail(workerEmail);
    }

    public boolean existsBySlotTime(String slotTime) {
        return myOrdersRepository.existsBySlotTime(slotTime);
    }

    public int removeBySlotTime(String slotTime) {
        return myOrdersRepository.removeBySlotTime(slotTime);
    }

    public MyOrders saveMyOrders(MyOrders myOrders) {

        return myOrdersRepository.save(myOrders);
    }

    public List<MyOrders> getAllOrders() {
        return myOrdersRepository.findAll();
    }
}
