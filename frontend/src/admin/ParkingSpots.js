import React from 'react'

import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function ParkingSpots() {

  let navigate = useNavigate();
  const location = useLocation();
  const email = location.state.email;
  const type = location.state.type;

  return (
    <div> ParkingSpots {email} {type}</div>
  );
}
