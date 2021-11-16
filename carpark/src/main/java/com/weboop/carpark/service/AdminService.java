package com.weboop.carpark.service;

import com.weboop.carpark.model.Admin;
import com.weboop.carpark.repository.AdminRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService {

    @Autowired
    private AdminRepository AdminRepository;


    public Admin findByEmail(String email) {
        return AdminRepository.findByEmail(email);
    }

    public Admin saveAdmin(Admin Admin) {
        
        return AdminRepository.save(Admin); 
    }

    //process login/register details
    //get all Admin list
}
