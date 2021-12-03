package com.weboop.carpark.service;

import com.weboop.carpark.model.Admin;
import com.weboop.carpark.repository.AdminRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    public Admin findByEmail(String email) {
        return adminRepository.findByEmail(email);
    }

    public boolean existsByEmail(String email) {
        return adminRepository.existsByEmail(email);
    }

    public int deleteByEmail(String email) {
        return adminRepository.deleteByEmail(email);
    }

    public Admin saveAdmin(Admin admin) {

        return adminRepository.save(admin);
    }
}
