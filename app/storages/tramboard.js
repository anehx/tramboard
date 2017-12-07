import StorageObject from 'ember-local-storage/local/object'

const Storage = StorageObject.extend()

Storage.reopenClass({
  initialState() {
    return {
      location: null,
      data: []
    }
  }
})

export default Storage
