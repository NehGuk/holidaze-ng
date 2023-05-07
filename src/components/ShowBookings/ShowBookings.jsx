import PropTypes from "prop-types";
import ReactDatePicker from "react-datepicker";
import { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";

export default function ShowBookings({ venueBookings }) {
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

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const handleChangeDate = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div>
      <h3>Show Bookings component</h3>

      <ReactDatePicker minDate={new Date()} todayButton="Today" selected={startDate} onChange={handleChangeDate} startDate={startDate} endDate={endDate} selectsRange selectsDisabledDaysInRange excludeDateIntervals={bookingsArray} monthsShown={2} inline></ReactDatePicker>
    </div>
  );
}

ShowBookings.propTypes = {
  venueBookings: PropTypes.array.isRequired,
};
