package com.weboop.carpark.repository;

import java.util.List;

import com.weboop.carpark.model.MyOrders;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MyOrdersRepository extends JpaRepository<MyOrders, Integer> {

    public MyOrders findBySlotTime(String slotTime);

    public List<MyOrders> findByWorkerEmail(String workerEmail);

    public List<MyOrders> findByUserEmail(String userEmail);

    public List<MyOrders> findByParkingSlotLocation(String parkingSlotLocation);

    public boolean existsBySlotTime(String slotTime);

    public int removeBySlotTime(String slotTime);

}
