import PropTypes from "prop-types";
import DatePicker from "./DatePicker";

export default function ShowBookings({ venueBookings }) {
  console.log("MOUNTS SHOW BOOKINGS COMPONENT");
  console.log(venueBookings);
  console.log(venueBookings[0].dateFrom);
  console.log(venueBookings[0].dateTo);

  return (
    <div>
      <h3>Post booking options here</h3>
      <p>See available datessss</p>
      <input type="date" />
      <DatePicker venueBookings={venueBookings} />
    </div>
  );
}

ShowBookings.propTypes = {
  venueBookings: PropTypes.array.isRequired,
};
