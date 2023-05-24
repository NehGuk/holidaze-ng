import PropTypes from "prop-types";
import ReactDatePicker from "react-datepicker";
import { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import BookVenue from "../BookVenue/BookVenue";

import { useIsAuthenticated } from "react-auth-kit";
import { BookButtonArea, BookingMessageParagraph, CalendarContainer, ShowBookingsContainer } from "./ShowBookings.style";
import { Sh2CardTitle, SinputNumber, SRegButton } from "../styles/globalstyles";

export default function ShowBookings({ venueBookings, maxGuests, price, id }) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [bookingObject, setBookingObject] = useState({});
  const [showBookingDetails, setShowBookingDetails] = useState(false);
  const [bookingLooksFine, setBookingLooksFine] = useState(true);
  const [hideBookThisVenueButton, setHideBookThisVenueButton] = useState(false);
  const [bookingsArray, setBookingsArray] = useState([]);

  const userIsAuth = useIsAuthenticated();

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
      setBookingLooksFine(true);
      setShowBookingDetails(true);
      setHideBookThisVenueButton(true);
    }
  };

  return (
    <div>
      {userIsAuth() && (
        <ShowBookingsContainer>
          <Sh2CardTitle>How to book</Sh2CardTitle>

          <BookingMessageParagraph>Number of guests:</BookingMessageParagraph>
          <SinputNumber type="number" pattern="[0-9]*" inputMode="numeric" placeholder={numberOfGuests} max={maxGuests} min={1} onChange={handleGuests} />
        </ShowBookingsContainer>
      )}
      <BookingMessageParagraph>Select dates:</BookingMessageParagraph>
      {/* <p>Select the dates</p> */}

      <CalendarContainer>
        <ReactDatePicker minDate={new Date()} todayButton="Today" onChange={onChange} startDate={startDate} endDate={endDate} selectsRange selectsDisabledDaysInRange excludeDateIntervals={bookingsArray} monthsShown={1} inline fixedHeight></ReactDatePicker>
      </CalendarContainer>
      {!bookingLooksFine && <BookingMessageParagraph $warning>Please add a check-out date.</BookingMessageParagraph>}

      <BookButtonArea>
        {userIsAuth() && !hideBookThisVenueButton && (
          <SRegButton $green onClick={createBookingObject}>
            Book this venue
          </SRegButton>
        )}
      </BookButtonArea>
      {showBookingDetails && <BookVenue bookingObject={bookingObject} numberOfGuests={numberOfGuests} price={price} setBookingLooksFine={setBookingLooksFine} setShowBookingDetails={setShowBookingDetails} setHideBookThisVenueButton={setHideBookThisVenueButton} />}
    </div>
  );
}

ShowBookings.propTypes = {
  venueBookings: PropTypes.array.isRequired,
  maxGuests: PropTypes.number,
  price: PropTypes.number,
  id: PropTypes.string,
};
