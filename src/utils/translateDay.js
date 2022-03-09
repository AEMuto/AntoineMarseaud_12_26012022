/**
 * A utilitarian function that returns the first letter of a day (in French).
 * It accepts any integer between 0 and 6 as its parameter, otherwise the
 * switch log an error message in the console and breaks.
 * @param value
 * @returns {string}
 */
function translateDay(value) {
  switch (value) {
    case 0:
      return 'L'
    case 1:
      return 'M'
    case 2:
      return 'M'
    case 3:
      return 'J'
    case 4:
      return 'V'
    case 5:
      return 'S'
    case 6:
      return 'D'
    default:
      console.log('Not a day!')
      break
  }
}

export default translateDay
