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
  const { comment } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <React.Fragment>
      <Button
        onClick={handleClickOpen}
      >
        View
      </Button>

      <Dialog
        fullWidth={true}
        maxWidth="sm"
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogContent alignitems="center">
          <br />
          <Typography key={comment}>
            {comment}
          </Typography>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
