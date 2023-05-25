/**
 * Formats dates
 * @param {string} date Date as a Javascript string
 * @returns {string} Formatted date
 * @example
 * ```js
 * const date = "2023-05-24T22:00:00.000Z"
 * const PrettyDate = formatDate(date)
 * // The PrettyDate date will be the string "May 25, 2023"
 * ```
 */
export default function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
