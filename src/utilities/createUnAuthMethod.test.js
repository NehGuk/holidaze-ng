import createUnAuthMethod from "./createUnAuthMethod";

test("Function createUnAuthMethod returns correct fetch options", () => {
  const methodType = "PUT";
  const content = { avatar: "https://i.pinimg.com/originals/66/b1/d5/66b1d5514f09a12bd666dcabc04e22a6.jpg" };

  const expectedOptions = {
    method: methodType,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(content),
  };

  const options = createUnAuthMethod(methodType, content);

  expect(options).toEqual(expectedOptions);
});
