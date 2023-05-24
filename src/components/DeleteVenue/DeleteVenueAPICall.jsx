import useApi from "../../hooks/useAPI";
import api_endpoints from "../../shared/shared";
import createMethod from "../../utilities/createMethod";
import { Navigate, useParams } from "react-router-dom";
import LoadingForm from "../Loading/LoadingForm";

export default function DeleteVenueAPICall() {
  const { id } = useParams();
  const { isLoading, isError, isSuccess } = useApi(api_endpoints(null, id).deleteVenue, createMethod("DELETE"));

  return (
    <div>
      {isLoading && <LoadingForm />}
      {!isError && <p>An error has occurred</p>}
      {!isSuccess && <Navigate to="/delete-venue-success" />}
    </div>
  );
}
