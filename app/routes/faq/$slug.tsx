import { RichText } from 'prismic-reactjs'
import { useOutletContext, MetaFunction, useParams } from 'remix'
import DocumentDetails from '~/components/document-details'
import FaqItems from '~/components/faq-items'
import type { FaqItem } from '~/lib/api/types'

function getItem(items: FaqItem[], slug?: string): FaqItem | null {
  return items.find((item) => item.uid === slug) ?? null
}

export let meta: MetaFunction = ({ parentsData, params }) => {
  let item = getItem(parentsData['routes/faq'].items, params.slug as string)
  return item ? { title: item.data.title } : { title: 'Faq' }
}

type OutletContext = { items: FaqItem[] }
export default function Index() {
  let { items } = useOutletContext<OutletContext>()
  let { slug } = useParams()
  let item = getItem(items, slug)
  if (!item) return null

  return (
    <div className="m-auto flex w-full max-w-screen-xl flex-col items-center border-b-8 border-white px-10 pt-32 pb-8">
      <div className="flex w-full flex-col lg:w-8/12">
        <h2 className="text-4xl font-bold tracking-tight">{item.data.title}</h2>
        <div className="my-4">
          <DocumentDetails
            date={item.last_publication_date}
            post={item.data.answer}
          />
        </div>
        <div className="prose-secondary prose text-gray-500">
          <RichText render={item.data.answer} />
        </div>
      </div>
    </div>
  )
}
