import * as React from 'react'
import compose from 'lodash/fp/compose'
import shuffle from 'lodash/fp/shuffle'
import take from 'lodash/fp/take'

type Incentive = {
  name: string
  imageSrc: string
  tags: string[]
  description: string
}
const incentives = [
  {
    name: 'Alta eficiência',
    imageSrc: '/icons/alta-eficiencia.png',
    tags: ['home', 'desodorante'],
    description:
      'Além de seguro e ecológico, te dá o resultado que você precisa.',
  },
  {
    name: 'Fórmulas minimalistas',
    imageSrc: '/icons/formula-minimalista.png',
    tags: ['home', 'desodorante', 'higiene'],
    description:
      'O mínimo para o máximo, porque a simplicidade é encantadora e surpreendente.',
  },
  {
    name: 'Seguro para o Planeta',
    imageSrc: '/icons/seguro-pro-planeta.png',
    tags: ['home', 'desodorante', 'higiene', 'hidratante'],
    description:
      'Porque esse nosso planeta é muito especial e é só um. Merece todo cuidado ❤️',
  },
  {
    name: 'Ingredientes seguros',
    imageSrc: '/icons/ingredientes-seguros.png',
    tags: ['home', 'desodorante', 'higiene', 'hidratante'],
    description:
      'Formulações livres de ingredientes questionáveis e polêmicos. Para nossa saúde, o melhor 😉',
  },
  {
    name: 'Feito à mão',
    imageSrc: '/icons/feito-a-mao.png',
    tags: ['home', 'desodorante', 'higiene', 'hidratante'],
    description:
      'Mãos com intenção, com cuidado, com carinho. Fazendo o que acreditamos.',
  },
] as const

const Incentives = () => {
  const sorted: Incentive[] = compose(take(4), shuffle)(incentives)
  return (
    <div className="bg-gray-50 text-center">
      <div className="mx-auto max-w-7xl py-6 sm:px-2 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {sorted.map((incentive) => (
              <div
                key={incentive.name}
                className="flex flex-col items-center last:hidden sm:last:flex lg:last:hidden"
              >
                <div className="flow-root">
                  <img
                    className="mx-auto h-16 w-16"
                    src={incentive.imageSrc}
                    alt={incentive.name}
                  />
                </div>
                <div className="mt-4 lg:mt-6 lg:ml-0">
                  <h3 className="text-sm font-medium text-gray-900">
                    {incentive.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {incentive.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Incentives)
