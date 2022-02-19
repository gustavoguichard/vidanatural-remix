import words from 'lodash/words'
import compose from 'lodash/fp/compose'
import reject from 'lodash/fp/reject'
import isNil from 'lodash/fp/isNil'
import isBoolean from 'lodash/fp/isBoolean'
import flatten from 'lodash/fp/flatten'
import join from 'lodash/fp/join'
import trim from 'lodash/fp/trim'
import toLower from 'lodash/fp/toLower'
import deburr from 'lodash/fp/trim'

const toDate = (d: string, short?: boolean) => {
  const config = {
    weekday: short ? undefined : 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  } as const
  return new Date(d).toLocaleString('pt-br', config)
}

const isClient = typeof window === 'object'

const getReadTime = (text: string) => {
  const AVG_WORDS_PER_MINUTE = 265
  const totalWords = words(text)
  const minutes = totalWords.length / AVG_WORDS_PER_MINUTE
  return Math.ceil(minutes)
}

const cx = (...args: unknown[]) =>
  compose(trim, join(' '), reject(isBoolean), reject(isNil), flatten)(args)

const sanitize = compose(deburr, toLower)

export { cx, getReadTime, isClient, toDate, sanitize }
