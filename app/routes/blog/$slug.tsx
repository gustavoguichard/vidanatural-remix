import { Link, useOutletContext, useParams, MetaFunction } from 'remix'
import ArrowNarrowLeftIcon from '@heroicons/react/solid/ArrowNarrowLeftIcon'
import type { BlogPost } from '~/lib/api/types'
import { cx, toDate } from '~/lib/utils'
import { RichText } from 'prismic-reactjs'
import Badge from '~/components/badge'
import { calculatePostReadTime, getExcerpt } from '~/lib/domain'

function getPost(posts: BlogPost[], slug?: string): BlogPost | null {
  return posts.find((post) => post.uid === slug) ?? null
}

export let meta: MetaFunction = ({ parentsData, params }) => {
  let post = getPost(parentsData['routes/blog'].posts, params.slug)
  return post
    ? { title: post.data.title, description: getExcerpt(post.data.body) }
    : { title: 'Blog', description: 'Não encontrado' }
}

type OutletContext = { posts: BlogPost[] }
export default function Index() {
  let { posts } = useOutletContext<OutletContext>()
  let { slug } = useParams()
  let post = getPost(posts, slug)
  if (!post) return null
  let featuredUrl = post.data.header_image?.url
  return (
    <>
      {!featuredUrl && <BackButton />}
      <div
        className={cx(
          'relative px-6 sm:px-12 lg:px-16',
          featuredUrl
            ? 'bg-gray-800 py-32 text-white sm:py-40'
            : 'bg-white pt-12 text-gray-900 sm:pt-16',
        )}
      >
        {featuredUrl && (
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={featuredUrl}
              alt="Banner"
              className="h-full w-full object-cover object-center"
            />
          </div>
        )}
        {featuredUrl && (
          <div aria-hidden="true" className="absolute inset-0 bg-gray-900/60" />
        )}
        <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
          <h1 className="text-center text-3xl font-extrabold text-current sm:text-4xl sm:tracking-tight lg:text-5xl">
            {post.data.title}
          </h1>
          <p
            className={cx(
              'mx-auto mt-5 max-w-xl text-lg first-letter:uppercase',
              featuredUrl ? 'text-white' : 'text-gray-500',
            )}
          >
            {toDate(post.first_publication_date ?? '')}
            <span aria-hidden="true"> &middot; </span>
            {calculatePostReadTime(post.data.body)} de leitura
          </p>
          <div className="mt-6 flex items-center">
            <div className="shrink-0">
              <span className="sr-only">{post.data.author?.data?.name}</span>
              {post.data.author?.data?.picture?.url && (
                <img
                  className={cx(
                    'h-10 w-10 rounded-full',
                    featuredUrl && 'ring ring-white',
                  )}
                  src={post.data.author.data.picture?.url}
                  alt={post.data.author.data.picture?.alt}
                />
              )}
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-current">
                {post.data.author?.data?.name}
              </p>
              {post.data.author?.data?.instagram && (
                <p
                  className={cx(
                    'flex space-x-1 text-sm',
                    featuredUrl ? 'text-white' : 'text-gray-500',
                  )}
                >
                  <a
                    target="_blank"
                    className={cx(
                      featuredUrl
                        ? 'text-white hover:underline'
                        : 'text-secondary-500 hover:text-secondary-600',
                    )}
                    href={post.data.author?.data?.instagram.url}
                    rel="noreferrer"
                  >
                    @
                    {post.data.author?.data?.instagram.url?.replace(
                      /.+\.com\/([A-Za-z0-9]+)\/?$/,
                      '$1',
                    )}
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      {featuredUrl && <BackButton />}
      <div
        className={cx(
          'relative overflow-hidden bg-white px-4 py-16 sm:px-6 lg:px-8',
          featuredUrl && 'py-8',
        )}
      >
        <div className="prose-secondary prose prose-lg mx-auto mt-6 text-gray-500">
          <RichText render={post.data.body} />
          <div className="flex flex-wrap gap-1">
            {post.tags
              .filter((t) => t !== 'institucional')
              .map((tag, idx) => (
                <Badge href={`/blog?busca=${tag}`} key={`tag-${idx}`}>
                  {tag}
                </Badge>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}

function BackButton() {
  return (
    <nav className="mx-auto flex w-full max-w-7xl items-center justify-between bg-white px-4 sm:px-6 lg:px-8">
      <div className="-mt-px flex w-0 flex-1">
        <Link
          to="/blog"
          className="inline-flex min-w-max items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-gray-500 hover:text-gray-700"
        >
          <ArrowNarrowLeftIcon
            className="mr-3 h-4 w-4 text-gray-400"
            aria-hidden="true"
          />
          Voltar ao Blog
        </Link>
      </div>
    </nav>
  )
}
