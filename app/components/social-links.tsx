import * as React from 'react'
import { LinkedinIcon } from '~/components/svg/linkedin'
import { InstagramIcon } from '~/components/svg/instagram'
import { FacebookIcon } from '~/components/svg/facebook'
import { GithubIcon } from '~/components/svg/github'

type LinkObj = { url?: string }
type Props = {
  facebook: LinkObj
  instagram: LinkObj
  linkedin: LinkObj
  github: LinkObj
}
const SocialLinks = ({ facebook, instagram, linkedin, github }: Props) => (
  <ul role="list" className="flex space-x-5 text-primary-500">
    {linkedin?.url && (
      <li>
        <a
          href={linkedin.url}
          title="Ir para perfil do LinkedIn"
          className="text-current hover:text-gray-300"
        >
          <span className="sr-only">LinkedIn</span>
          <LinkedinIcon
            className="h-5 w-5"
            aria-hidden="true"
            fill="currentColor"
          />
        </a>
      </li>
    )}
    {instagram?.url && (
      <li>
        <a
          href={instagram.url}
          title="Seguir nosso Instagram"
          className="text-current hover:text-gray-300"
        >
          <span className="sr-only">Instagram</span>
          <InstagramIcon
            className="h-5 w-5"
            aria-hidden="true"
            fill="currentColor"
          />
        </a>
      </li>
    )}
    {facebook?.url && (
      <li>
        <a
          href={facebook.url}
          title="Ver no Facebook"
          className="text-current hover:text-gray-300"
        >
          <span className="sr-only">Facebook</span>
          <FacebookIcon
            className="h-5 w-5"
            aria-hidden="true"
            fill="currentColor"
          />
        </a>
      </li>
    )}
    {github?.url && (
      <li>
        <a
          href={github.url}
          title="Abrir GitHub"
          className="text-current hover:text-gray-300"
        >
          <span className="sr-only">GitHub</span>
          <GithubIcon
            className="h-5 w-5"
            aria-hidden="true"
            fill="currentColor"
          />
        </a>
      </li>
    )}
  </ul>
)

export default React.memo(SocialLinks)
