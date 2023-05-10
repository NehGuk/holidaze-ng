import PropTypes from "prop-types";

import useApi from "../../hooks/useAPI";
import api_endpoints from "../../shared/shared";
import createMethod from "../../utilities/createMethod";
import Loading from "../Loading/Loading";

export default function BookVenueAPICall({ bookingObject }) {
  console.log("MAKING API CALL");
  console.log(api_endpoints().postBooking);
  console.log(createMethod("POST", bookingObject));

  const { data, isLoading, isError, isSuccess } = useApi(api_endpoints().postBooking, createMethod("POST", bookingObject));

  return (
    <div>
      {isLoading && <Loading />}
      {isError && <p>An error has occurred</p>}
      {isSuccess && <p>You booking has been successfully created!</p>}
      {!isSuccess && data && data.errors && <p>{data.errors[0].message}</p>}
    </div>
  );
}

BookVenueAPICall.propTypes = {
  bookingObject: PropTypes.object.isRequired,
};
