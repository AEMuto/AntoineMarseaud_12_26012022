/**
 * Small utility for translating the key of the data object we get from calling
 * the API when we ask for the user's performance data. Thanks to it, we don't
 * need to dabble in recharts custom label for displaying the right translated key
 * in the Radar Chart.
 * @param type
 * @returns {string}
 */
function translatePerfType(type) {
  switch (type) {
    case 'cardio':
      return 'Cardio'
    case 'intensity':
      return 'Intensité'
    case 'speed':
      return 'Vitesse'
    case 'strength':
      return 'Force'
    case 'endurance':
      return 'Endurance'
    case 'energy':
      return 'Énergie'
    default:
      console.log('Unknown performance type')
      return 'Inconnu'
  }
}

export default translatePerfType
