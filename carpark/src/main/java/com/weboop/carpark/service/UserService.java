package com.weboop.carpark.service;

import java.util.Random;

import com.weboop.carpark.model.User;
import com.weboop.carpark.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JavaMailSender mailSender;// Gmail SMTP

    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public boolean existsByEmail(String email) {
        return userRepository.existsByEmail(email);
    }

    public String sendEmail(User user) {
        SimpleMailMessage msg = new SimpleMailMessage();

        String tempVer = String.valueOf(new Random().nextInt(899999) + 100000);
        msg.setFrom("rohitspaceset@gmail.com");
        msg.setTo(user.getEmail());
        msg.setSubject("Verification SpringBoot");
        msg.setText("Welcome, Your Verification Code is" + " " + tempVer);

        mailSender.send(msg);
        return tempVer;
    }

    public User saveUser(User user) {

        return userRepository.save(user);
    }

    // process login/register details
    // get all user list
}
