import PropTypes from "prop-types";
import api_endpoints from "../../shared/shared";
import useApi from "../../hooks/useAPI";
import createMethod from "../../utilities/createMethod";
import { Navigate } from "react-router-dom";
import LoadingForm from "../Loading/LoadingForm";

export default function CancelBookingAPICall({ bid }) {
  const { isLoading, isError } = useApi(api_endpoints(null, null, bid).deleteBooking, createMethod("DELETE"));

  return (
    <div>
      {isLoading && <LoadingForm />}
      {isError && (
        <div>
          <Navigate to="/booking-canceled-confirmed" />
        </div>
      )}
    </div>
  );
}

CancelBookingAPICall.propTypes = {
  bid: PropTypes.string.isRequired,
};
