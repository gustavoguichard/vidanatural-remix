import Prismic from 'prismic-javascript'
import { QueryOptions, DocumentType } from './types'

export const apiEndpoint = process.env.PRISMIC_API ?? ''
export const accessToken = process.env.PRISMIC_TOKEN ?? ''
const client = Prismic.client(apiEndpoint, { accessToken })

export const query = async (predicates: string | string[], options: any) => {
  const response = await client.query(predicates, options)
  return response
}

export const getBySlug = async (type: string, uid: string, options?: any) => {
  const response = await client.getByUID(type, uid, { ...options })
  return response
}

export const getPage = async (uid: string) => {
  const response = await client.getSingle(uid, {})
  return response
}

export const getPaginated = async (
  type: DocumentType,
  options?: QueryOptions,
  tags?: string[],
) => {
  const response = await query(
    tags
      ? [
          Prismic.Predicates.at('document.type', type),
          Prismic.Predicates.any('document.tags', tags),
        ]
      : Prismic.Predicates.at('document.type', type),
    { pageSize: 1000, ...options },
  )
  return response
}

export const getExact = async (
  type: DocumentType,
  field: string,
  value: string,
  options: QueryOptions = {},
) => {
  const fieldString = `my.${type}.${field}`
  const response = await query(
    [
      Prismic.Predicates.at('document.type', type),
      Prismic.Predicates.at(fieldString, String(value)),
    ],
    options,
  )
  return response ? response.results[0] : { data: null }
}

export const getByTypeAndTags = async (
  type: DocumentType,
  options?: QueryOptions,
  tags?: string[],
) => {
  const response = await getPaginated(type, options, tags)
  return response?.results ?? []
}

export const allByTags = async (tags: string[], options?: QueryOptions) => {
  const response = await query(Prismic.Predicates.any('document.tags', tags), {
    pageSize: 1000,
    ...options,
  })
  return response?.results ?? []
}
