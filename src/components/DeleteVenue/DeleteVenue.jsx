import PropTypes from "prop-types";
import { useState } from "react";
import DeleteVenueAPICall from "./DeleteVenueAPICall";
import { Sbutton } from "../styles/globalstyles";
import { DeleteArea } from "./DeleteVenue.style";

export default function DeleteVenue({ setIsDeleted }) {
  console.log("MOUNTING DeleteVenue");

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
    <DeleteArea>
      <h3>Are you sure you want to delete this venue?</h3>
      <Sbutton $negative onClick={handleConfirmDeleteButton}>
        Yes, delete!
      </Sbutton>

      <Sbutton $green onClick={handleCancelButton}>
        Cancel
      </Sbutton>
      {confirmDelete && <DeleteVenueAPICall />}
    </DeleteArea>
  );
}

DeleteVenue.propTypes = {
  setIsDeleted: PropTypes.func.isRequired,
};
