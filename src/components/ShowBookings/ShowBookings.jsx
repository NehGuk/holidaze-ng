import PropTypes from "prop-types";
import ReactDatePicker from "react-datepicker";
import { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import formatDate from "../../utilities/formatDate";

export default function ShowBookings({ venueBookings, maxGuests, price, id }) {
  const [bookingsArray, setBookingsArray] = useState([]);

  useEffect(() => {
    const getBookedDates = () => {
      function eliminateInvalidBookings() {
        venueBookings.map((booking) => {
          const checkIn = new Date(booking.dateFrom);
          const checkOut = new Date(booking.dateTo);

          if (checkIn.getTime() <= checkOut.getTime()) {
            const validBooking = {
              start: checkIn,
              end: checkOut,
            };

            setBookingsArray((prevBookingsArray) => [...prevBookingsArray, validBooking]);
          }
        });
      }
      eliminateInvalidBookings();
    };

    getBookedDates();
  }, [venueBookings]);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [numberOfGuests, setNumberOfGuests] = useState(1);

  const [bookingReady, setBookingReady] = useState(false);

  /* const [bookNowClicked, setBookNowClicked] = useState(false); */
  /* const [bookNowClickedDisabled, setBookNowClickedDisabled] = useState(true); */

  const [bookingObject, setBookingObject] = useState({});

  const handleGuests = (event) => {
    setNumberOfGuests(event.target.value);
  };

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const createBookingObject = () => {
    setBookingReady(true);
    console.log(bookingReady);

    setBookingObject({
      dateFrom: startDate,
      dateTo: endDate,
      guests: numberOfGuests,
      venueId: id,
    });

    console.log(startDate);
    console.log(endDate);
    console.log(numberOfGuests);
    console.log(id);
    console.log(bookingObject);
  };

  const handleConfirmBooking = () => {
    console.log("HANDLE CONFIRM BUTTON");
    console.log(bookingObject);
  };

  return (
    <div>
      <h4>Number of guests</h4>
      <input type="number" pattern="[0-9]*" inputMode="numeric" placeholder={numberOfGuests} max={maxGuests} min={1} onChange={handleGuests} />
      <h4>Select the dates</h4>
      <ReactDatePicker minDate={new Date()} todayButton="Today" selected={startDate} onChange={onChange} startDate={startDate} endDate={endDate} selectsRange selectsDisabledDaysInRange excludeDateIntervals={bookingsArray} monthsShown={2} inline fixedHeight></ReactDatePicker>

      <p>StartDate: {formatDate(startDate)} </p>
      <p>EndDate: {formatDate(endDate)}</p>
      <p>Guests: {numberOfGuests}</p>
      <p>Estimated price: {price}</p>
      <p>Venue ID: {id}</p>

      <button onClick={createBookingObject}>Book this venue</button>
      <button onClick={handleConfirmBooking}>Confirm</button>
    </div>
  );
}

ShowBookings.propTypes = {
  venueBookings: PropTypes.array.isRequired,
  maxGuests: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};
