package com.weboop.carpark.repository;

import com.weboop.carpark.model.WaitingUser;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WaitingRepository extends JpaRepository<WaitingUser, Integer>{
    
}
