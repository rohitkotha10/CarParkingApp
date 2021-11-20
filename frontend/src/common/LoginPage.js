import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import GoogleLogin from 'react-google-login'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { useHistory } from "react-router-dom";

export default function LoginPage() {
  const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }
  const [type, setType] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [normalLog, setNormal] = React.useState(false)
  const [googleLog, setGoogle] = React.useState(false)
  const [authenticated, setAuth] = React.useState(5)
  const [isFirstTime, setFirstTime] = React.useState(true)
  let history = useHistory();


  const handleTypeChange = (event) => {
    setType(event.target.value);
  }

  React.useEffect(() => {
    const here = { email };
    console.log(here);
    fetch("http://localhost:8080/login/googlelogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(here)
    }).then(data => data.json())
      .then((data) => {
        console.log(data);
        if (data == 0) {
          history.push('/user');
        };
        setAuth(data);

      })
  }, [googleLog])

  React.useEffect(() => {
    const userdetails = { email, password, type }
    console.log(userdetails)

    fetch("http://localhost:8080/login/normallogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userdetails)
    }).then(data => data.json())
      .then((data) => {
        console.log(data);
        if (data == 0) {
          history.push('/' + type);
        };
        setAuth(data);
      })
  }, [normalLog])

  const handleClick = (e) => {
    setFirstTime(false);
    setAuth(authenticated);
    e.preventDefault()
    setNormal(!normalLog);

  }

  const onLoginSuccess = (res) => {
    setFirstTime(false);
    setEmail(res.profileObj.email);
    setGoogle(!googleLog);
    if (authenticated) {
      console.log(authenticated);
    }
  };

  const onLoginFailure = (res) => {
    setFirstTime(false);
    console.log('Login Failed:', res);
  };


  return (


    <Container>
      <div>
        <Typography fontWeight={700} variant="h3" color="black"> CAR PARKING APP </Typography>
      </div>

      <div>
        <Paper elevation={2} style={paperStyle}>
          <Box>
            <Typography fontSize={42} fontWeight={400} gutterBottom>
              Login
            </Typography>
          </Box>
          {(authenticated && !isFirstTime) && (
            <Typography color="#eb6359">
              Something Wrong! Please Try Again.
            </Typography>
          )}
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" label="Email" variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField id="outlined-basic" label="Password" variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </Box>

          <FormControl sx={{ m: 1, minWidth: 130 }}>
            <InputLabel id="demo-simple-select-label">Select Role</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={type}
              label="Select Role"
              onChange={handleTypeChange}
            >
              <MenuItem value={"Admin"}> Admin </MenuItem>
              <MenuItem value={"Worker"}> Worker </MenuItem>
              <MenuItem value={"User"}> User </MenuItem>
            </Select>
          </FormControl>
          <Box
            sx={{
              '& > :not(style)': { m: 2, width: '12ch' },
            }}>
            <Button variant="contained" onClick={handleClick}>
              Sign In
            </Button>
            <GoogleLogin
              clientId="829491663211-k8te1geatnsvbrmugl0dge9hj0lt2hlb.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={onLoginSuccess}
              onFailure={onLoginFailure}
            />
          </Box>
          <Link href="#" underline="hover">New User?Sign up</Link>

        </Paper>
      </div>
    </Container >
  );
}

