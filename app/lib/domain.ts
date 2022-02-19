import map from 'lodash/map'
import { RichTextBlock } from 'prismic-reactjs'
import { getReadTime } from '~/lib/utils'

const timeSince = (date: Date) => {
  const now = new Date()
  const then = new Date(date)
  const seconds = Math.floor((now.getTime() - then.getTime()) / 1000)
  const minute = 60
  const hour = 60 * minute
  const day = 24 * hour
  const week = 7 * day
  const month = 30 * day
  const year = 365 * day
  const timeSpans = [year, month, week, day, hour, minute]
  const labels = [
    ['ano'],
    ['mês', 'meses'],
    ['semana'],
    ['dia'],
    ['hora'],
    ['minuto'],
  ]

  const [interval, idx] = timeSpans.reduce(
    (result, curr, i) => {
      if (result[1] >= 0) return result
      const total = (seconds + 1) / curr
      return total > 1 ? [total, i] : result
    },
    [0, -1],
  )
  if (idx < 0) {
    return `${seconds} segundo${seconds > 1 ? 's' : ''}`
  }

  const [label, plural] = labels[idx]
  const total = Math.floor(interval)
  return `${total} ${total > 1 ? plural || label + 's' : label}`
}

const calculatePostReadTime = (body: RichTextBlock[]) => {
  const paragraphs = body.filter((b) => b.type === 'paragraph')
  const text = map(paragraphs, 'text').join(' ')
  return `${getReadTime(text)} min`
}

const getExcerpt = (body: RichTextBlock[]) => {
  return body.find((b) => b.type === 'paragraph' && b.text?.length)?.text || ''
}

const isEmptyBody = (body?: RichTextBlock[]) => {
  return !body || getExcerpt(body) === ''
}

export { timeSince, calculatePostReadTime, getExcerpt, isEmptyBody }
