package com.weboop.carpark.repository;

import com.weboop.carpark.model.UserNonReg;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WaitingRegRepository extends JpaRepository<UserNonReg, Integer>{
    public UserNonReg findByEmail(String email);
    public boolean existsByEmail(String email);
    public int removeByEmail(String email);
}
