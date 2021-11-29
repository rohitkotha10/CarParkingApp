package com.weboop.carpark.repository;

import com.weboop.carpark.model.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    public User findByEmail(String email);

    boolean existsByEmail(String email);

    public int removeByEmail(String email);
}
