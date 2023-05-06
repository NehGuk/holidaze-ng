import PropTypes from "prop-types";

export default function DatePicker({ venueBookings }) {
  console.log("MOUNTING DATE PICKER");
  console.log(venueBookings);
  return (
    <div>
      <h3>Date picker</h3>
    </div>
  );
}

DatePicker.propTypes = {
  venueBookings: PropTypes.array.isRequired,
};
