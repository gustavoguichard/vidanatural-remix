import { LoaderFunction, Outlet, useLoaderData } from 'remix'
import * as api from '~/lib/api'
import type { FaqItem } from '~/lib/api/types'

type LoaderData = { items: FaqItem[] }
export let loader: LoaderFunction = async () => {
  const items = await api.cms.getByTypeAndTags('faq_item', {
    orderings: '[my.faq_item.title]',
    fetch: ['title', 'answer'].map((field) => `faq_item.${field}`),
  })
  return { items } as LoaderData
}

export default function BlogLayout() {
  let { items } = useLoaderData<LoaderData>()
  return <Outlet context={{ items }} />
}
