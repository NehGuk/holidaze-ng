import createMethod from "./createMethod";

test("Function createMethod returns correct fetch options", () => {
  const methodType = "POST";
  const content = { name: "Holt, the dog", age: 19 };
  const options = createMethod(methodType, content);
  expect(options.method).toBe("POST");
  expect(options.body).toBe('{"name":"Holt, the dog","age":19}');
});
