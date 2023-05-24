import PropTypes from "prop-types";
import useApi from "../../hooks/useAPI";
import Loading from "../Loading/Loading";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import api_endpoints from "../../shared/shared";
import createMethod from "../../utilities/createMethod";
import { SpWarning } from "../styles/globalstyles";

export default function UpdateVenueAPICall({ formData }) {
  console.log("COMPONENT RENDERED");
  const { id } = useParams();

  const { data: response, isLoading, isError, isSuccess } = useApi(api_endpoints(null, id).putVenue, createMethod("PUT", formData));
  const [errorMessage, setErrorMessage] = useState(null);

  function handleErrors() {
    const errorMessage = response?.errors?.[0]?.message ?? null;
    setErrorMessage(errorMessage);
    console.log(errorMessage);
  }

  useEffect(() => {
    handleErrors();
  }, [response]);

  console.log(isSuccess);
  return (
    <div>
      {isLoading && <Loading />}
      {isError && <SpWarning>An error has occurred</SpWarning>}

      {errorMessage && <SpWarning>{errorMessage}</SpWarning>}

      {isSuccess && <p>Venue successfully updated.</p>}
      {isSuccess && <Navigate to={`/venue/${id}`} />}
    </div>
  );
}

UpdateVenueAPICall.propTypes = {
  formData: PropTypes.object.isRequired,
};
