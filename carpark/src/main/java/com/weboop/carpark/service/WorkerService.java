package com.weboop.carpark.service;

import com.weboop.carpark.model.Worker;
import com.weboop.carpark.repository.WorkerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WorkerService {

    @Autowired
    private WorkerRepository WorkerRepository;


    public Worker findByEmail(String email) {
        return WorkerRepository.findByEmail(email);
    }

    public Worker saveWorker(Worker Worker) {
        
        return WorkerRepository.save(Worker); 
    }

    //process login/register details
    //get all Worker list
}
