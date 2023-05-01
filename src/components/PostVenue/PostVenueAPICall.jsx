import PropTypes from "prop-types";
import useApi from "../../hooks/useAPI";
import Loading from "../Loading/Loading";
import { useEffect, useState } from "react";

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

  //console.log(formData);

  const [errorMessage, setErrorMessage] = useState(null);

  // API CALL TEST
  const { data: response, isLoading, isError } = useApi("https://api.noroff.dev/api/v1/holidaze/venues", options);

  function handleErrors() {
    const errorMessage = response?.errors?.[0]?.message ?? null;
    setErrorMessage(errorMessage);
    console.log(errorMessage);
  }

  useEffect(() => {
    handleErrors();
  }, [response]);

  // API CALL TEST END

  return (
    <div>
      <h3>helloo feedback here</h3>

      {isLoading && <Loading />}
      {isError && <p>An error has occurred</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

PostVenueAPICall.propTypes = {
  formData: PropTypes.object.isRequired,
};
