/**
 * A utilitarian function that returns the first letter of a day (in French).
 * It accepts any integer between 1 and 7 as its parameter, otherwise the
 * switch log an error message in the console and breaks.
 * @param value
 * @returns {string}
 */
function getDay(value) {
  switch (value) {
    case 1:
      return 'L'
    case 2:
      return 'M'
    case 3:
      return 'M'
    case 4:
      return 'J'
    case 5:
      return 'V'
    case 6:
      return 'S'
    case 7:
      return 'D'
    default:
      console.log('Not a day!')
      break
  }
}

export default getDay
