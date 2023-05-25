import PropTypes from "prop-types";
import useApi from "../../hooks/useAPI";
import api_endpoints from "../../shared/shared";
import createUnAuthMethod from "../../utilities/createUnAuthMethod";
import { Navigate } from "react-router-dom";
import { Sbutton, SpAPIErrorMessage } from "../styles/globalstyles";
import LoadingForm from "../Loading/LoadingForm";

export default function RegisterAPICall({ data }) {
  const { data: response, isLoading, isError, isSuccess } = useApi(api_endpoints().postRegister, createUnAuthMethod("POST", data));

  const handleTryAgain = () => {
    window.location.reload();
  };

  return (
    <div>
      {isLoading && <LoadingForm />}
      {isError && <p>An error has occurred</p>}

      {!isSuccess && response?.errors && (
        <div>
          <SpAPIErrorMessage>{response.errors[0].message}</SpAPIErrorMessage>
          <Sbutton onClick={handleTryAgain}>Click here to try again</Sbutton>
        </div>
      )}
      {isSuccess && (
        <div>
          <Navigate to="/registration-success" />
        </div>
      )}
    </div>
  );
}

RegisterAPICall.propTypes = {
  data: PropTypes.object.isRequired,
};
