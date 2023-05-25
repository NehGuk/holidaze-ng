import PropTypes from "prop-types";
import formatDate from "../../utilities/formatDate";
import estimatePrice from "../../utilities/estiamatePrice";
import BookVenueAPICall from "./BookVenueAPICall";
import { useState } from "react";
import { SRegButton, Sh2CardTitle } from "../styles/globalstyles";
import { BookingConfirmArea } from "./BookVenue.style";

export default function BookVenue({ bookingObject, numberOfGuests, price }) {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [showConfirmAndCancel, setShowConfirmAndCancel] = useState(true);

  const handleCancelButton = () => {
    window.location.reload();
  };

  const handleConfirmButton = () => {
    setIsConfirmed(true);
  };

  return (
    <BookingConfirmArea>
      <Sh2CardTitle>Summary</Sh2CardTitle>
      <p>
        <span>Guests:</span> {numberOfGuests}
      </p>
      <p>
        <span>Check-in:</span> {formatDate(bookingObject.dateFrom)}
      </p>
      <p>
        <span>Check-out:</span> {formatDate(bookingObject.dateTo)}
      </p>
      <p>
        <span>Estimated price:</span> ${estimatePrice(bookingObject.dateFrom, bookingObject.dateTo, price)}
      </p>

      {showConfirmAndCancel && (
        <div>
          <SRegButton $green onClick={handleConfirmButton}>
            Confirm
          </SRegButton>
          <SRegButton $negative onClick={handleCancelButton}>
            Cancel
          </SRegButton>
        </div>
      )}

      {isConfirmed && <BookVenueAPICall bookingObject={bookingObject} setShowConfirmAndCancel={setShowConfirmAndCancel} />}
    </BookingConfirmArea>
  );
}

BookVenue.propTypes = {
  price: PropTypes.number.isRequired,
  bookingObject: PropTypes.object.isRequired,
  numberOfGuests: PropTypes.number.isRequired,
};
