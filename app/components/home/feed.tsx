import { Link } from 'remix'
import { getExcerpt, timeSince, calculatePostReadTime } from '~/lib/domain'
import type { BlogPost } from '~/lib/api/types'
import Badge from '~/components/badge'

type Props = { posts: BlogPost[] }
function Feed({ posts }: Props) {
  return (
    <div className="relative bg-gray-50 px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Do nosso Blog
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Leia mais sobre como ter uma vida + natural.{' '}
            <Link to="/blog" className="group font-medium text-secondary-500">
              Ver blog
              <span
                className="inline-block transition group-hover:translate-x-1"
                aria-hidden="true"
              >
                {' '}
                &rarr;
              </span>
            </Link>
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.uid}
              className="flex flex-col overflow-hidden rounded-lg border last:hidden sm:last:flex lg:last:hidden"
            >
              {post.data.header_image?.thumb?.url && (
                <div className="shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src={post.data.header_image?.thumb?.url}
                    alt={post.data.title}
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <div className="flex flex-wrap gap-1 text-sm font-medium text-secondary-600">
                    {post.tags.map((tag) => (
                      <Badge key={`${post.id}-${tag}`} href={`/tag/${tag}`}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Link to={`/blog/${post.uid}`} className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.data.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500 line-clamp-5">
                      {getExcerpt(post.data.body)}
                    </p>
                  </Link>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="shrink-0">
                    <span className="sr-only">
                      {post.data.author?.data?.name}
                    </span>
                    {post.data.author?.data.picture?.url && (
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
                      {post.data.date && (
                        <time dateTime={post.data.date.toString()}>
                          há {timeSince(new Date(post.data.date))}
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
        </div>
      </div>
    </div>
  )
}

export default Feed
