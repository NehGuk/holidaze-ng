import PropTypes from "prop-types";
import { useState } from "react";
import DeleteVenueAPICall from "./DeleteVenueAPICall";

export default function DeleteVenue({ setIsDeleted }) {
  console.log("MOUNTING DeleteVenue");
  console.log(setIsDeleted);

  const handleCancelButton = () => {
    console.log("Testing cancel button");
    setIsDeleted(false);
  };

  const [confirmDelete, setConfirmDelete] = useState(false);
  const handleConfirmDeleteButton = () => {
    console.log("YEE CONFIRM");
    setConfirmDelete(true);
  };

  return (
    <div>
      <h3>Are you sure?</h3>
      <button onClick={handleConfirmDeleteButton}>Yes, delete!</button>
      <button onClick={handleCancelButton}>Cancel</button>
      {confirmDelete && <DeleteVenueAPICall />}
    </div>
  );
}

DeleteVenue.propTypes = {
  setIsDeleted: PropTypes.func.isRequired,
};
