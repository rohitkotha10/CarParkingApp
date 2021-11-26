import React from 'react'

import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Dash() {

  let history = useHistory();
  const location = useLocation();
  const email = location.state.email;
  const type = location.state.type;

  return (
    <div>
      Home {email} {type} <br />
      Current Order <br />
      Link to profile info <br />
      Link to booking rides <br />
      Wallet and Payment History<br />
    </div>
  );
}
