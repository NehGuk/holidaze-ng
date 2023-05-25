import PropTypes from "prop-types";
import useApi from "../../hooks/useAPI";
import api_endpoints from "../../shared/shared";
import createUnAuthMethod from "../../utilities/createUnAuthMethod";
import LoadingForm from "../Loading/LoadingForm";
import { Sbutton, SpAPIErrorMessage } from "../styles/globalstyles";
import { useSignIn } from "react-auth-kit";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

export default function LoginAPICall({ data }) {
  const signIn = useSignIn();
  const { data: response, isLoading, isError, isSuccess } = useApi(api_endpoints().postLogin, createUnAuthMethod("POST", data));
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      signIn({ token: response.accessToken, expiresIn: 86400, tokenType: "Bearer", authState: { name: response.name, email: response.email, venueManager: response.venueManager, avatar: response.avatar } });
      setLoggedIn(true);
    }
  }, [isSuccess]);

  const handleTryAgain = () => {
    window.location.reload();
  };

  return (
    <div>
      {isLoading && <LoadingForm />}
      {isError && <SpAPIErrorMessage>An error has occurred.</SpAPIErrorMessage>}

      {!isSuccess && response?.errors && (
        <div>
          <SpAPIErrorMessage>{response.errors[0].message}</SpAPIErrorMessage>
          <Sbutton onClick={handleTryAgain}>Click here to try again</Sbutton>
        </div>
      )}

      {isSuccess && <SpAPIErrorMessage>Login successful!</SpAPIErrorMessage>}
      {loggedIn && <Navigate to="/home" />}
    </div>
  );
}

LoginAPICall.propTypes = {
  data: PropTypes.object.isRequired,
};
