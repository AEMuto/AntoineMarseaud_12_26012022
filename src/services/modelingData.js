import translateDay from '../utils/translateDay'
import translatePerfType from '../utils/translatePerfType'

/**
 * Data modeling function that take a data object (created in handlePathAPI.js)
 * and basically remap it in order to consume it in our front.
 * It will only work if the correct keys exists.
 * @param data
 * @returns {{}}
 */
function modelingData(data) {
  const result = {}
  for (let key in data) {
    if (key === 'userInfo') {
      result.keyData = data[key].keyData

      for (let subKey in data[key]) {
        if (subKey.toLowerCase().includes('score')) {
          result.todayScore = [
            { score: data[key][subKey] * 100 },
            { score: 100 - data[key][subKey] * 100 },
          ]
        }

        if (subKey === 'userInfos') {
          result.firstName = data[key][subKey].firstName
        }
      }
    }

    if (key === 'userActivity') {
      result.activity = data[key].map((session) => {
        const date = new Date(session.day)
        return {
          day: date.getDate(),
          kilogram: session.kilogram,
          calories: session.calories,
        }
      })

      result.average = data['userAverage'].map((session, index) => {
        const date = new Date(data['userActivity'][index].day)
        const day = translateDay(date.getDay())
        return {
          day: day,
          sessionLength: session.sessionLength,
        }
      })
    }

    if (key === 'userPerformance') {
      result.perf = data[key].data.map((entry) => {
        return {
          type: translatePerfType(data[key].kind[entry.kind]),
          score: entry.value,
        }
      })
    }
  }
  return result
}

export default modelingData
