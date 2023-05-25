/**
 * Creates unauthenticated fetch method
 * @param {string} methodType Can be "GET", "POST", "PUT", "DELETE" etc...
 * @param {object} content Has to be an object
 * @returns {object} Returns the fetch method options to be passed in the API request
 * @example
 * / Create the options for an unauthenticated POST request
 * const methodType = "POST"
 * const avatarObject = {
    media: "http://www.image-url.domain",
  }
 * const createUnAuthMethod("POST", avatarObject) = {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json"
  },
  "body": "{\"media\":\"http://www.image-url.domain\"}"
} 
 */
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
