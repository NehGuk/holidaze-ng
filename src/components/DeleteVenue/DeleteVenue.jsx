import PropTypes from "prop-types";

export default function DeleteVenue({ setIsDeleted }) {
  console.log("MOUNTING DeleteVenue");
  console.log(setIsDeleted);

  const handleCancelButton = () => {
    console.log("Testing cancel button");
    setIsDeleted(false);
  };

  return (
    <div>
      <h3>Are you sure?</h3>
      <button>Yes, delete!</button>
      <button onClick={handleCancelButton}>Cancel</button>
    </div>
  );
}

DeleteVenue.propTypes = {
  setIsDeleted: PropTypes.func.isRequired,
};
