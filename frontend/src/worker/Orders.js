import React from 'react'
import { useState, useEffect } from 'react';

import { OrdersTable } from '../components/orders-table';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card, Container, Divider,
  Typography
} from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Orders() {

  let navigate = useNavigate();
  const location = useLocation();
  const email = location.state.email;
  const type = location.state.type;

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const userdetails = { email }
    //console.log(userdetails)
    fetch("http://localhost:8080/worker/getorders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userdetails)
    }).then(data => data.json())
      .then((data) => {
        setOrders(data);
        //console.log(data);
      })
  }, [orders])

  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        pb: 3,
        pt: 8
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            alignitems: 'center',
            display: 'flex',
            mb: 3
          }}
        >
          <Typography
            color="textPrimary"
            variant="h4"
          >
            Orders
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button
            color="primary"
            size="large"
            variant="contained"
          >
            Complete Order
          </Button>
        </Box>
        <Card variant="outlined">
          <OrdersTable orders={orders} />
          <Divider />
        </Card>
      </Container>
    </Box>
  );
};