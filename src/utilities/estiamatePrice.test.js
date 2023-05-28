import estimatePrice from "./estiamatePrice";

test("estimatePrice calculates the correct price", () => {
  const checkIn = "2023-04-01";
  const checkOut = "2023-04-20";
  const venuePrice = 100;
  const expectedPrice = 1900;
  const calculatedPrice = estimatePrice(checkIn, checkOut, venuePrice);
  expect(calculatedPrice).toBe(expectedPrice);
});
