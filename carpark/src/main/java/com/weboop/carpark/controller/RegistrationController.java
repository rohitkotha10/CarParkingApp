package com.weboop.carpark.controller;

import javax.transaction.Transactional;

import com.weboop.carpark.model.User;
import com.weboop.carpark.service.UserService;
import com.weboop.carpark.model.UserNonReg;
import com.weboop.carpark.service.UserNonRegService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/register")
@CrossOrigin
public class RegistrationController {
    @Autowired
    private UserNonRegService userNonRegService;

    @Autowired
    private UserService userService;

    @PostMapping("/input") // validate in frontend only
    public int add(@RequestBody UserNonReg original) {

        if (userService.existsByEmail(original.getEmail()) ||
        userNonRegService.existsByEmail(original.getEmail()))
            return 1;// already exists
        String code = userNonRegService.sendEmail(original);
        original.setVerificationCode(code);
        userNonRegService.saveUser(original);
        return 0;
        // return "Checking if Email Available";
    }

    @PostMapping("/verifycode")
    @Transactional
    public int verifyInput(@RequestBody UserNonReg client) {

        if (!userNonRegService.existsByEmail(client.getEmail()))
            return 1;// unauthorized
        UserNonReg cur = userNonRegService.findByEmail(client.getEmail());

        if (!client.getEnterCode().equals(cur.getVerificationCode()))
            return 2;

        User welcomeUser = new User();

        welcomeUser.setFirstName(cur.getFirstName());
        welcomeUser.setLastName(cur.getLastName());
        welcomeUser.setAddress(cur.getAddress());
        welcomeUser.setMobileNumber(cur.getMobileNumber());
        welcomeUser.setCarNumber(cur.getCarNumber());
        welcomeUser.setEmail(cur.getEmail());
        welcomeUser.setPassword(cur.getPassword());

        userService.saveUser(welcomeUser);
        userNonRegService.removeByEmail(cur.getEmail());

        return 0;// ok
    }
}
