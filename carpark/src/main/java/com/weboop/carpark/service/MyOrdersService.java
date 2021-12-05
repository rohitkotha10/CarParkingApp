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

    public MyOrders findById(int id) {
        return myOrdersRepository.findById(id);
    }


    public List<MyOrders> findByMyOrderdate(String myOrderdate) {
        return myOrdersRepository.findByMyOrderdate(myOrderdate);
    }

    public List<MyOrders> findByUserEmail(String userEmail) {
        return myOrdersRepository.findByUserEmail(userEmail);
    }

    public List<MyOrders> findByParkingSlotLocation(String parkingSlotLocation) {
        return myOrdersRepository.findByParkingSlotLocation(parkingSlotLocation);
    }

    public MyOrders findByUserEmailAndParkingSlotLocationAndMyOrderdateAndMyCheckinAndMyCheckout(
            String userEmail,
            String parkingSlotLocation,
            String myOrderdate,
            String myCheckin,
            String myCheckout) {
        return myOrdersRepository.findByUserEmailAndParkingSlotLocationAndMyOrderdateAndMyCheckinAndMyCheckout(
                userEmail,
                parkingSlotLocation,
                myOrderdate,
                myCheckin,
                myCheckout);
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

    public int deleteByUserEmailAndParkingSlotLocationAndMyOrderdateAndMyCheckinAndMyCheckout(
            String userEmail,
            String parkingSlotLocation,
            String myOrderdate,
            String myCheckin,
            String myCheckout) {
        return myOrdersRepository.deleteByUserEmailAndParkingSlotLocationAndMyOrderdateAndMyCheckinAndMyCheckout(
                userEmail,
                parkingSlotLocation,
                myOrderdate,
                myCheckin,
                myCheckout);
    }

    public boolean existsByUserEmailAndParkingSlotLocationAndMyOrderdateAndMyCheckinAndMyCheckout(
            String userEmail,
            String parkingSlotLocation,
            String myOrderdate,
            String myCheckin,
            String myCheckout) {
        return myOrdersRepository.existsByUserEmailAndParkingSlotLocationAndMyOrderdateAndMyCheckinAndMyCheckout(
                userEmail,
                parkingSlotLocation,
                myOrderdate,
                myCheckin,
                myCheckout);
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
