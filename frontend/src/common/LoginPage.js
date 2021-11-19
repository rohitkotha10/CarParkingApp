import * as React from 'react';
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button, Typography } from '@mui/material';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
export default function LoginPage() {
const theme = createTheme({
    spacing: 4,
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#0971f1',
        darker: '#053e85',
      },
      neutral: {
        main: '#1a237e',
        contrastText: '#fff',
      },
      rcolor: {
        main: '#fff',
      },
    },
  });
  const[email,setemail]=React.useState('')
  const[password,setpassword]=React.useState('')
  const[type,settype]=React.useState('')
  
  const handleChange = (event) => {
    settype(event.target.value);}

  const handleClick=(e)=>{
    e.preventDefault()
    const userdetails={email,password,type}
    console.log(userdetails)
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
      <Box 
      sx={{
        width: 1536,
        height: 753,
        backgroundColor: 'neutral.main',
      }}>
        
      <Typography variant="h3" color="white"> ABC Parking Company</Typography>  

      <Link to="/admin">
        <Button> Admin </Button>
      </Link>

      <Link to="/user">
        <Button> User </Button>
      </Link>

      <Link to="/worker">
        <Button> Worker </Button>
      </Link>
      
      <Box ml={150} mt={25}
      sx={{
        width: 350,
        backgroundColor: 'neutral.contrastText',
        borderRadius: '12px'
      }}>
      <Typography color="#1a237e">Sign in using ID and Password</Typography>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="User ID" variant="filled" color="neutral"
      value={email}
      onChange={(e)=>setemail(e.target.value)}
      />
      <TextField id="outlined-basic" label="Password" variant="filled" color="neutral"
      value={password}
      onChange={(e)=>setpassword(e.target.value)}/>
    </Box>

    <Typography>
    Select your role
      <Box pl={-5} pb = {5}>
 
      <Select
        labelId="demo-simple-select-required-label"
        label="role"
        id="demo-simple-select-required"
        value={type}
        onChange={handleChange}
      >
        <MenuItem value={"Admin"}>Admin</MenuItem>
        <MenuItem value={"User"}>User</MenuItem>
        <MenuItem value={"Worker"}>Worker</MenuItem>
      </Select>
      </Box>
    
    </Typography>
    <Button variant="contained" color="neutral" onClick={handleClick}>Sign In</Button>
    <Typography>-OR-</Typography>

<Button variant="contained" color="neutral" >Sign in using Google</Button>
<Typography> </Typography>
<Link href="#" underline="hover">New User? Sign up</Link>

</Box>
</Box>
</ThemeProvider>
    </div>
  );
}

const role = [
  { label:"Admin"},
  { label:"User" },
  { label:"Worker"},
  
];

