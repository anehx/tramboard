import { helper } from '@ember/component/helper'
import moment from 'moment'

export function fromNow([at]) {
  at = moment(at)

  let diff = moment.duration(at.diff(moment()))

  if (diff.asMinutes() < 1) {
    return 'Jetzt'
  }

  if (diff.asMinutes() < 10) {
    return `${Math.floor(diff.asMinutes())} min`
  }

  return at.format('HH:mm')
}

export default helper(fromNow)
