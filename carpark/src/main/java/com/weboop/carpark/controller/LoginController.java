package com.weboop.carpark.controller;

import com.weboop.carpark.model.Admin;
import com.weboop.carpark.model.User;
import com.weboop.carpark.model.Worker;
import com.weboop.carpark.service.AdminService;
import com.weboop.carpark.service.UserService;
import com.weboop.carpark.service.WorkerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
@CrossOrigin
public class LoginController {
    @Autowired
    private UserService userService;

    @Autowired
    private WorkerService workerService;

    @Autowired
    private AdminService adminService;

    String type, email, password;

    @PostMapping("/getuserdetails")
    public String add(@RequestBody LoginRequest details) {

        this.type = details.type;
        this.email = details.email;
        this.password = details.password;
        return email;
    }

    @GetMapping("/authorizeuser")
    public int isValid() {
        if (type.equals("user")) {
            User checking = userService.findByEmail(email);
            if (checking == null)
                return 1; // user not found
            if (!checking.getPassword().equals(password))
                return 2; // wrong password
            return 0;// ok
        }
        if (type.equals("admin")) {
            Admin checking = adminService.findByEmail(email);
            if (checking == null)
                return 1; // user not found
            if (!checking.getPassword().equals(password))
                return 2; // wrong password
            return 0;// ok
        }
        if (type.equals("worker")) {
            Worker checking = workerService.findByEmail(email);
            if (checking == null)
                return 1; // user not found
            if (!checking.getPassword().equals(password))
                return 2; // wrong password
            return 0;// ok
        }

        return 4; // unknown type

    }
}

class LoginRequest {

    public String type;
    public String email;
    public String password;

}