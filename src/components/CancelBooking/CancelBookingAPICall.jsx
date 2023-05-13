import PropTypes from "prop-types";
import api_endpoints from "../../shared/shared";
import useApi from "../../hooks/useAPI";
/* import createMethod from "../../utilities/createMethod"; */
import Loading from "../Loading/Loading";
import createMethod from "../../utilities/createMethod";
import { Navigate } from "react-router-dom";

export default function CancelBookingAPICall({ bid }) {
  console.log(api_endpoints(null, null, bid).deleteBooking);

  const { isLoading, isError } = useApi(api_endpoints(null, null, bid).deleteBooking, createMethod("DELETE"));

  return (
    <div>
      {isLoading && <Loading />}
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
