import useApi from "../../hooks/useAPI";
import api_endpoints from "../../shared/shared";

import { Navigate, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";

/* import { Navigate } from "react-router-dom"; */

export default function DeleteVenueAPICall() {
  const { id } = useParams();

  const options = {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  };

  console.log(api_endpoints(null, id).deleteVenue);

  const { isLoading, isError, isSuccess } = useApi(api_endpoints(null, id).deleteVenue, options);

  return (
    <div>
      {isLoading && <Loading />}
      {!isError && <p>An error has occurred</p>}
      {!isSuccess && <Navigate to="/delete-venue-success" />}
    </div>
  );
}
