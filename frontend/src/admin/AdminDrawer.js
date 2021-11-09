import React from 'react'
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'

import HomeIcon from "@mui/icons-material/Home"
import PersonIcon from '@mui/icons-material/Person';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import HistoryIcon from '@mui/icons-material/History';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

export default function AdminDrawer() {
  return (
    <Drawer
      style={{ width: '240px' }}
      variant="persistent"
      anchor="left"
      open={true}>

      <List>
        <Link to="/admin/">
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"HOME"} />
          </ListItem>
        </Link>

        <Link to="/admin/parkingspots">
          <ListItem button>
            <ListItemIcon>
              <DirectionsCarIcon />
            </ListItemIcon>
            <ListItemText primary={"PARKING SPOTS"} />
          </ListItem>
        </Link>

        <Link to="/admin/orders">
          <ListItem button>
            <ListItemIcon>
              <HistoryIcon />
            </ListItemIcon>
            <ListItemText primary={"ORDERS"} />
          </ListItem>
        </Link>

        <Link to="/admin/allusers">
          <ListItem button>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary={"ALL USERS"} />
          </ListItem>
        </Link>

        <Link to="/admin/allworkers">
          <ListItem button>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary={"ALL WORKERS"} />
          </ListItem>
        </Link>
      </List>

    </Drawer>
  );
}
