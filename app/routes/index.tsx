import { LoaderFunction, useLoaderData } from 'remix'
import Feed from '~/components/home/feed'
import Incentives from '~/components/home/incentives'
import IntroVideo from '~/components/home/intro-video'
import NewsletterSection from '~/components/home/newsletter-section'
import Stats from '~/components/home/stats'
import * as api from '~/lib/api'
import pick from 'lodash/fp/pick'
import type { BlogPost, Testimonial } from '~/lib/api/types'
import Testimonials from '~/components/testimonials'

type LoaderData = {
  posts: BlogPost[]
  testimonials: Testimonial[]
}
export let loader: LoaderFunction = async () => {
  const testimonials = await api.cms.getByTypeAndTags('testimonial', {
    fetch: [
      'name',
      'picture',
      'content',
      'short_content',
      'role',
      'location',
    ].map((field) => `testimonial.${field}`),
  })
  const posts = await api.cms.getByTypeAndTags('blog_post', {
    orderings: '[my.blog_post.date desc]',
    fetch: ['title', 'body', 'author', 'header_image', 'date'].map(
      (tag) => `blog_post.${tag}.`,
    ),
    fetchLinks: ['team_member.name', 'team_member.picture'],
    pageSize: 4,
  })
  return {
    posts: posts.map(
      pick([
        'data.title',
        'data.body',
        'tags',
        'id',
        'uid',
        'data.author.data.name',
        'data.author.data.picture',
        'data.header_image',
        'first_publication_date',
      ]),
    ) as BlogPost[],
    testimonials: testimonials as Testimonial[],
  } as LoaderData
}

export default function Index() {
  let data = useLoaderData<LoaderData>()
  return (
    <>
      <Feed posts={data.posts} />
      <IntroVideo />
      <Stats />
      <Testimonials items={data.testimonials} />
      <Incentives />
      <NewsletterSection />
    </>
  )
}
