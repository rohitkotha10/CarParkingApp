import React from 'react'
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'

import HomeIcon from "@mui/icons-material/Home"
import PersonIcon from '@mui/icons-material/Person';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import HistoryIcon from '@mui/icons-material/History';

import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function UserDrawer() {

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
          <ListItem button onClick={()=>{
            history.push('/User/', {email:email, type:type})
          }}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"DASHBOARD"} />
          </ListItem>

          <ListItem button onClick={()=>{
            history.push('/User/booking', {email:email, type:type})
          }}>
            <ListItemIcon>
              <DirectionsCarIcon />
            </ListItemIcon>
            <ListItemText primary={"BOOKING"} />
          </ListItem>

          <ListItem button onClick={()=>{
            history.push('/User/previousorders', {email:email, type:type})
          }}>
            <ListItemIcon>
              <HistoryIcon />
            </ListItemIcon>
            <ListItemText primary={"PREVIOUS ORDERS"} />
          </ListItem>

          <ListItem button onClick={()=>{
            history.push('/User/profileinfo', {email:email, type:type})
          }}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary={"PROFILE INFO"} />
          </ListItem>
      </List>

    </Drawer >
  );
}
