import { RichTextBlock } from 'prismic-reactjs'

type DocumentType =
  | 'blog_post'
  | 'team_member'
  | 'faq_item'
  | 'testimonial'
  | 'home_banner'
  | 'product'

type QueryOptions = {
  after?: string | string[]
  fetch?: string | string[]
  fetchLinks?: string | string[]
  ref?: string
  orderings?: string
  lang?: string
  pageSize?: number
  page?: number
}

type FaqItem = {
  id: string
  uid: string
  tags: string[]
  first_publication_date?: string
  last_publication_date?: string
  data: {
    title: string
    answer: RichTextBlock[]
  }
}

type HomeBanner = {
  id: string
  uid: string
  tags: string[]
  first_publication_date?: string
  data: {
    title: string
    subtitle?: string
    image: { url: string }
    order?: number
    link: { url: string }
    button_text?: string
    vertical?: 'center' | 'top' | 'bottom'
    horizontal?: 'left' | 'center' | 'right'
    is_dark: boolean
  }
}

type BlogPost = {
  id: string
  uid?: string
  tags: string[]
  first_publication_date: string | null
  data: {
    title: string
    body: RichTextBlock[]
    header_image?: {
      url: string
      alt?: string
      thumb?: {
        url: string
      }
    }
    author: TeamMember
  }
}

type TeamMember = {
  id: string
  uid: string
  tags: string[]
  thumbUrl?: string
  imageAlt?: string
  data: {
    name: string
    role: string
    bio: RichTextBlock[]
    picture?: {
      url: string
      alt: string
    }
    instagram: { url?: string }
    facebook: { url?: string }
    linkedin: { url?: string }
    github: { url?: string }
  }
}

type Testimonial = {
  id: string
  uid: string
  tags: string[]
  data: {
    name: string
    role?: string
    location?: string
    content: RichTextBlock[]
    short_content?: RichTextBlock[]
    picture: {
      [s: string]: {
        url: string
      }
    }
  }
}

export type {
  DocumentType,
  QueryOptions,
  FaqItem,
  Testimonial,
  TeamMember,
  BlogPost,
  HomeBanner,
}
