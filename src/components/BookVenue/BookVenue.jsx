import PropTypes from "prop-types";
import formatDate from "../../utilities/formatDate";
import estimatePrice from "../../utilities/estiamatePrice";
import BookVenueAPICall from "./BookVenueAPICall";
import { useState } from "react";

export default function BookVenue({ bookingObject, numberOfGuests, price }) {
  console.log("MOUNT BookVenue COMPONENT");

  const [isConfirmed, setIsConfirmed] = useState(false);
  const [showConfirmAndCancel, setShowConfirmAndCancel] = useState(true);

  const handleCancelButton = () => {
    window.location.reload();
  };

  const handleConfirmButton = () => {
    console.log("CONFIRM");
    setIsConfirmed(true);
  };

  return (
    <div>
      <h3>Summary</h3>
      <p>Guests: {numberOfGuests}</p>
      <p>Check-in: {formatDate(bookingObject.dateFrom)}</p>
      <p>Check-out: {formatDate(bookingObject.dateTo)}</p>
      <p>Estimated price: ${estimatePrice(bookingObject.dateFrom, bookingObject.dateTo, price)}</p>

      {showConfirmAndCancel && (
        <div>
          <button onClick={handleConfirmButton}>Confirm</button>
          <button onClick={handleCancelButton}>Cancel</button>
        </div>
      )}

      {isConfirmed && <BookVenueAPICall bookingObject={bookingObject} setShowConfirmAndCancel={setShowConfirmAndCancel} />}
    </div>
  );
}

BookVenue.propTypes = {
  price: PropTypes.number.isRequired,
  bookingObject: PropTypes.object.isRequired,
  numberOfGuests: PropTypes.number.isRequired,
};
