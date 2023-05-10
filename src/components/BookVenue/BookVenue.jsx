import PropTypes from "prop-types";
import formatDate from "../../utilities/formatDate";
import estimatePrice from "../../utilities/estiamatePrice";

export default function BookVenue({ bookingObject, numberOfGuests, price, id }) {
  console.log("MOUNT BookVenue COMPONENT");

  console.log(bookingObject);
  console.log(bookingObject);
  console.log(numberOfGuests);
  console.log(price);
  console.log(id);

  const handleCancelButton = () => {
    window.location.reload();
  };
  return (
    <div>
      <h3>Summary</h3>
      <p>Guests: {numberOfGuests}</p>
      <p>Check-in: {formatDate(bookingObject.dateFrom)}</p>
      <p>Check-out: {formatDate(bookingObject.dateTo)}</p>
      <p>Estimated price: ${estimatePrice(bookingObject.dateFrom, bookingObject.dateTo, price)}</p>
      <button>Confirm</button>
      <button onClick={handleCancelButton}>Cancel</button>
    </div>
  );
}

BookVenue.propTypes = {
  /* setBookNowClicked: PropTypes.func.isRequired, */
  price: PropTypes.number.isRequired,
  bookingObject: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  numberOfGuests: PropTypes.number.isRequired,
};
