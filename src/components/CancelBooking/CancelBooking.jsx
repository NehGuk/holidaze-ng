import PropTypes from "prop-types";
import { useState } from "react";
import CancelBookingAPICall from "./CancelBookingAPICall";
import { CTAArea, SRegButton } from "../styles/globalstyles";
import { ConfirmationQuestion } from "./CancelBooking.style";

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
    <CTAArea>
      <ConfirmationQuestion>Are you sure you want to cancel this booking?</ConfirmationQuestion>
      <SRegButton $negative onClick={handleConfirmCancelButton}>
        Yes, cancel this booking
      </SRegButton>
      <SRegButton onClick={handleNevermindButton}>Nevermind, keep it</SRegButton>
      {cancelConfirmed && <CancelBookingAPICall bid={bid} />}
    </CTAArea>
  );
}

CancelBooking.propTypes = {
  setCancelClicked: PropTypes.func.isRequired,
  bid: PropTypes.string.isRequired,
};
