import PropTypes from "prop-types";
import ReactDatePicker from "react-datepicker";
import { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
/* import formatDate from "../../utilities/formatDate"; */
import BookVenue from "../BookVenue/BookVenue";

export default function ShowBookings({ venueBookings, maxGuests, price, id }) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [bookingObject, setBookingObject] = useState({});
  const [showBookingDetails, setShowBookingDetails] = useState(false);
  const [bookingLooksFine, setBookingLooksFine] = useState(true);
  const [hideBookThisVenueButton, setHideBookThisVenueButton] = useState(false);
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

  const handleGuests = (event) => {
    setNumberOfGuests(Number(event.target.value));
  };

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const createBookingObject = () => {
    setBookingObject({
      dateFrom: startDate,
      dateTo: endDate,
      guests: numberOfGuests,
      venueId: id,
    });

    if (endDate === null) {
      setBookingLooksFine(false);
      setShowBookingDetails(false);
    } else {
      setShowBookingDetails(true);
      setBookingLooksFine(true);
      setHideBookThisVenueButton(true);
    }
  };

  return (
    <div>
      <h4>Number of guests</h4>
      <input type="number" pattern="[0-9]*" inputMode="numeric" placeholder={numberOfGuests} max={maxGuests} min={1} onChange={handleGuests} />
      <h4>Select the dates</h4>
      {/* <p>Check-in/StartDate: {formatDate(startDate)} </p> */}
      {/* <p>Check-out/EndDate: {formatDate(endDate)}</p> */}
      <ReactDatePicker minDate={new Date()} todayButton="Today" onChange={onChange} startDate={startDate} endDate={endDate} selectsRange selectsDisabledDaysInRange excludeDateIntervals={bookingsArray} monthsShown={2} inline fixedHeight></ReactDatePicker>

      {!bookingLooksFine && <p>Please add a check-out date</p>}

      {!hideBookThisVenueButton && <button onClick={createBookingObject}>Book this venue</button>}

      {showBookingDetails && <BookVenue bookingObject={bookingObject} numberOfGuests={numberOfGuests} price={price} id={id} />}
    </div>
  );
}

ShowBookings.propTypes = {
  venueBookings: PropTypes.array.isRequired,
  maxGuests: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};
