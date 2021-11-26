package com.weboop.carpark.controller;

import java.util.List;

import com.weboop.carpark.model.Worker;
import com.weboop.carpark.service.WorkerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/worker")
@CrossOrigin
public class WorkerController {
    @Autowired
    private WorkerService workerService;

    @PostMapping("/getinfo")
    public Worker getInfo(@RequestBody Worker details) {
        try {
            Worker cur = workerService.findByEmail(details.getEmail());
            return cur;
        } catch (Exception e) {
            return new Worker();
        }
    }

    @PostMapping("/addworker")
    public int addWorker(@RequestBody Worker details) {
        try {
            if (workerService.existsByEmail(details.getEmail()))
                return 1;// already exists
            workerService.saveWorker(details);
            return 0;
        } catch (Exception e) {
            return 9;
        }
    }

    @PostMapping("/removeworker")
    public int removeWorker(@RequestBody Worker details) {
        try {
            if (!workerService.existsByEmail(details.getEmail()))
                return 1;// not exists
            workerService.removeByEmail(details.getEmail());
            return 0;
        } catch (Exception e) {
            return 9;
        }
    }

    @GetMapping("/getallworkers")
    public List<Worker> getAllOrders() {
        return workerService.getAllWorkers();
    }

}
