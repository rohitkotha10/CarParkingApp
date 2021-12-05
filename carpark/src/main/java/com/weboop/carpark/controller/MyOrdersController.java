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
            MyOrders cur = myOrdersService.findByUserEmailAndParkingSlotLocationAndMyOrderdateAndMyCheckinAndMyCheckout(
                    details.getUserEmail(),
                    details.getParkingSlotLocation(),
                    details.getMyOrderdate(),
                    details.getMyCheckin(),
                    details.getMyCheckout());
            return cur;
        } catch (Exception e) {
            return null;
        }
    }

    @PostMapping("/getidinfo")
    public MyOrders getidInfo(@RequestBody MyOrders details) {
        try {
            MyOrders cur = myOrdersService.findById(details.getId());
            return cur;
        } catch (Exception e) {
            return null;
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
            ArrayList<MyOrders> ordersall = (ArrayList<MyOrders>) myOrdersService
                    .findByMyOrderdate(details.getMyOrderdate());

            ArrayList<ParkingSlot> old = (ArrayList<ParkingSlot>) parkingService.getAllParking();
            ArrayList<ParkingSlot> cur = new ArrayList<ParkingSlot>();

            ArrayList<Integer> visited = new ArrayList<Integer>(old.size());

            for (int i = 0; i < old.size(); i++) {
                visited.add(0);
            }

            for (int i = 0; i < old.size(); i++) {

                for (int j = 0; j < ordersall.size(); j++) {
                    if (old.get(i).getLocation().equals(ordersall.get(j).getParkingSlotLocation())) {
                        String i1 = details.getMyCheckin();
                        String o1 = details.getMyCheckout();
                        String i2 = ordersall.get(j).getMyCheckin();
                        String o2 = ordersall.get(j).getMyCheckout();
                        if (!((i1.compareTo(i2) <= 0 && o1.compareToIgnoreCase(i2) <= 0) ||
                                (i1.compareTo(o2) >= 0 && o1.compareTo(o2) >= 0))) {
                            visited.set(i, 1);
                            break;
                        }
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
            ArrayList<MyOrders> ordersall = (ArrayList<MyOrders>) myOrdersService
                    .findByMyOrderdate(details.getMyOrderdate());

            ArrayList<Worker> old = (ArrayList<Worker>) workerService.getAllWorkers();
            ArrayList<Worker> cur = new ArrayList<Worker>();

            ArrayList<Integer> visited = new ArrayList<Integer>(old.size());

            for (int i = 0; i < old.size(); i++) {
                visited.add(0);
            }

            for (int i = 0; i < old.size(); i++) {

                for (int j = 0; j < ordersall.size(); j++) {
                    if (old.get(i).getEmail().equals(ordersall.get(j).getWorkerEmail())) {
                        String i1 = details.getMyCheckin();
                        String o1 = details.getMyCheckout();
                        String i2 = ordersall.get(j).getMyCheckin();
                        String o2 = ordersall.get(j).getMyCheckout();
                        if (!((i1.compareTo(i2) <= 0 && o1.compareToIgnoreCase(i2) <= 0) ||
                                (i1.compareTo(o2) >= 0 && o1.compareTo(o2) >= 0))) {
                            visited.set(i, 1);
                            break;
                        }
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
            MyOrders cur = myOrdersService.findByUserEmailAndParkingSlotLocationAndMyOrderdateAndMyCheckinAndMyCheckout(
                    details.getUserEmail(),
                    details.getParkingSlotLocation(),
                    details.getMyOrderdate(),
                    details.getMyCheckin(),
                    details.getMyCheckout());

            cur.setComment(details.getComment());
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
            myOrdersService.deleteByUserEmailAndParkingSlotLocationAndMyOrderdateAndMyCheckinAndMyCheckout(
                    details.getUserEmail(),
                    details.getParkingSlotLocation(),
                    details.getMyOrderdate(),
                    details.getMyCheckin(),
                    details.getMyCheckout());
            return 0;
        } catch (Exception e) {
            return 9;
        }
    }

    @PostMapping("/getpayment")
    @Transactional
    public String payment(@RequestBody MyOrders details) {
        try {

            MyOrders cur = myOrdersService.findByUserEmailAndParkingSlotLocationAndMyOrderdateAndMyCheckinAndMyCheckout(
                    details.getUserEmail(),
                    details.getParkingSlotLocation(),
                    details.getMyOrderdate(),
                    details.getMyCheckin(),
                    details.getMyCheckout());

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
