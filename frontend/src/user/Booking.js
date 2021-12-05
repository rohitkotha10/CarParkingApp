import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AddBut } from '../components/booking-dialog';

import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Grid,
  MenuItem,
  TextField,
  Typography
} from '@mui/material';

const companySizeOptions = ['1-10', '11-30', '31-50', '50+'];

export default function Booking() {

  let navigate = useNavigate();
  const location = useLocation();
  const email = location.state.email;
  const type = location.state.type;

  const Checkins = ['00:00', '00:30']
  const Durations = ['1hr', '2hr', '3hr', '4hr', '5hr']
  const Dates = ['2021-12-05', '2021-12-03']

  const [parks, setParks] = useState([]);
  const [works, setWorks] = useState([]);
  const [myOrderdate, setDate] = useState('');
  const [myCheckin, setCheckin] = useState('');
  const [myCheckout, setCheckout] = useState('');
  const carWashs = ['YES', 'NO']
  const airFills = ['YES', 'NO']


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
            Booking
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
        </Box>

        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            md={6}
            xs={120}
          >
            <Card
              variant="outlined"
              sx={{ p: 3 }}
            >

              <div>
                <Box
                  sx={{
                    alignitems: 'center',
                    display: 'flex',
                    pb: 3
                  }}
                >
                  <Avatar
                    sx={{
                      height: 64,
                      mr: 2,
                      width: 64
                    }}
                  />
                </Box>

                <Grid
                  container
                  spacing={2}
                  sx={{ maxWidth: 420 }}
                >
                  <Grid
                    item
                    xs={12}
                  >
                    <TextField
                      fullWidth
                      label="Date"
                      variant="outlined"
                      select
                      variant="outlined"
                      onChange={(e) => setDate(e.target.value)}
                    >
                      {Dates.map((date) => (
                        <MenuItem
                          key={date}
                          value={date}
                        >
                          {date}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                  >
                    <TextField
                      fullWidth
                      label="Check In"
                      variant="outlined"
                      select
                      variant="outlined"
                      onChange={(e) => setCheckin(e.target.value)}
                    >
                      {Checkins.map((checkin) => (
                        <MenuItem
                          key={checkin}
                          value={checkin}
                        >
                          {checkin}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                  >
                    <TextField
                      fullWidth
                      label="Duration"
                      variant="outlined"
                      select
                      variant="outlined"
                      onChange={(e) => setCheckout(e.target.value)}
                    >
                      {Durations.map((hrs) => (
                        <MenuItem
                          key={hrs}
                          value={hrs}
                        >
                          {hrs}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                  >
                    <AddBut checkin={myCheckin} checkout={myCheckout} date={myOrderdate} />
                  </Grid>
                </Grid>
              </div>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box >
  );
}
