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
