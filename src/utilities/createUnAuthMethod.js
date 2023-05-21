export default function createUnAuthMethod(methodType, content) {
  const options = {
    method: methodType,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(content),
  };

  return options;
}
