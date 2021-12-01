import React from 'react'
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'

import HomeIcon from "@mui/icons-material/Home"
import PersonIcon from '@mui/icons-material/Person';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import HistoryIcon from '@mui/icons-material/History';

import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function AdminDrawer() {

  let history = useHistory();
  const location = useLocation();
  const email = location.state.email;
  const type = location.state.type;

  return (
    <Drawer
      style={{ width: '240px' }}
      variant="persistent"
      anchor="left"
      open={true}>

      <List>
        <ListItem button onClick={() => {
          history.push('/Admin/', { email: email, type: type })
        }}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={"DASHBOARD"} />
        </ListItem>

        <ListItem button onClick={() => {
          history.push('/Admin/parkingspots', { email: email, type: type })
        }}>
          <ListItemIcon>
            <DirectionsCarIcon />
          </ListItemIcon>
          <ListItemText primary={"PARKING SPOTS"} />
        </ListItem>

        <ListItem button onClick={() => {
          history.push('/Admin/orders', { email: email, type: type })
        }}>
          <ListItemIcon>
            <HistoryIcon />
          </ListItemIcon>
          <ListItemText primary={"ORDERS"} />
        </ListItem>

        <ListItem button onClick={() => {
          history.push('/Admin/allusers', { email: email, type: type })
        }}>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary={"ALL USERS"} />
        </ListItem>

        <ListItem button onClick={() => {
          history.push('/Admin/allworkers', { email: email, type: type })
        }}>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary={"ALL WORKERS"} />
        </ListItem>
      </List>

    </Drawer>
  );
}
