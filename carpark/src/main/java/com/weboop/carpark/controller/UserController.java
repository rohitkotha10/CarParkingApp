package com.weboop.carpark.controller;

import java.util.List;

import com.weboop.carpark.model.User;
import com.weboop.carpark.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/getinfo")
    public User getInfo(@RequestBody User details) {
        try {
            User cur = userService.findByEmail(details.getEmail());
            return cur;
        } catch (Exception e) {
            return new User();
        }
    }

    @GetMapping("/getallusers")
    public List<User> getAllOrders() {
        return userService.getAllUsers();
    }

}
