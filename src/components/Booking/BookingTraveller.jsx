import { useParams } from "react-router-dom";

export default function BookingTraveller() {
  console.log("MOUNTING BOOKING TRAVELLER COMPONENT");
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <h2>Booking travellerrr </h2>
    </div>
  );
}
