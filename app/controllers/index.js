import Controller from '@ember/controller'
import { task, timeout } from 'ember-concurrency'
import fetch from 'fetch'
import moment from 'moment'

const STATION_ID = 8589992

const LIMIT = 6

export default Controller.extend({
  init() {
    this._super(...arguments)

    this.set('data', [])
  },

  _fetchData: task(function*() {
    for (;;) {
      let res = yield fetch(
        `http://transport.opendata.ch/v1/stationboard?id=${STATION_ID}&limit=${
          LIMIT
        }`
      )

      let { stationboard } = yield res.json()

      let data = stationboard.map(({ number, stop, to }) => {
        return {
          number,
          to,
          at: moment(stop.departure)
        }
      })

      this.setProperties({ data })

      yield timeout(15 * 1000)
    }
  })
})
