package com.weboop.carpark.repository;

import com.weboop.carpark.model.Worker;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WorkerRepository extends JpaRepository<Worker, Integer> {

    public Worker findById(int id);

    public Worker findByEmail(String email);

    boolean existsByEmail(String email);

    public int deleteByEmail(String email);
}
