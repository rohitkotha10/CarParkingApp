import React from 'react'
import { useState, useEffect } from 'react';

import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Image from '../image/super2.jpg';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import {
  Avatar,
  Box,
  Card,
  Container,
  Grid,
  TextField,
  Typography
} from '@mui/material';
const styles = {
  paperContainer: {
    backgroundImage: `url(${Image})`,
    height: "100vh",
    weight: "100hh"
  }
};

export default function ProfileInfo() {
  const styletheme = createTheme({
    typography: {

      fontFamily: [
        'Chilanka',
        'cursive',
      ].join(','),
    },
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {

        dark: '#1d1f20',
        main: '#303641',
        background: '#373b3d',
        contrastText: '#ffffff',
      },
      neutral: {
        main: '#ffffff',
      },
    },

  })
  let navigate = useNavigate();
  const location = useLocation();
  const email = location.state.email;
  const type = location.state.type;
  const [user, setUser] = useState([]);

  useEffect(() => {
    const toSend = { email }
    fetch("http://localhost:8080/user/getinfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(toSend)
    }).then(data => data.json())
      .then((data) => {
        setUser(data);
        //console.log(data);
      })
  }, []);

  return (
    <ThemeProvider theme={styletheme}>
      <Box
        style={styles.paperContainer}
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
              color="#ffff"
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
                        label="First Name"
                        value={user.email}
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
                        label="First Name"
                        value={user.firstName}
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
                        label="Last Name"
                        value={user.lastName}
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
                        label="Address"
                        value={user.address}
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
                        label="Mobile Number"
                        value={user.mobileNumber}
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
                        label="Car Number"
                        value={user.carNumber}
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
    </ThemeProvider>
  );
}
