import React from 'react'
import { useState, useEffect } from 'react';

import { UsersTable } from '../components/users-table';
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

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/user/getallusers", {
      method: "GET",
    }).then(data => data.json())
      .then((data) => {
        setUsers(data);
        //console.log(data);
      })
  }, [users])

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
            Users
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
        </Box>
        <Card variant="outlined">
          <UsersTable users={users} />
          <Divider />
        </Card>
      </Container>
    </Box>
  );
};