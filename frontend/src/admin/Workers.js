import React from 'react'
import { useState, useEffect } from 'react';

import { WorkersTable } from '../components/workers-table';
import { AddBut } from '../components/work-dialog';
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

  const [workers, setWorkers] = useState([]);

  const handleClick = (e) => {
    e.preventdefault();

  }

  useEffect(() => {
    fetch("http://localhost:8080/worker/getallworkers", {
      method: "GET",
    }).then(data => data.json())
      .then((data) => {
        setWorkers(data);
        //console.log(data);
      })
  }, [workers])


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
            Workers
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          {/* <Button
            onclick={handleClick}
            color="primary"
            size="large"
            variant="contained"
          >
            Add
          </Button> */}
          <AddBut />
        </Box>
        <Card variant="outlined">
          <WorkersTable workers={workers} />
          <Divider />
        </Card>
      </Container>
    </Box>
  );
};
