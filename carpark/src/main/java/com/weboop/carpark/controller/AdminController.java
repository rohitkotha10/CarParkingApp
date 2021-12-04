package com.weboop.carpark.controller;

import com.weboop.carpark.model.Admin;
import com.weboop.carpark.service.AdminService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class AdminController {
    @Autowired
    private AdminService adminService;

    @PostMapping("/getinfo")
    public Admin getInfo(@RequestBody Admin details) {
        try {
            if (!adminService.existsByEmail(details.getEmail()))
                return null;// already exists
            Admin cur = adminService.findByEmail(details.getEmail());
            return cur;
        } catch (Exception e) {
            return null;
        }
    }

    @PostMapping("/addadmin")
    public int addWorker(@RequestBody Admin details) {
        try {
            if (adminService.existsByEmail(details.getEmail()))
                return 1;// already exists
            adminService.saveAdmin(details);
            return 0;
        } catch (Exception e) {
            return 9;
        }
    }
}
