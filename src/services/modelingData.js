import translateDay from '../utils/translateDay'
import translatePerfType from '../utils/translatePerfType'

/**
 * Data modeling function that take a data object (created in handlePathAPI.js)
 * and basically remap it in order to consume it in our front.
 * It will only work if the correct keys exists.
 * @param data
 * @returns {{}}
 */
class ModelingData {
  result = {}
  constructor(data) {
    for (let key in data) {
      if (key === 'userInfo') {
        this.result.keyData = data[key].keyData

        for (let subKey in data[key]) {
          if (subKey.toLowerCase().includes('score')) {
            this.result.todayScore = [
              { score: data[key][subKey] * 100 },
              { score: 100 - data[key][subKey] * 100 },
            ]
          }

          if (subKey === 'userInfos') {
            this.result.firstName = data[key][subKey].firstName
          }
        }
      }

      if (key === 'userActivity') {
        this.result.activity = data[key].map((session) => {
          const date = new Date(session.day)
          return {
            day: date.getDate(),
            kilogram: session.kilogram,
            calories: session.calories,
          }
        })
      }

      if (key === 'userAverage') {
        this.result.average = data['userAverage'].map((session, index) => {
          const date = new Date(data['userActivity'][index].day)
          const day = translateDay(date.getDay())
          return {
            day: day,
            sessionLength: session.sessionLength,
          }
        })
      }

      if (key === 'userPerformance') {
        this.result.perf = data[key].data.map((entry) => {
          return {
            type: translatePerfType(data[key].kind[entry.kind]),
            score: entry.value,
          }
        })
      }
    }
  }
}

export default ModelingData
