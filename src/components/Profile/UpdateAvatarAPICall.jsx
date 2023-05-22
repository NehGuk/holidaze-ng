import PropTypes from "prop-types";
import Loading from "../Loading/Loading.jsx";
import useAPI from "../../hooks/useAPI.jsx";
import api_endpoints from "../../shared/shared.js";
import createMethod from "../../utilities/createMethod.js";

import { useAuthUser } from "react-auth-kit";

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
      {isError && <p>An error has occurred</p>}
      {!isSuccess && response.errors && <p>{response.errors[0].message}</p>}
      {isSuccess && <p>Successss</p>}
    </div>
  );
}

UpdateAvatarAPICall.propTypes = {
  data: PropTypes.object.isRequired,
};
