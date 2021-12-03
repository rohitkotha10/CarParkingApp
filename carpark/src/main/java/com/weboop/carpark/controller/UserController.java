package com.weboop.carpark.controller;

import java.util.List;

import javax.transaction.Transactional;

import com.weboop.carpark.model.MyOrders;
import com.weboop.carpark.model.User;
import com.weboop.carpark.service.MyOrdersService;
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

    @Autowired
    private MyOrdersService myOrdersService;

    @PostMapping("/getinfo")
    public User getInfo(@RequestBody User details) {
        try {
            User cur = userService.findByEmail(details.getEmail());
            return cur;
        } catch (Exception e) {
            return new User();
        }
    }

    @PostMapping("/adduser")
    public int addUser(@RequestBody User details) {
        try {
            if (userService.existsByEmail(details.getEmail()))
                return 1;// already exists
            userService.saveUser(details);
            return 0;
        } catch (Exception e) {
            return 9;
        }
    }

    @PostMapping("/removeuser")
    @Transactional
    public int removeUser(@RequestBody User details) {
        try {
            if (!userService.existsByEmail(details.getEmail()))
                return 1;// not exists
            userService.deleteByEmail(details.getEmail());
            return 0;
        } catch (Exception e) {
            return 9;
        }
    }

    @GetMapping("/getallusers")
    public List<User> getAllOrders() {
        return userService.getAllUsers();
    }

    @PostMapping("/getorders")
    public List<MyOrders> getOrders(@RequestBody User details) {
        try {
            if (!userService.existsByEmail(details.getEmail()))
                return null;// not exists
            return myOrdersService.findByUserEmail(details.getEmail());
        } catch (Exception e) {
            return null;
        }
    }
}
