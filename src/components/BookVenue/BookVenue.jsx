import PropTypes from "prop-types";
import formatDate from "../../utilities/formatDate";

export default function BookVenue({ setBookNowClicked, price, bookingDetails, id }) {
  console.log("MOUNT BookVenue COMPONENT");

  const handleCancelButton = () => {
    setBookNowClicked(false);
  };
  console.log(bookingDetails);
  return (
    <div>
      <p>BookVenue component here </p>
      <p>Guests: {bookingDetails.guests}</p>
      <p>Check-in: {formatDate(bookingDetails.dateFrom)}</p>
      <p>Check-out: {formatDate(bookingDetails.dateTo)}</p>
      <p>Estimated price: ${price}</p>

      <button>Confirm booking</button>
      <button onClick={handleCancelButton}>Cancel</button>
    </div>
  );
}

BookVenue.propTypes = {
  setBookNowClicked: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired,
  bookingDetails: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
};
