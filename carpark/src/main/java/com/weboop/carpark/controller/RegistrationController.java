package com.weboop.carpark.controller;

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
@RequestMapping("/register")
@CrossOrigin
public class RegistrationController {
    @Autowired
    private UserService userService;

    User curUser = new User();
    String code;

    @PostMapping("/input") // validate in frontend only
    public String add(@RequestBody User frontUser) {

        curUser = frontUser;

        return "Checking if Email Available";
    }

    @GetMapping("/inputresponse")
    public int addRes() {

        if (userService.existsByEmail(curUser.getEmail()))
            return 1;// already exists
        code = userService.sendEmail(curUser);
        curUser.setVerificationCode(code);
        return 0;
    }

    @PostMapping("/verifycodeinput")
    public String verifyInput(@RequestBody VerifyClass verifycode) {

        this.code = verifycode.code;
        return "Checking... " + curUser.getVerificationCode() + " " + verifycode.code;
    }

    @GetMapping("/coderes")
    public int verifyOutput() {

        if (!curUser.getVerificationCode().equals(code))
            return 1;// wrong code

        return 0;// ok
    }

    @GetMapping("/successregister")
    public String totalokay() {
        userService.saveUser(curUser);
        return "Registered";
    }

}

class VerifyClass {
    public String code;
}
