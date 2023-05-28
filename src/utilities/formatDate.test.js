import formatDate from "./formatDate";

test("Function returns date in the desired format", () => {
  const date = "2023-04-01";
  expect(formatDate(date)).toBe("April 1, 2023");
});
