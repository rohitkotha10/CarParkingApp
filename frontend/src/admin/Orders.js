import React from 'react'
import { useState, useEffect } from 'react';

import { OrdersTable } from '../components/orders-table';
import {
  Box,
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
    fetch("http://localhost:8080/myorders/getallorders", {
      method: "GET",
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
          {/* <Button
            color="primary"
            size="large"
            variant="contained"
          >
            Get Orders
          </Button> */}
        </Box>
        <Card variant="outlined">
          <OrdersTable orders={orders} />
          <Divider />
        </Card>
      </Container>
    </Box>
  );
};
