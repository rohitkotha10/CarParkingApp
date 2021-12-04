package com.weboop.carpark.repository;

import java.util.List;

import com.weboop.carpark.model.MyOrders;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MyOrdersRepository extends JpaRepository<MyOrders, Integer> {

        public List<MyOrders> findAllByMyOrderdate(String myOrderdate);

        public List<MyOrders> findByWorkerEmail(String workerEmail);

        public List<MyOrders> findByUserEmail(String userEmail);

        public List<MyOrders> findByParkingSlotLocation(String parkingSlotLocation);

        public MyOrders findByUserEmailAndParkingSlotLocationAndMyOrderdateAndMyCheckinAndMyCheckout(
                        String userEmail,
                        String parkingSlotLocation,
                        String myOrderdate,
                        String myCheckin,
                        String myCheckout);

        public boolean existsByUserEmailAndParkingSlotLocationAndMyOrderdateAndMyCheckinAndMyCheckout(
                        String userEmail,
                        String parkingSlotLocation,
                        String myOrderdate,
                        String myCheckin,
                        String myCheckout);

        public int deleteByUserEmailAndParkingSlotLocationAndMyOrderdateAndMyCheckinAndMyCheckout(
                        String userEmail,
                        String parkingSlotLocation,
                        String myOrderdate,
                        String myCheckin,
                        String myCheckout);

        public List<MyOrders> findByMyOrderdateAndMyCheckinAndMyCheckout(
                        String myOrderdate,
                        String myCheckin,
                        String myCheckout);

}
