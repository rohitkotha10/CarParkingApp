import React from 'react'
import { useState, useEffect } from 'react';

import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import {
  Avatar,
  Box,
  Card,
  Container,
  Grid,
  TextField,
  Typography
} from '@mui/material';

export default function ProfileInfo() {

  let navigate = useNavigate();
  const location = useLocation();
  const email = location.state.email;
  const type = location.state.type;
  const [worker, setWorker] = useState([]);

  useEffect(() => {
    const toSend = { email }
    fetch("http://localhost:8080/worker/getinfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(toSend)
    }).then(data => data.json())
      .then((data) => {
        setWorker(data);
        //console.log(data);
      })
  }, []);

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
            Profile
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
                      label="Email"
                      value={worker.email}
                      variant="outlined"
                      InputProps={{
                        readOnly: true,
                      }}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>

                  <Grid
                    item
                    xs={12}
                  >
                    <TextField

                      fullWidth
                      label="Name"
                      value={worker.name}
                      variant="outlined"
                      InputProps={{
                        readOnly: true,
                      }}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>

                  <Grid
                    item
                    xs={12}
                  >
                    <TextField

                      fullWidth
                      label="Experience(in hrs)"
                      value={worker.workExperience}
                      variant="outlined"
                      InputProps={{
                        readOnly: true,
                      }}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>

                  <Grid
                    item
                    xs={12}
                  >
                    <TextField

                      fullWidth
                      label="Rating(max 5)"
                      value={worker.rating}
                      variant="outlined"
                      InputProps={{
                        readOnly: true,
                      }}
                      InputLabelProps={{ shrink: true }}
                    />
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
