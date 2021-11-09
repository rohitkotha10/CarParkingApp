import React from 'react'
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'

import HomeIcon from "@mui/icons-material/Home"
import PersonIcon from '@mui/icons-material/Person';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import HistoryIcon from '@mui/icons-material/History';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

export default function UserDrawer() {
  return (
    <Drawer
      style={{ width: '240px' }}
      variant="persistent"
      anchor="left"
      open={true}>

      <List>
        <Link to="/user/">
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"HOME"} />
          </ListItem>
        </Link>

        <Link to="/user/booking">
          <ListItem button>
            <ListItemIcon>
              <DirectionsCarIcon />
            </ListItemIcon>
            <ListItemText primary={"BOOKING"} />
          </ListItem>
        </Link>

        <Link to="/user/previousorders">
          <ListItem button>
            <ListItemIcon>
              <HistoryIcon />
            </ListItemIcon>
            <ListItemText primary={"PREVIOUS ORDERS"} />
          </ListItem>
        </Link>

        <Link to="/user/profileinfo">
          <ListItem button>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary={"PROFILE INFO"} />
          </ListItem>
        </Link>
      </List>

    </Drawer>
  );
}
