import PropTypes from "prop-types";
import useApi from "../../hooks/useAPI";
import api_endpoints from "../../shared/shared";

export default function LoginAPICall({ data }) {
  console.log("MOUNTS LOGIN API CALL");
  console.log(api_endpoints().postLogin);
  console.log(useApi());
  console.log(data);

  return (
    <div>
      <p>Login status message here from API?</p>
    </div>
  );
}

LoginAPICall.propTypes = {
  data: PropTypes.object.isRequired,
};
