import PropTypes from "prop-types";
import useApi from "../../hooks/useAPI";
import Loading from "../Loading/Loading";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export default function PostVenueAPICall({ formData }) {
  console.log("COMPONENT RENDERED");
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };
  const { data: response, isLoading, isError, isSuccess } = useApi("https://api.noroff.dev/api/v1/holidaze/venues", options);
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

      {!isSuccess && <p>NO SUCCESS, NOOO</p>}
      {isSuccess && <p>Venue successfully uploaded. Thank you!</p>}
      {isSuccess && <Navigate to="/home" />}
    </div>
  );
}

PostVenueAPICall.propTypes = {
  formData: PropTypes.object.isRequired,
};
