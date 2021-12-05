import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import {
  Avatar,
  Card,
  Container,
  Grid,
  TextField,
  Typography
} from '@mui/material';

export const AddBut = (props) => {
  const { checkin, checkout, date } = props;
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');
  const [location, setLocation] = React.useState('');
  const [authenticated, setAuth] = React.useState(5)

  const handleClose = () => {
    if (location.length == 0) {
      setAuth(4)
      return;
    }

    const details = { location }
    console.log(details)

    fetch("http://localhost:8080/parking/addparking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(details)
    }).then(data => data.json())
      .then((data) => {
        setAuth(data);
        console.log(data);
      })
  };

  React.useEffect(() => {
    if (authenticated == 0) {
      setOpen(false)
      setAuth(5);
    }
  }, [authenticated]);

  return (
    <React.Fragment>
      <Button
        color="primary"
        size="large"
        type="submit"
        variant="contained"
        onClick={() => {
          setOpen(true);
          console.log(props);
        }}
      >
        Save settings
      </Button>
      <Dialog
        fullWidth={true}
        maxWidth="md"
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogTitle variant="h4">Add Parking Spot</DialogTitle>
        {!(authenticated == 0 || authenticated == 5) && (
          <Typography color="#eb6359">
            Already Exists, Please Try Again
          </Typography>
        )}
        <DialogContent alignitems="center">
          <br />
          <Grid
            container
            spacing={2}
            alignitems="center"
            justifyContent="center"
            sx={{ maxWidth: 420 }}
          >
            <Grid
              item
              xs={12}
            >
              <TextField

                fullWidth
                label="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Button onClick={handleClose}>Add Parking Spot</Button>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
