export default function estimatePrice(checkIn, checkOut, venuePrice) {
  const checkInP = new Date(checkIn);
  const checkOutP = new Date(checkOut);
  const diffInMs = Math.abs(checkOutP.getTime() - checkInP.getTime());
  const numberOfNights = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
  const estimatedPrice = numberOfNights * venuePrice;

  if (numberOfNights < 1) {
    return venuePrice;
  }
  return estimatedPrice;
}
