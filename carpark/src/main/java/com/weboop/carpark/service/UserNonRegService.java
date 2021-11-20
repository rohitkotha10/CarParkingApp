package com.weboop.carpark.service;

import java.util.Random;

import com.weboop.carpark.model.UserNonReg;
import com.weboop.carpark.repository.WaitingRegRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class UserNonRegService {
    
    @Autowired
    private WaitingRegRepository waitRegRepository;

    @Autowired
    private JavaMailSender mailSender;// Gmail SMTP

    public UserNonReg findByEmail(String email) {
        return waitRegRepository.findByEmail(email);
    }

    public boolean existsByEmail(String email) {
        return waitRegRepository.existsByEmail(email);
    }

    public String sendEmail(UserNonReg user) {
        SimpleMailMessage msg = new SimpleMailMessage();

        String tempVer = String.valueOf(new Random().nextInt(899999) + 100000);
        msg.setFrom("carparkverify@gmail.com");
        msg.setTo(user.getEmail());
        msg.setSubject("Verification CarParkApp");
        msg.setText("Welcome, Your Verification Code is" + " " + tempVer);

        mailSender.send(msg);
        return tempVer;
    }

    public UserNonReg saveUser(UserNonReg user) {

        return waitRegRepository.save(user);
    }

    public int removeByEmail(String email) {
        return waitRegRepository.removeByEmail(email);
    }

    // process login/register details
    // get all user list
}
