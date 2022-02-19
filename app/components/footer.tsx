import { Form, Link, useTransition } from 'remix'
import { FacebookIcon } from '~/components/svg/facebook'
import { InstagramIcon } from '~/components/svg/instagram'
import { cx } from '~/lib/utils'

const navigation = {
  products: [
    { name: 'Kits', href: '/produtos?filter=kit' },
    { name: 'Desodorantes', href: '/produtos?filter=desodorante' },
    { name: 'Hidratantes', href: '/produtos?filter=hidratante' },
    { name: 'Higiene', href: '/produtos?filter=higiene' },
  ],
  support: [
    { name: 'Nossos ingredientes', href: '/sobre-a-vida-natural#ingredientes' },
    { name: 'Dúvidas frequentes', href: '/faq' },
    { name: 'Contato', href: '/entre-em-contato' },
  ],
  company: [
    { name: 'Sobre a VN', href: '/sobre-a-vida-natural' },
    { name: 'Blog', href: '/blog' },
    { name: 'Quem somos?', href: '/sobre-a-vida-natural#quem-somos' },
  ],
  social: [
    {
      name: 'Ir para nosso Facebook',
      href: 'http://facebook.com/vidanatural.eco',
      icon: FacebookIcon,
    },
    {
      name: 'Ir para nosso Instagram',
      href: 'https://instagram.com/vidanatural.eco',
      icon: InstagramIcon,
    },
  ],
}

const Footer = () => {
  let transition = useTransition()
  return (
    <footer className="bg-gray-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="col-span-2 lg:grid lg:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                Produtos
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.products.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-base text-gray-300 hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12 lg:mt-0">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                Suporte
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.support.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-base text-gray-300 hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12 lg:mt-0">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                A Empresa
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-base text-gray-300 hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Quer saber das nossas novidades?
            </h3>
            <p className="mt-4 text-base text-gray-300">
              Assine nossa newsletter.
            </p>
            <Form
              replace
              className={cx(
                'mt-4 sm:flex sm:max-w-md',
                transition.state === 'submitting' &&
                  'pointer-events-none opacity-50',
              )}
            >
              <label htmlFor="email-address" className="sr-only">
                E-mail
              </label>
              <input
                autoComplete="email"
                required
                className="w-full min-w-0 appearance-none rounded-md border border-transparent bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500"
                placeholder="Digite seu e-mail"
              />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:shrink-0">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-secondary-500 px-4 py-2 text-base font-medium text-white hover:bg-secondary-600"
                >
                  Inscrever-se
                </button>
              </div>
            </Form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {navigation.social.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-400 hover:text-gray-300"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </Link>
            ))}
          </div>
          <p className="mt-8 text-base text-gray-400 md:order-1 md:mt-0">
            Vida Natural® {new Date().getFullYear()}{' '}
            <span aria-hidden="true">&middot;</span> Imbituba / SC
            <br />
            <a
              href="mailto:falecom@vidanatural.eco.br"
              className="text-gray-300 hover:text-white"
            >
              falecom@vidanatural.eco.br
            </a>{' '}
            <span aria-hidden="true">&middot;</span> CNPJ: 24.288.982/0001-27
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
