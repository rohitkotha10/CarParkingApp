package com.weboop.carpark.controller;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import com.weboop.carpark.model.MyOrders;
import com.weboop.carpark.model.ParkingSlot;
import com.weboop.carpark.model.Worker;
import com.weboop.carpark.service.MyOrdersService;
import com.weboop.carpark.service.ParkingService;
import com.weboop.carpark.service.WorkerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/myorders")
@CrossOrigin
public class MyOrdersController {
    @Autowired
    private MyOrdersService myOrdersService;

    @Autowired
    private ParkingService parkingService;

    @Autowired
    private WorkerService workerService;

    @PostMapping("/getinfo")
    public MyOrders getInfo(@RequestBody MyOrders details) {
        try {
            MyOrders cur = myOrdersService.findByUserEmailAndParkingSlotLocationAndMyOrderdate(
                    details.getUserEmail(),
                    details.getParkingSlotLocation(),
                    details.getMyOrderdate());
            return cur;
        } catch (Exception e) {
            return new MyOrders();
        }
    }

    @PostMapping("/addmyorders")
    public int addmyOrders(@RequestBody MyOrders details) {
        try {
            myOrdersService.saveMyOrders(details);
            return 0;
        } catch (Exception e) {
            return 9;
        }
    }

    @PostMapping("/availablepark") // time and date
    public List<ParkingSlot> parkavailable(@RequestBody MyOrders details) {
        try {
            ArrayList<MyOrders> occupied = (ArrayList<MyOrders>) myOrdersService
                    .findByMyOrderdateAndMyCheckinAndMyCheckout(
                            details.getMyOrderdate(), details.getMyCheckin(), details.getMyCheckout());

            ArrayList<ParkingSlot> old = (ArrayList<ParkingSlot>) parkingService.getAllParking();
            ArrayList<ParkingSlot> cur = new ArrayList<ParkingSlot>();

            ArrayList<Integer> visited = new ArrayList<Integer>(old.size());

            for (int i = 0; i < old.size(); i++) {
                visited.add(0);
            }

            for (int i = 0; i < occupied.size(); i++) {
                String slotHere = occupied.get(i).getParkingSlotLocation();
                for (int j = 0; j < old.size(); j++) {
                    if (old.get(j).getLocation().equals(slotHere)) {
                        visited.set(j, 1);
                    }
                }
            }

            for (int i = 0; i < visited.size(); i++) {
                if (visited.get(i) == 0)
                    cur.add(old.get(i));
            }

            return cur;
        } catch (Exception e) {
            return null;
        }
    }

    @PostMapping("/availablework")
    public List<Worker> workavailable(@RequestBody MyOrders details) {
        try {
            ArrayList<MyOrders> occupied = (ArrayList<MyOrders>) myOrdersService
                    .findByMyOrderdateAndMyCheckinAndMyCheckout(
                            details.getMyOrderdate(), details.getMyCheckin(), details.getMyCheckout());

            ArrayList<Worker> old = (ArrayList<Worker>) workerService.getAllWorkers();
            ArrayList<Worker> cur = new ArrayList<Worker>();

            ArrayList<Integer> visited = new ArrayList<Integer>(old.size());

            for (int i = 0; i < old.size(); i++) {
                visited.add(0);
            }

            for (int i = 0; i < occupied.size(); i++) {
                String slotHere = occupied.get(i).getWorkerEmail();
                for (int j = 0; j < old.size(); j++) {
                    if (old.get(j).getEmail().equals(slotHere)) {
                        visited.set(j, 1);
                    }
                }
            }

            for (int i = 0; i < visited.size(); i++) {
                if (visited.get(i) == 0)
                    cur.add(old.get(i));
            }

            return cur;
        } catch (Exception e) {
            return null;
        }
    }

    @PostMapping("/addcomment")
    @Transactional
    public String commentAdd(@RequestBody MyOrders details) {
        try {
            MyOrders cur = myOrdersService.findByUserEmailAndParkingSlotLocationAndMyOrderdate(
                    details.getUserEmail(),
                    details.getParkingSlotLocation(),
                    details.getMyOrderdate());

            List<String> addthis = cur.getComments();
            addthis.add(details.getComments().get(0));

            cur.setComments(addthis);
            cur.setRating(details.getRating());

            Worker wor = workerService.findByEmail(cur.getWorkerEmail());
            if (wor.getCount() == 0) {
                wor.setCount(1);
                wor.setRating(details.getRating());
            }

            ParkingSlot par = parkingService.findByLocation(cur.getParkingSlotLocation());
            if (par.getCount() == 0) {
                par.setCount(1);
                par.setRating(details.getRating());
            }
            float ratw = wor.getRating() * wor.getCount();
            ratw += details.getRating();
            wor.setCount(wor.getCount() + 1);
            ratw /= wor.getCount();
            wor.setRating(ratw);

            float ratp = par.getRating() * par.getCount();
            ratp += details.getRating();
            par.setCount(par.getCount() + 1);
            ratp /= par.getCount();
            par.setRating(ratp);

            return "0";
        } catch (Exception e) {
            return e.toString();
        }
    }

    @PostMapping("/removeorder")
    @Transactional
    public int remove(@RequestBody MyOrders details) {
        try {
            myOrdersService.deleteByUserEmailAndParkingSlotLocationAndMyOrderdate(
                    details.getUserEmail(),
                    details.getParkingSlotLocation(),
                    details.getMyOrderdate());
            return 0;
        } catch (Exception e) {
            return 9;
        }
    }

    @PostMapping("/getpayment")
    @Transactional
    public String payment(@RequestBody MyOrders details) {
        try {

            MyOrders cur = myOrdersService.findByUserEmailAndParkingSlotLocationAndMyOrderdate(
                    details.getUserEmail(),
                    details.getParkingSlotLocation(),
                    details.getMyOrderdate());

            String stri = cur.getMyCheckin();
            String stro = cur.getMyCheckout();

            int h1 = stri.charAt(0) - '0';
            int h2 = stri.charAt(1) - '0';
            int h = h1 * 10 + h2;

            int hrsin = h;

            h1 = stro.charAt(0) - '0';
            h2 = stro.charAt(1) - '0';
            h = h1 * 10 + h2;
            int hrsout = h;

            int hrs = hrsout - hrsin;

            int payment = hrs * 25;

            if (details.isAirFill() || cur.isAirFill())
                payment += 20;
            if (details.isCarWash() || cur.isCarWash())
                payment += 20;

            cur.setAirFill(details.isAirFill() || cur.isAirFill());
            cur.setCarWash(details.isCarWash() || cur.isCarWash());
            cur.setTotalPayment(payment);

            Worker wor = workerService.findByEmail(cur.getWorkerEmail());
            wor.setWorkExperience(wor.getWorkExperience() + hrs);

            myOrdersService.sendEmail(details.getUserEmail(), payment);
            return "0";

        } catch (Exception e) {
            return e.toString();
        }
    }

    @GetMapping("/getallorders")
    public List<MyOrders> getAllOrders() {
        return myOrdersService.getAllOrders();
    }
}
// ----not implemented-----
// go to waiting list
// manage cancellations
