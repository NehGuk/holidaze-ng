/**
 * Estimates the price of a stay by multiplying the venue price for the number of nights booked
 * @param {string} checkIn Date string of checkin
 * @param {string} checkOut Date string of checkout
 * @param {number} venuePrice Venue price per night
 * @returns {number} Final price
 * @example
 * ```js
 * // Add the dates and price in the correct format
 * const checkIn = "2023-05-24T22:00:00.000Z"
 * const checkOut = "2023-05-26T22:00:00.000Z"
 * const venuePrice = 300
 * // The function will return the number 600 as a result
 * ```
 */
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
