package com.weboop.carpark.service;

import java.util.List;

import com.weboop.carpark.model.Worker;
import com.weboop.carpark.repository.WorkerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WorkerService {

    @Autowired
    private WorkerRepository workerRepository;

    public Worker findByEmail(String email) {
        return workerRepository.findByEmail(email);
    }

    public boolean existsByEmail(String email) {
        return workerRepository.existsByEmail(email);
    }

    public int removeByEmail(String email) {
        return workerRepository.removeByEmail(email);
    }

    public Worker saveWorker(Worker worker) {

        return workerRepository.save(worker);
    }

    public List<Worker> getAllWorkers() {
        return workerRepository.findAll();
    }

    // process login/register details
    // get all Worker list
}
