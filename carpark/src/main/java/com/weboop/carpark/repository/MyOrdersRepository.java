package com.weboop.carpark.repository;

import com.weboop.carpark.model.MyOrders;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MyOrdersRepository extends JpaRepository<MyOrders, Integer> {
    
}
