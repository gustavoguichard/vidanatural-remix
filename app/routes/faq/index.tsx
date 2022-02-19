import { useOutletContext } from 'remix'
import FaqItems from '~/components/faq-items'
import type { FaqItem } from '~/lib/api/types'

export let meta = () => ({ title: 'Dúvidas Frequentes' })

type OutletContext = { items: FaqItem[] }
export default function Index() {
  let { items } = useOutletContext<OutletContext>()
  let filtered = items.filter((item) => item.tags.includes('institucional'))
  return (
    <div className="m-auto flex max-w-screen-xl flex-col items-center border-b-8 border-white px-10 pt-32 pb-8">
      <div className="flex w-full flex-col lg:w-8/12">
        <h2 className="text-center text-5xl font-bold tracking-tighter">
          Dúvidas Frequentes
        </h2>
        <div className="py-6">
          <FaqItems items={filtered} />
        </div>
        <img
          className="mx-auto my-6 w-64 max-w-full"
          width={300}
          height={240}
          src="/svgs/faq.svg"
          alt="Dúvidas frequentes"
        />
      </div>
    </div>
  )
}
