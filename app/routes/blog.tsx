import { LoaderFunction, Outlet, useLoaderData } from 'remix'
import * as api from '~/lib/api'
import type { BlogPost } from '~/lib/api/types'

type LoaderData = { posts: BlogPost[] }
export let loader: LoaderFunction = async () => {
  const posts = await api.cms.getByTypeAndTags('blog_post', {
    orderings: '[my.blog_post.date desc]',
    fetch: ['title', 'body', 'author', 'header_image'].map(
      (tag) => `blog_post.${tag}.`,
    ),
    fetchLinks: ['team_member.name', 'team_member.picture'],
  })
  return { posts } as LoaderData
}

export default function BlogLayout() {
  let { posts } = useLoaderData<LoaderData>()
  return <Outlet context={{ posts }} />
}
