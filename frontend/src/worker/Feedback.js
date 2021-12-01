import React from 'react'

import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Feedback() {

  let history = useHistory();
  const location = useLocation();
  const email = location.state.email;
  const type = location.state.type;
  
  return (
    <div> Feedback {email} {type}</div>
  );
}
