import PropTypes from "prop-types";
import useApi from "../../hooks/useAPI";
import Loading from "../Loading/Loading";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import api_endpoints from "../../shared/shared";

export default function UpdateVenueAPICall({ formData }) {
  console.log("COMPONENT RENDERED");
  const { id } = useParams();
  const options = {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };
  const { data: response, isLoading, isError, isSuccess } = useApi(api_endpoints(null, id).putVenue, options);
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
      <h3>helloo feedback here</h3>

      {isLoading && <Loading />}
      {isError && <p>An error has occurred</p>}
      {errorMessage && <p>{errorMessage}</p>}

      {isSuccess && <p>Venue successfully Updated. Thank you!</p>}
      {isSuccess && <Navigate to={`/venue/${id}`} />}
    </div>
  );
}

UpdateVenueAPICall.propTypes = {
  formData: PropTypes.object.isRequired,
};
