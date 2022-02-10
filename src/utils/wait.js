/**
 * Utility function for simulating delay. Use it in an async function.
 * @param amount
 * @returns {Promise<unknown>}
 */
const wait = (amount = 0) =>
  new Promise((resolve) => setTimeout(resolve, amount))

export default wait
