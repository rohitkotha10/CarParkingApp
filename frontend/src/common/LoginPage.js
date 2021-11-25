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
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { useHistory } from "react-router-dom";

export default function LoginPage() {
  const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }
  const [type, setType] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [authenticated, setAuth] = React.useState(5)

  let history = useHistory();

  const handleTypeChange = (event) => {
    setType(event.target.value);
  }

  const handleClick = (e) => {
    e.preventDefault()

    const userdetails = { email, password, type }
    if (email.length == 0 || password.length == 0 || type.length == 0) {
      setAuth(4);
      return;
    }
    console.log(userdetails)
    fetch("http://localhost:8080/login/normallogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userdetails)
    }).then(data => data.json())
      .then((data) => {
        setAuth(data);
        console.log(data);
      })
  }

  const onLoginSuccess = (res) => {
    setType('User');

    const here = { email: res.profileObj.email };
    console.log(here);

    fetch("http://localhost:8080/login/googlelogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(here)
    }).then(data => data.json())
      .then((data) => {
        setAuth(data);
        console.log(data);
      })
  }

  const onLoginFailure = (res) => {
    console.log('Google Login Failed', res);
  };

  React.useEffect(() => {
    if (authenticated == 0) {
      history.push('/' + type);
    }
  }, [authenticated]);

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

          {!(authenticated == 0 || authenticated == 5) && (
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
            <TextField id="outlined-password-input" label="Password" type="password"
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
              clientId="968289488539-e07utl8uktf1hsp3ndvi5ee162p3p1mk.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={onLoginSuccess}
              onFailure={onLoginFailure}
            />
          </Box>

          <Link to="/register" style={{ textDecoration: 'none', color: "black" }}>
            <Button>
              New User? Sign up here
            </Button>
          </Link>
          <br />
          <Link to="/verify" style={{ textDecoration: 'none', color: "black" }}>
            <Button>
              Already Registred? Verify Yourself
            </Button>
          </Link>

        </Paper>
      </div>
    </Container >
  );
}
