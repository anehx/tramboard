import Controller from '@ember/controller'
import { task, timeout } from 'ember-concurrency'
import fetch from 'fetch'
import { storageFor } from 'ember-local-storage'

const LIMIT = 6

export default Controller.extend({
  storage: storageFor('tramboard'),

  reset: task(function*() {
    yield this.get('storage').clear()
  }),

  setLocation: task(function*(location) {
    yield this.set('storage.location', location)
  }).drop(),

  searchLocation: task(function*(term) {
    yield timeout(200)

    let res = yield fetch(
      `https://transport.opendata.ch/v1/locations?query=${term}`
    )

    let { stations } = yield res.json()

    return stations
  }).restartable(),

  _fetchData: task(function*() {
    for (;;) {
      try {
        let res = yield fetch(
          `https://transport.opendata.ch/v1/stationboard?id=${this.get(
            'storage.location.id'
          )}&limit=${LIMIT}`
        )

        let { stationboard } = yield res.json()

        let data = stationboard.map(({ number, stop, to }) => {
          return {
            number,
            to,
            at: stop.departure
          }
        })

        this.set('storage.data', data)
      } catch (e) {
        this.set('storage.data', [])
      }

      yield timeout(5 * 1000)
    }
  }).drop()
})
