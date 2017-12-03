import { helper } from '@ember/component/helper'
import moment from 'moment'

export function fromNow([at]) {
  let diff = moment.duration(at.diff(moment()))

  if (diff.asMinutes() < 0) {
    return '🚋'
  }

  if (diff.asMinutes() < 10) {
    return `${diff.minutes()} min`
  }

  return at.format('HH:mm')
}

export default helper(fromNow)
