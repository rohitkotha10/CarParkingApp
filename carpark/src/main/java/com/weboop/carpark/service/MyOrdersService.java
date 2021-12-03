package com.weboop.carpark.service;

import java.util.List;

import com.weboop.carpark.model.MyOrders;
import com.weboop.carpark.repository.MyOrdersRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MyOrdersService {

    @Autowired
    private MyOrdersRepository myOrdersRepository;

    @Autowired
    private JavaMailSender mailSender;// Gmail SMTP

    public List<MyOrders> findByUserEmail(String userEmail) {
        return myOrdersRepository.findByUserEmail(userEmail);
    }

    public List<MyOrders> findByParkingSlotLocation(String parkingSlotLocation) {
        return myOrdersRepository.findByParkingSlotLocation(parkingSlotLocation);
    }

    public MyOrders findByUserEmailAndParkingSlotLocationAndMyOrderdate(
            String userEmail,
            String parkingSlotLocation,
            String myOrderdate) {
        return myOrdersRepository.findByUserEmailAndParkingSlotLocationAndMyOrderdate(
                userEmail,
                parkingSlotLocation,
                myOrderdate);
    }

    public String sendEmail(String userEmail, int payment) {
        SimpleMailMessage msg = new SimpleMailMessage();

        msg.setFrom("carparkverify@gmail.com");
        msg.setTo(userEmail);
        msg.setSubject("Payment Confirmation");
        msg.setText("Thank you for using Car Parking app, Amount to pay is " + payment +
                "Rs. To help us improve, we'd like to receive your feedback at our website");

        mailSender.send(msg);
        return userEmail;
    }

    public int deleteByUserEmailAndParkingSlotLocationAndMyOrderdate(
            String userEmail,
            String parkingSlotLocation,
            String myOrderdate) {
        return myOrdersRepository.deleteByUserEmailAndParkingSlotLocationAndMyOrderdate(
                userEmail,
                parkingSlotLocation,
                myOrderdate);
    }

    public boolean existsByUserEmailAndParkingSlotLocationAndMyOrderdate(
            String userEmail,
            String parkingSlotLocation,
            String myOrderdate) {
        return myOrdersRepository.existsByUserEmailAndParkingSlotLocationAndMyOrderdate(
                userEmail,
                parkingSlotLocation,
                myOrderdate);
    }

    public List<MyOrders> findByWorkerEmail(String workerEmail) {
        return myOrdersRepository.findByWorkerEmail(workerEmail);
    }

    public MyOrders saveMyOrders(MyOrders myOrders) {

        return myOrdersRepository.save(myOrders);
    }

    public List<MyOrders> getAllOrders() {
        return myOrdersRepository.findAll();
    }

    public List<MyOrders> findByMyOrderdateAndMyCheckinAndMyCheckout(
            String myOrderdate,
            String myCheckin,
            String myCheckout) {
        return myOrdersRepository.findByMyOrderdateAndMyCheckinAndMyCheckout(
                myOrderdate,
                myCheckin,
                myCheckout);
    }
}
