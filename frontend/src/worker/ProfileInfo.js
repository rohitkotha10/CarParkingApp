import React from 'react'

import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function ProfileInfo() {

  let navigate = useNavigate();
  const location = useLocation();
  const email = location.state.email;
  const type = location.state.type;

  return (
    <div> ProfileInfo {email} {type}</div>
  );
}
