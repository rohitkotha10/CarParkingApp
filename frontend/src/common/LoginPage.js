import * as React from 'react';
import { Button, Typography } from '@mui/material';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

export default function LoginPage() {
  const [alignment, setAlignment] = React.useState('User');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (

    <div>
      <Typography> Login Page </Typography>

      <Link to="/admin">
        <Button> Admin </Button>
      </Link>

      <Link to="/user">
        <Button> User </Button>
      </Link>

      <Link to="/worker">
        <Button> Worker </Button>
      </Link>
    </div>

  );
}

