import React from 'react'
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'

import PersonIcon from '@mui/icons-material/Person';
import HistoryIcon from '@mui/icons-material/History';

import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function WorkerDrawer() {

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
            history.push('/Worker/orders', {email:email, type:type})
          }}>
          <ListItemIcon>
            <HistoryIcon />
          </ListItemIcon>
          <ListItemText primary={"ORDERS"} />
        </ListItem>

        <ListItem button onClick={()=>{
            history.push('/Worker/profileinfo', {email:email, type:type})
          }}>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary={"PROFILE INFO"} />
        </ListItem>
      </List>

    </Drawer>
  );
}
