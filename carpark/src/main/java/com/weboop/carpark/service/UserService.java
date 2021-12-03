package com.weboop.carpark.service;

import java.util.List;

import com.weboop.carpark.model.User;
import com.weboop.carpark.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public boolean existsByEmail(String email) {
        return userRepository.existsByEmail(email);
    }

    public int deleteByEmail(String email) {
        return userRepository.deleteByEmail(email);
    }

    public User saveUser(User user) {

        return userRepository.save(user);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // feedback form, payment confirmations
}
