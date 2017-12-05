import { helper } from '@ember/component/helper'
import moment from 'moment'

export function fromNow([at]) {
  let diff = moment.duration(at.diff(moment()))

  if (diff.minutes() < 1) {
    return 'Jetzt'
  }

  if (diff.minutes() < 10) {
    return `${diff.minutes()} min`
  }

  return at.format('HH:mm')
}

export default helper(fromNow)
