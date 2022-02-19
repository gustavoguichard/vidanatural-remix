import { LoaderFunction, MetaFunction, useLoaderData } from 'remix'
import { RichText, RichTextBlock } from 'prismic-reactjs'
import * as api from '~/lib/api'
import SocialLinks from '~/components/social-links'
import { TeamMember } from '~/lib/api/types'

export let meta: MetaFunction = () => ({
  title: 'Sobre a Vida Natural',
  description:
    'Uma empresa  feita por amigos, unidos pelo propósito da transparência, que se importam com aquilo que colocamos todos os dias no nosso maior orgão de absorção - a pele.',
})

type LoaderData = {
  team: TeamMember[]
  page: {
    data: {
      banner_description: RichTextBlock[]
      content: RichTextBlock[]
      ingredients_description: RichTextBlock[]
      ingredients_title: string
      ingredients: Array<{
        inci_title: string
        title: string
        description: RichTextBlock[]
        image: { url: string }
        link?: { url: string }
      }>
    }
  }
}
export let loader: LoaderFunction = async () => {
  const team = await api.cms.getByTypeAndTags('team_member', {
    orderings: '[document.first_publication_date]',
    fetch: [
      'name',
      'picture',
      'role',
      'bio',
      'facebook',
      'linkedin',
      'instagram',
      'github',
    ].map((field) => `team_member.${field}`),
  })

  const page = await api.cms.getPage('about_page')
  return { team, page } as LoaderData
}

export default function AboutPage() {
  let { team, page } = useLoaderData<LoaderData>()
  return (
    <>
      <div className="relative bg-white">
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover lg:absolute lg:h-full"
              src="/images/equipe-costas.jpg"
              alt="Equipe da Vida Natural"
            />
          </div>
        </div>
        <div className="relative px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div className="lg:col-start-2 lg:pl-8">
            <div className="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg">
              <h2 className="font-semibold uppercase leading-6 tracking-wide text-secondary-600">
                Sobre a VN
              </h2>
              <h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                Cosmética Consciente
              </h3>
              <div className="mt-8 text-lg text-gray-500">
                <RichText render={page.data.banner_description} />
              </div>
              <div className="prose-secondary prose mt-5 text-gray-500">
                <RichText render={page.data.content} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary-300" id="quem-somos">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 className="text-3xl font-extrabold tracking-tight text-primary-900 sm:text-4xl">
                Quem somos
              </h2>
              <p className="text-xl text-primary-900/80">
                Antes de tudo amigos, família e boas relações. E a missão de
                fazer o nosso melhor!
              </p>
            </div>
            <ul
              role="list"
              className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8"
            >
              {team.map((person) => (
                <li
                  key={person.data.name}
                  className="rounded-lg bg-primary-800 px-6 py-10 xl:px-10"
                >
                  <div>
                    {person.data.picture && (
                      <img
                        className="mx-auto mb-6 h-40 w-40 rounded-full xl:mb-10 xl:h-56 xl:w-56"
                        src={person.data.picture?.url}
                        alt=""
                      />
                    )}
                    <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3 className="text-white">{person.data.name}</h3>
                        <p className="text-primary-400">{person.data.role}</p>
                      </div>
                      <SocialLinks
                        linkedin={person.data.linkedin}
                        instagram={person.data.instagram}
                        facebook={person.data.facebook}
                        github={person.data.github}
                      />
                    </div>
                    <div className="mt-4 text-lg text-white">
                      <RichText render={person.data.bio} />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div id="ingredientes" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="mt-1 text-2xl font-extrabold text-gray-900 sm:text-3xl sm:tracking-tight lg:text-4xl">
              {page.data.ingredients_title}
            </h3>
            <div className="mx-auto mt-5 max-w-xl text-lg text-gray-500">
              <RichText render={page.data.ingredients_description} />
            </div>
          </div>
        </div>
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-10 pb-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {page.data.ingredients.map((ing) => (
              <div key={ing.inci_title}>
                <img
                  className="-mb-16 max-w-full"
                  height={290}
                  width={300}
                  alt={ing.title}
                  src={ing.image.url}
                />
                <div className="relative z-10 rounded bg-white/10 py-1 backdrop-blur">
                  <h4 className="text-lg font-semibold tracking-tight">
                    {ing.title}
                  </h4>
                  <p className="text-xs">
                    {ing.link?.url ? (
                      <a
                        href={ing.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary-600 hover:underline"
                        title="Obter mais informações"
                      >
                        {ing.inci_title}
                      </a>
                    ) : (
                      ing.inci_title
                    )}
                  </p>
                </div>
                <div className="prose-secondary prose text-gray-500">
                  <RichText render={ing.description} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
