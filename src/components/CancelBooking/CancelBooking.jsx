import PropTypes from "prop-types";
import { useState } from "react";
import CancelBookingAPICall from "./CancelBookingAPICall";

export default function CancelBooking({ setCancelClicked, bid }) {
  console.log("CANCEL BOOKING MOUNTS");

  const handleNevermindButton = () => {
    setCancelClicked(false);
  };

  const [cancelConfirmed, setCancelConfirmed] = useState(false);
  const handleConfirmCancelButton = () => {
    setCancelConfirmed(true);
  };

  return (
    <div>
      <h4>Are you sure you want to cancel this booking?</h4>
      <button onClick={handleConfirmCancelButton}>Yes, cancel this booking</button>
      <button onClick={handleNevermindButton}>Nevermind, keep it</button>
      {cancelConfirmed && <CancelBookingAPICall bid={bid} />}
    </div>
  );
}

CancelBooking.propTypes = {
  setCancelClicked: PropTypes.func.isRequired,
  bid: PropTypes.string.isRequired,
};
