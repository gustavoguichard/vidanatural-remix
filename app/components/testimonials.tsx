import { RichText } from 'prismic-reactjs'
import { isEmptyBody } from '~/lib/domain'

import SloganSvg from '~/components/svg/slogan'
import type { Testimonial } from '~/lib/api/types'

type Props = { items: Testimonial[] }
const Testimonials = ({ items }: Props) => {
  const data = items?.[0]?.data
  if (!data) return null

  return (
    <section className="overflow-hidden bg-white py-12 md:py-20 lg:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <SloganSvg className="mx-auto h-12" />
          <blockquote className="mt-10">
            <div className="mx-auto max-w-3xl text-center text-2xl font-medium leading-9 text-gray-900">
              <RichText
                render={
                  isEmptyBody(data.short_content)
                    ? data.content
                    : data.short_content
                }
              />
            </div>
            <footer className="mt-8">
              <div className="md:flex md:items-center md:justify-center">
                <div className="md:shrink-0">
                  <img
                    className="mx-auto h-10 w-10 rounded-full"
                    src={data.picture['square'].url}
                    alt=""
                  />
                </div>
                <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                  <div className="text-base font-medium text-gray-900">
                    {data.name}
                  </div>

                  <svg
                    className="mx-1 hidden h-5 w-5 text-secondary-600 md:block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg>

                  <div className="text-base font-medium text-gray-500">
                    {data.role}
                    {data.role && data.location && (
                      <span aria-hidden="true"> &middot; </span>
                    )}
                    {data.location}
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
