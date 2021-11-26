package com.weboop.carpark.controller;

import java.util.List;

import com.weboop.carpark.model.MyOrders;
import com.weboop.carpark.service.MyOrdersService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/myorders")
@CrossOrigin
public class MyOrdersController {
    @Autowired
    private MyOrdersService myOrdersService;

    @PostMapping("/getinfo")
    public MyOrders getInfo(@RequestBody MyOrders details) {
        try {
            MyOrders cur = myOrdersService.findBySlotTime(details.getSlotTime());
            return cur;
        } catch (Exception e) {
            return new MyOrders();
        }
    }

    @PostMapping("/addmyorders")
    public int addmyOrders(@RequestBody MyOrders details) {
        try {
            if (myOrdersService.existsBySlotTime(details.getSlotTime()))
                return 1;// already exists
            myOrdersService.saveMyOrders(details);
            return 0;
        } catch (Exception e) {
            return 9;
        }
    }

    @PostMapping("/removemyOrders")
    public int removemyOrders(@RequestBody MyOrders details) {
        try {
            if (!myOrdersService.existsBySlotTime(details.getSlotTime()))
                return 1;// not exists
            myOrdersService.removeBySlotTime(details.getSlotTime());
            return 0;
        } catch (Exception e) {
            return 9;
        }
    }

    @GetMapping("/getallorders")
    public List<MyOrders> getAllOrders() {
        return myOrdersService.getAllOrders();
    }

}
