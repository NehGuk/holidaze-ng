import PropTypes from "prop-types";
import useApi from "../../hooks/useAPI";
import LoadingForm from "../Loading/LoadingForm";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { SpWarning } from "../styles/globalstyles";

export default function PostVenueAPICall({ formData }) {
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
  }

  useEffect(() => {
    handleErrors();
  }, [response]);

  return (
    <div>
      {isLoading && <LoadingForm />}
      {isError && <p>An error has occurred</p>}
      {errorMessage && <SpWarning>{errorMessage}</SpWarning>}

      {/* {!isSuccess && <p>Something went wrong.</p>} */}
      {isSuccess && <p>Venue successfully uploaded.</p>}
      {isSuccess && <Navigate to="/my-venues" />}
    </div>
  );
}

PostVenueAPICall.propTypes = {
  formData: PropTypes.object.isRequired,
};
