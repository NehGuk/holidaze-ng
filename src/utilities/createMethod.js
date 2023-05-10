export default function createMethod(methodType, content) {
  const options = {
    method: methodType,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(content),
  };

  return options;
}
