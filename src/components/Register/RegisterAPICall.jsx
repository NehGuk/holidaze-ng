import PropTypes from "prop-types";
import useApi from "../../hooks/useAPI";
import api_endpoints from "../../shared/shared";
import createUnAuthMethod from "../../utilities/createUnAuthMethod";
import Loading from "../Loading/Loading";
import { Navigate } from "react-router-dom";

export default function RegisterAPICall({ data }) {
  const { data: response, isLoading, isError, isSuccess } = useApi(api_endpoints().postRegister, createUnAuthMethod("POST", data));

  return (
    <div>
      {isLoading && <Loading />}
      {isError && <p>An error has occurred</p>}

      {!isSuccess && response?.errors && (
        <div>
          <p>{response.errors[0].message}</p>
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
