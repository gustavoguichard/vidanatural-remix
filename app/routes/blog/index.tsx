import * as React from 'react'
import { Link, useLocation, useOutletContext } from 'remix'
import type { BlogPost } from '~/lib/api/types'
import { sanitize, toDate } from '~/lib/utils'
import Badge from '~/components/badge'
import SearchIcon from '@heroicons/react/solid/SearchIcon'
import { calculatePostReadTime, getExcerpt } from '~/lib/domain'

export let meta = () => ({
  title: 'Blog',
  description:
    'Leia aqui artigos sobre cosmética natural, produtos orgânicos, veganos, artesanais e DIY (faça você mesmo).',
})

type OutletContext = { posts: BlogPost[] }
export default function Index() {
  let { posts } = useOutletContext<OutletContext>()
  let location = useLocation()
  let qs = new URLSearchParams(location.search)
  let qsSearch = qs.get('busca') ?? ''
  let [search, setSearch] = React.useState(qsSearch)

  let filteredPosts = posts.filter(
    (post) =>
      sanitize(post.data.title).includes(sanitize(search)) ||
      post.tags.map(sanitize).includes(sanitize(search)),
  )
  let newPosts = filteredPosts.slice(0, 5)
  let oldPosts = filteredPosts.slice(5)

  React.useEffect(() => {
    if (qsSearch) setSearch(qsSearch)
  }, [qsSearch])

  return (
    <>
      <div className="flex w-full flex-col items-center border-b border-gray-200 bg-white">
        <div className="w-full max-w-7xl px-4 pt-12 pb-5 sm:flex sm:items-end sm:justify-between sm:px-6 lg:px-8">
          <div>
            <h3 className="text-lg font-bold leading-6 text-gray-900">Blog</h3>
            <p className="mt-2 max-w-4xl text-sm text-gray-500">
              Cosmética natural, produtos orgânicos, veganos, artesanais e dicas
              de estilo de <strong>Vida Natural</strong>.
            </p>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-4">
            <label htmlFor="mobile-search-candidate" className="sr-only">
              Buscar
            </label>
            <label htmlFor="desktop-search-candidate" className="sr-only">
              Buscar
            </label>
            <div className="flex rounded-md shadow-sm">
              <div className="relative grow focus-within:z-10">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <SearchIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="search"
                  name="desktop-search-candidate"
                  id="desktop-search-candidate"
                  className="w-full rounded border border-gray-300 py-2 pl-10 sm:text-sm"
                  placeholder="Buscar posts"
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex w-full min-w-min max-w-4xl flex-col items-center gap-3 px-4 py-12 sm:px-6 lg:px-8">
        {!newPosts.length && (
          <div className="block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center">
            <span className="mt-2 block text-sm font-medium text-gray-900">
              Nenhum resultado encontrado
            </span>
          </div>
        )}
        {newPosts.map((post) => (
          <div
            key={post.uid}
            className="flex w-full flex-col overflow-hidden rounded-lg border sm:flex-row"
          >
            {post.data.header_image?.thumb?.url && (
              <div className="shrink-0">
                <Link to={`/blog/${post.uid}`}>
                  <img
                    className="h-56 w-full object-cover sm:h-full sm:w-56"
                    src={post.data.header_image.thumb.url}
                    alt={post.data.title}
                  />
                </Link>
              </div>
            )}
            <div className="flex flex-1 flex-col justify-between bg-white p-6">
              <div className="flex-1">
                <div className="flex flex-wrap gap-1 text-sm font-medium text-secondary-600">
                  {post.tags.map((tag) => (
                    <Badge
                      key={`${post.id}-${tag}`}
                      href={`/blog?busca=${tag}`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Link to={`/blog/${post.uid}`} className="mt-2 block">
                  <p className="text-xl font-semibold text-gray-900">
                    {post.data.title}
                  </p>
                  <p className="mt-3 text-base text-gray-500 line-clamp-3">
                    {getExcerpt(post.data.body)}
                  </p>
                </Link>
              </div>
              <div className="mt-6 flex items-center">
                <div className="shrink-0">
                  <span className="sr-only">
                    {post.data.author?.data?.name}
                  </span>
                  {post.data.author?.data?.picture?.url && (
                    <img
                      className="h-10 w-10 rounded-full"
                      src={post.data.author.data.picture.url}
                      alt={post.data.author.data.picture.alt}
                    />
                  )}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    {post.data.author?.data?.name}
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    {post.first_publication_date && (
                      <time dateTime={post.first_publication_date.toString()}>
                        {toDate(post.first_publication_date, true)}
                      </time>
                    )}
                    <span aria-hidden="true">&middot;</span>
                    <span>
                      {calculatePostReadTime(post.data.body)} de leitura
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {Boolean(oldPosts.length) && (
          <div className="mt-20 w-full border-b border-gray-200 pb-5">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Postagens anteriores
            </h3>
          </div>
        )}
        {oldPosts.map((post) => (
          <div
            key={post.uid}
            className="flex w-full flex-1 flex-col justify-between border-b p-6 last:border-b-0"
          >
            <div className="flex-1">
              <Link
                to={`/blog/${post.uid}`}
                className="mt-2 block text-xl font-semibold text-gray-900 hover:underline"
              >
                {post.data.title}
              </Link>
            </div>
            <div className="mt-3 flex space-x-1 text-sm text-gray-500">
              {post.first_publication_date && (
                <time dateTime={post.first_publication_date.toString()}>
                  {toDate(post.first_publication_date, true)}
                </time>
              )}
              <span aria-hidden="true">&middot;</span>
              <span>{calculatePostReadTime(post.data.body)} de leitura</span>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
