import PropTypes from "prop-types";
import Loading from "../Loading/Loading.jsx";
import useAPI from "../../hooks/useAPI.jsx";
import api_endpoints from "../../shared/shared.js";
import createMethod from "../../utilities/createMethod.js";

import { useAuthUser } from "react-auth-kit";
import { SpWarning } from "../styles/globalstyles.jsx";

export default function UpdateAvatarAPICall({ data }) {
  console.log("MOUNTING UPDATEAvatarAPICall");
  const userInfo = useAuthUser();
  const { data: response, isLoading, isError, isSuccess } = useAPI(api_endpoints(userInfo().name).putAvatar, createMethod("PUT", data));
  console.log(response);
  console.log(data);

  if (isSuccess) {
    localStorage.setItem("token_state", JSON.stringify(response));
    window.location.reload();
  }

  return (
    <div>
      {isLoading && <Loading />}
      {isError && <SpWarning>An error has occurred</SpWarning>}
      {!isSuccess && response.errors && <SpWarning>{response.errors[0].message}</SpWarning>}
      {isSuccess && <p>Success!</p>}
    </div>
  );
}

UpdateAvatarAPICall.propTypes = {
  data: PropTypes.object.isRequired,
};
