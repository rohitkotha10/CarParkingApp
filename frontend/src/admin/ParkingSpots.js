import React from 'react'
import { useState, useEffect } from 'react';

import { ParkingsTable } from '../components/parkings-table';
import { AddBut } from '../components/park-dialog';

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

  const [parkings, setParkings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/parking/getallparking", {
      method: "GET",
    }).then(data => data.json())
      .then((data) => {
        setParkings(data);
        //console.log(data);
      })
  }, [parkings])

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
            Parking Spots
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <AddBut />
        </Box>
        <Card variant="outlined">
          <ParkingsTable parkings={parkings} />
          <Divider />
        </Card>
      </Container>
    </Box>
  );
};