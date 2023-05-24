/**
 * Creates authenticated fetch method
 * @param {string} methodType Can be "GET", "POST", "PUT", "DELETE" etc...
 * @param {object} content Has to be an object
 * @returns {object} Returns the fetch method options to be passed in the API request
 * @example
 * ```js
 * // Create the options for an authenticated POST request
 * const methodType = "POST"
 * const object = {
    media: "http://www.image-url.domain",
    name: "OlaNordman",
  }
  const method = createMethod("POST", object) 
  // The variable method will be:
   {
  "method": "POST",
  "headers": {
    "Authorization": "Bearer null",
    "Content-Type": "application/json"
  },
  "body": "{\"media\":\"http://www.image-url.domain\",\"name\":\"OlaNordman\"}"
}
* ```
*/

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
