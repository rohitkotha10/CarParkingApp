import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { useHistory } from "react-router-dom";

export default function VerificationPage() {

  const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }

  const [email, setEmail] = React.useState('')
  const [enterCode, setEnterCode] = React.useState('')
  const [authenticated, setAuth] = React.useState(5)


  let history = useHistory();

  const handleClick = (e) => {
    e.preventDefault()

    if (email.length == 0 ||
      enterCode.length == 0) {
      setAuth(4)
      return;
    }

    const verifyDetails = { email, enterCode }
    console.log(verifyDetails)
    fetch("http://localhost:8080/register/verifycode", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(verifyDetails)
    }).then(data => data.json())
      .then((data) => {
        setAuth(data);
        console.log(data);
      })
  }

  React.useEffect(() => {
    if (authenticated == 0) {
      history.push('/');
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
              Verification Page
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

            <TextField id="outlined-basic" label="Code" variant="outlined"
              value={enterCode}
              onChange={(e) => setEnterCode(e.target.value)}
            />

          </Box>
          <Box
            sx={{
              '& > :not(style)': { m: 2, width: '12ch' },
            }}>
            <Button variant="contained" onClick={handleClick}>
              SUBMIT
            </Button>
          </Box>
        </Paper>
      </div>
    </Container >
  )

}

