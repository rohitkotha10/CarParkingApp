package com.weboop.carpark.controller;

import com.weboop.carpark.model.Admin;
import com.weboop.carpark.model.User;
import com.weboop.carpark.model.Worker;
import com.weboop.carpark.service.AdminService;
import com.weboop.carpark.service.UserService;
import com.weboop.carpark.service.WorkerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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

    @PostMapping("/googlelogin")
    public int googlecheck(@RequestBody LoginRequest details) {
        User checking = userService.findByEmail(details.email);
        if (checking == null)
            return 1; // user not found
        return 0;// ok
    }

    @PostMapping("/normallogin")
    public int add(@RequestBody LoginRequest details) {

        if (details.type.equals("User")) {
            User checking = userService.findByEmail(details.email);
            if (checking == null)
                return 1; // user not found
            if (!checking.getPassword().equals(details.password))
                return 2; // wrong password
            return 0;// ok
        }

        if (details.type.equals("Admin")) {
            Admin checking = adminService.findByEmail(details.email);
            if (checking == null)
                return 1; // user not foundd
            if (!checking.getPassword().equals(details.password))
                return 2; // wrong password
            return 0;// ok
        }

        if (details.type.equals("Worker")) {
            Worker checking = workerService.findByEmail(details.email);
            if (checking == null)
                return 1; // user not found
            if (!checking.getPassword().equals(details.password))
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