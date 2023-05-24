import PropTypes from "prop-types";
import useApi from "../../hooks/useAPI";
import api_endpoints from "../../shared/shared";
import createMethod from "../../utilities/createMethod";
import LoadingForm from "../Loading/LoadingForm";

import { Navigate } from "react-router-dom";
import { SRegButton, SpWarning } from "../styles/globalstyles";

export default function BookVenueAPICall({ bookingObject, setShowConfirmAndCancel }) {
  console.log("MAKING API CALL");
  console.log(api_endpoints().postBooking);
  console.log(createMethod("POST", bookingObject));

  const { data, isLoading, isError, isSuccess } = useApi(api_endpoints().postBooking, createMethod("POST", bookingObject));

  const handlePleaseTryAgain = () => {
    window.location.reload();
  };

  return (
    <div>
      {isLoading && <LoadingForm />}
      {isError && (
        <div>
          <p>An error has occurred</p>
          <button onClick={handlePleaseTryAgain}>Please try again</button>
        </div>
      )}
      {isError && setShowConfirmAndCancel(false)}

      {isSuccess && <Navigate to="/booking-confirmed" />}
      {!isSuccess && data && data.errors && (
        <div>
          <SpWarning>{data.errors[0].message}</SpWarning>

          <SRegButton $negative onClick={handlePleaseTryAgain}>
            Please try again
          </SRegButton>
        </div>
      )}
      {data && data.errors && setShowConfirmAndCancel(false)}
    </div>
  );
}

BookVenueAPICall.propTypes = {
  bookingObject: PropTypes.object.isRequired,
  setShowConfirmAndCancel: PropTypes.func.isRequired,
};
