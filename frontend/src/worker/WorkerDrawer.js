import React from 'react'
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'

import HomeIcon from "@mui/icons-material/Home"
import PersonIcon from '@mui/icons-material/Person';
import CommentIcon from '@mui/icons-material/Comment';
import HistoryIcon from '@mui/icons-material/History';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

export default function WorkerDrawer() {
  return (
    <Drawer
      style={{ width: '240px' }}
      variant="persistent"
      anchor="left"
      open={true}>

      <List>
        <Link to="/worker/">
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"HOME"} />
          </ListItem>
        </Link>

        <Link to="/worker/orders">
          <ListItem button>
            <ListItemIcon>
              <HistoryIcon />
            </ListItemIcon>
            <ListItemText primary={"ORDERS"} />
          </ListItem>
        </Link>

        <Link to="/worker/feedback">
          <ListItem button>
            <ListItemIcon>
              <CommentIcon />
            </ListItemIcon>
            <ListItemText primary={"FEEDBACK"} />
          </ListItem>
        </Link>

        <Link to="/worker/profileinfo">
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
