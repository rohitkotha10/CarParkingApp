package com.weboop.carpark.repository;

import com.weboop.carpark.model.Admin;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Integer> {

    public Admin findByEmail(String email);

    boolean existsByEmail(String email);

    public int deleteByEmail(String email);
}
