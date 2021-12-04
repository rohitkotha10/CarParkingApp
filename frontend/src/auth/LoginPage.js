import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import GoogleLogin from 'react-google-login'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles(() => ({
  selectstyle: {
    background: "#373b3d"
  },
  whiteColor: {
    color: "white"
  },
  root: {
    "& .MuiFilledInput-root": {
      background: "#373b3d"
    },

  },
}));

export default function LoginPage() {
  const [type, setType] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [authenticated, setAuth] = React.useState(5)

  let navigate = useNavigate();

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
  const classes = useStyles();

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
    setEmail(res.profileObj.email);

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
      const em = email;
      console.log(em);
      navigate(type, { state: { email: email, type: type } });
    }
  }, [authenticated]);

  return (
    <div>
      <ThemeProvider theme={styletheme}>
        <Box
          sx={{
            width: 1536,
            height: 593,
            backgroundColor: 'secondary.main',
          }} pt={20}>

          <Container sx={{ justifyContent: 'center' }} >
            <div>

              <Box sx={{ backgroundColor: 'secondary.dark', width: 375, height: 470, borderRadius: 3, boxShadow: 20 }} ml={50} >
                <Box >
                  <Typography fontSize={42} fontWeight={400} gutterBottom color='secondary.contrastText'>
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
                  <TextField id="outlined-basic" label="Email" variant="filled" className={classes.root} InputProps={{ style: { color: "white" } }}
                    value={email} color="neutral"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField id="outlined-password-input" label="Password" type="password" variant="filled" className={classes.root} color="neutral" InputProps={{ style: { color: "white" } }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                </Box>

                <FormControl sx={{ m: 1, minWidth: 130 }} color="neutral" >
                  <InputLabel id="demo-simple-select-label">Select Role</InputLabel>
                  <Select className={classes.selectstyle}
                    color="neutral"
                    inputProps={{
                      style: { color: "white" },
                      classes: {
                        icon: classes.whiteColor,
                        root: classes.whiteColor,
                      },
                    }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={type}
                    label="Select Role"
                    onChange={handleTypeChange}
                  >
                    <MenuItem value={"Admin"} color="neutral"> Admin </MenuItem>
                    <MenuItem value={"Worker"}> Worker </MenuItem>
                    <MenuItem value={"User"}> User </MenuItem>
                  </Select>
                </FormControl>
                <Box
                  sx={{
                    '& > :not(style)': { m: 2, width: '12ch' },
                  }}>
                  <Button variant="contained" onClick={handleClick} color="secondary">
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
                  <Button color="neutral">
                    New User? Sign up here
                  </Button>
                </Link>
                <br />
                <Link to="/verify" style={{ textDecoration: 'none', color: "black" }}>
                  <Button color="neutral">
                    Already Registred? Verify Yourself
                  </Button>
                </Link>
              </Box>


            </div>
          </Container >
        </Box>
      </ThemeProvider>
    </div>
  );
}