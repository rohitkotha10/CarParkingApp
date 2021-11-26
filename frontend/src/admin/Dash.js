import React from 'react'

import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import AllUsers from './AllUsers'
import AllWorkers from './AllWorkers'
import Orders from './Orders'
import ParkingSpots from './ParkingSpots'

export default function Dash() {

  let history = useHistory();
  const location = useLocation();
  const email = location.state.email;
  const type = location.state.type;

  //only previews with links to each of them
  return (
    <div>
      Home {email} {type} <br />
      requests <br />
      Current Orders <br />
      ParkingSpots <br />
      AllUsers <br />
      AllWorkers <br />
      PaymentReceived <br />
    </div>
  );
}
