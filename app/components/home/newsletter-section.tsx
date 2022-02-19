import { Form, Link, useTransition } from 'remix'
import { cx } from '~/lib/utils'

function NewsletterSection() {
  let transition = useTransition()
  return (
    <div className="bg-primary-800">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:flex lg:items-center lg:py-16 lg:px-8">
        <div className="lg:w-0 lg:flex-1">
          <h2
            className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
            id="newsletter-headline"
          >
            Receba novidades
          </h2>
          <p className="mt-3 max-w-3xl text-lg leading-6 text-gray-300">
            Assine nossa newsletter e receba nossas promoções em primeira mão.
            Não se preocupe, nós não enviamos muitos e-mails.
          </p>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8">
          <Form replace className="sm:flex">
            <label htmlFor="email-address" className="sr-only">
              E-mail
            </label>
            <input
              autoComplete="email"
              required
              className="w-full rounded-md border border-transparent px-5 py-3 placeholder-gray-500 sm:max-w-xs"
              placeholder="Digite seu e-mail"
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:shrink-0">
              <button
                type="submit"
                disabled={transition.state === 'submitting'}
                className={cx(
                  'flex w-full items-center justify-center rounded-md border border-transparent bg-primary-500 px-5 py-3 text-base font-medium text-white hover:bg-primary-600',
                  transition.state === 'submitting' &&
                    'pointer-events-none opacity-50',
                )}
              >
                Inscrever-se
              </button>
            </div>
          </Form>
          <p className="mt-3 text-sm text-gray-300">
            Nós respeitamos sua privacidade. Leia nossos{' '}
            <Link
              to="/termos-e-condicoes"
              className="font-medium text-white underline"
            >
              termos de privacidade.
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default NewsletterSection
