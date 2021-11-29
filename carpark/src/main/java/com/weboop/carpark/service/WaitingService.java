package com.weboop.carpark.service;

import com.weboop.carpark.model.WaitingUser;
import com.weboop.carpark.repository.WaitingRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WaitingService {

    @Autowired
    private WaitingRepository waitingRepository;

    public WaitingUser saveWaitingUser(WaitingUser user) {

        return waitingRepository.save(user);
    }

    //requests handling
}
