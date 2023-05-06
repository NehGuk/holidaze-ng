import PropTypes from "prop-types";
import ReactDatePicker from "react-datepicker";
import { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";

export default function ShowBookings({ venueBookings }) {
  const [bookingsArray, setBookingsArray] = useState([]);

  useEffect(() => {
    const getBookedDates = () => {
      /* const oneDayMs = 24 * 60 * 60 * 1000; */
      const newBookingsArray = venueBookings.map((booking) => ({
        start: new Date(booking.dateFrom),
        end: new Date(booking.dateTo),
      }));
      setBookingsArray(newBookingsArray);
      console.log(newBookingsArray);
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

  console.log(bookingsArray);

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
