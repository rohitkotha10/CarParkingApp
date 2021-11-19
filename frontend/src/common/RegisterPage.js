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
  const[firstName,setfirstName]=React.useState('')
  const[lastName,setlastName]=React.useState('')
  const[address,setaddress]=React.useState('')
  const[mobileNumber,setmobileNumber]=React.useState('')
  const[carNumber,setcarNumber]=React.useState('')
  const[verificationCode,setverificationCode]=React.useState('')
  
  const handleChange = (event) => {
    settype(event.target.value);}

  const handleClick=(e)=>{
    e.preventDefault()
    const userdetails={firstName,lastName,address,mobileNumber,carNumber,verificationCode}
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

      <Box ml={150} mt={25}
      sx={{
        width: 350,
        backgroundColor: 'neutral.contrastText',
        borderRadius: '12px'
      }}>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="First Name" variant="filled" color="neutral"
      value={firstName}
      onChange={(e)=>setfirstName(e.target.value)}
      />
      <TextField id="outlined-basic" label="Last Name" variant="filled" color="neutral"
      value={lastName}
      onChange={(e)=>setlastName(e.target.value)}/>
      <TextField id="outlined-basic" label="Address" variant="filled" color="neutral"
      value={address}
      onChange={(e)=>setaddress(e.target.value)}/>
      <TextField id="outlined-basic" label="Mobile Number" variant="filled" color="neutral"
      value={mobileNumber}
      onChange={(e)=>setmobileNumber(e.target.value)}/>
      <TextField id="outlined-basic" label="Car Number" variant="filled" color="neutral"
      value={carNumber}
      onChange={(e)=>setcarNumber(e.target.value)}/>
      <TextField id="outlined-basic" label="Verification Code" variant="filled" color="neutral"
      value={verificationCode}
      onChange={(e)=>setverificationCode(e.target.value)}/>
    </Box>
    <Button variant="contained" color="neutral" onClick={handleClick}>Register</Button>
</Box>
</ThemeProvider>
    </div>
  );
}


