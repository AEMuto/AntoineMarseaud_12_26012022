/**
 * Convert hex color values to rgb values with an optional alpha value.
 * In the details: we take the first two base 16 number from hex parameter,
 * convert them to decimal value and store the result in a constant
 * we initialize as 'r' for 'red'. Same logic for the 'green' and 'blue'.
 * Then we return through string interpolation our corresponding rgb.
 * Example: hex = #FFFFFF, FF = 255, so we return the string 'rgb(255, 255, 255)'
 * @param hex
 * @param alpha
 * @returns {string}
 */
export function hexToRGB(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)

  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  } else {
    return `rgb(${r}, ${g}, ${b})`
  }
}
