import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { useHistory } from "react-router-dom";

export default function RegisterPage() {

  const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [address, setAddress] = React.useState('')
  const [mobileNumber, setMobileNumber] = React.useState('')
  const [carNumber, setCarNumber] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [passwordc, setPasswordc] = React.useState('')
  const [authenticated, setAuth] = React.useState(5)

  let history = useHistory();

  const handleClick = (e) => {
    e.preventDefault()

    if (firstName.length == 0 ||
      lastName.length == 0 ||
      address.length == 0 ||
      mobileNumber.length == 0 ||
      carNumber.length == 0 ||
      email.length == 0 ||
      password.length == 0 ||
      password != passwordc) {
      setAuth(4)
      return;
    }

    const userdetails = { firstName, lastName, address, mobileNumber, carNumber, email, password }
    console.log(userdetails)
    fetch("http://localhost:8080/register/input", {
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

  React.useEffect(() => {
    if (authenticated == 0) {
      history.push('/verify');
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
              Registration Form
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
            <TextField id="outlined-basic" label="First Name" variant="outlined"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <TextField id="outlined-basic" label="Last Name" variant="outlined"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

            <TextField id="outlined-basic" label="Address" variant="outlined"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <TextField id="outlined-basic" label="Mobile No." variant="outlined"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />

            <TextField id="outlined-basic" label="Car Number" variant="outlined"
              value={carNumber}
              onChange={(e) => setCarNumber(e.target.value)}
            />

            <TextField id="outlined-basic" label="Email" variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField id="outlined-password-input" label="Password" type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} />

            <TextField id="outlined-password-input" label="Confirm Password" type="password"
              value={passwordc}
              onChange={(e) => setPasswordc(e.target.value)} />

            {!(password == passwordc) && (
              <Typography color="#eb6359">
                Password does not Match!.
              </Typography>
            )}

          </Box>
          <Box
            sx={{
              '& > :not(style)': { m: 2, width: '12ch' },
            }}>
            <Button variant="contained" onClick={handleClick}>
              register
            </Button>
          </Box>

        </Paper>
      </div>
    </Container >
  )

}


