import PropTypes from "prop-types";
import ReactDatePicker from "react-datepicker";
import { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";

export default function ShowBookings({ venueBookings }) {
  const [bookingsArray, setBookingsArray] = useState([]);

  useEffect(() => {
    const getBookedDates = () => {
      function eliminateInvalidBookings() {
        /*         const oneDayMs = 24 * 60 * 60 * 1000; */
        /* console.log(oneDayMs); */

        venueBookings.map((booking) => {
          const checkIn = new Date(booking.dateFrom);
          const checkOut = new Date(booking.dateTo);

          if (checkIn.getTime() <= checkOut.getTime()) {
            const validBooking = {
              start: checkIn,
              end: checkOut,
            };
            console.log(validBooking);

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

  /* console.log(bookingsArray); */

  return (
    <div>
      <h3>Show Bookings component</h3>
      <ReactDatePicker selected={startDate} onChange={handleChangeDate} startDate={startDate} endDate={endDate} selectsRange excludeDateIntervals={bookingsArray} inline />
    </div>
  );
}

ShowBookings.propTypes = {
  venueBookings: PropTypes.array.isRequired,
};
