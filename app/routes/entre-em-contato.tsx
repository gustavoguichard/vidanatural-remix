import { ActionFunction, Form, MetaFunction, redirect } from 'remix'
import MailIcon from '@heroicons/react/outline/MailIcon'
import { WhatsappIcon } from '~/components/svg/whatsapp'
import { cx } from '~/lib/utils'

export let meta: MetaFunction = () => ({
  title: 'Entre em contato',
})

export let action: ActionFunction = async () => {
  return redirect('/')
}

export default function ContactPage() {
  return (
    <>
      <div className="relative bg-white">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
        </div>
        <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
          <div className="bg-gray-50 px-4 py-16 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
            <div className="mx-auto max-w-lg">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                Entre em contato
              </h2>
              <p className="mt-3 text-lg leading-6 text-gray-500">
                Estamos abertos a ouvir qualquer sugestão, reclamação ou um
                oizinho. Nós retornaremos o contato assim que possível.
              </p>
              <dl className="mt-8 text-base text-gray-500">
                <div>
                  <dt className="sr-only">Endereço</dt>
                  <dd>
                    <p>Antolino E. Martins, 106</p>
                    <p>Vila Esperança, Imbituba / SC</p>
                    <p>88780-000</p>
                  </dd>
                </div>
                <div className="mt-6">
                  <dt className="sr-only">Telefone</dt>
                  <dd className="flex">
                    <a
                      className="shrink-0 text-emerald-400 hover:text-emerald-500"
                      href="https://wa.me/5548991039557"
                      title="Enviar mensagem de whatsapp"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <WhatsappIcon className="h-5 w-5 " />
                    </a>
                    <span className="ml-3">+55 (48) 99103-0557</span>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">E-mail</dt>
                  <dd className="flex">
                    <MailIcon
                      className="h-6 w-6 shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">falecom@vidanatural.eco.br</span>
                  </dd>
                </div>
                <div className="mt-6 text-sm">
                  <dt className="sr-only">Informações da Empresa</dt>
                  <dd>
                    <p>Vida Natural Cosmética Consciente LTDA</p>
                    <p>CNPJ: 24.288.982/0001-27</p>
                    <p>Responsável Técnico CRQ 1330293</p>
                    <p>Res ANVISA Nº 343/05</p>
                    <p>AFE Nº 4.00.537-0</p>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="bg-white px-4 py-16 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
            <div className="mx-auto max-w-lg lg:max-w-none">
              <Form
                method="post"
                className={cx(
                  'grid grid-cols-1 gap-y-6',
                  // sending && 'opacity-50',
                )}
                data-webform="vidanatural-nova-mensagem-pelo-site-da-vn"
              >
                <input className="hidden" tabIndex={-1} autoComplete="false" />
                <div>
                  <label htmlFor="full-name" className="sr-only">
                    Nome
                  </label>
                  <input
                    id="full-name"
                    autoComplete="name"
                    className="block w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    E-mail
                  </label>
                  <input
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm"
                    placeholder="Seu e-mail"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Telefone / Whatsapp
                  </label>
                  <input
                    id="phone"
                    autoComplete="tel"
                    className="block w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm"
                    placeholder="Seu telefone / whatsapp"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm"
                    placeholder="Sua mensagem"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-primary-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary-600"
                  >
                    Enviar
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary-300">
        <div className="mx-auto max-w-md px-4 py-16 text-center sm:max-w-2xl sm:py-24 sm:px-6 lg:px-8 lg:py-32">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            <span className="block text-primary-900/80">
              Quer revender nossos produtos?
            </span>
            <span className="block text-primary-900">Fale conosco.</span>
          </h2>
          <a
            href="https://wa.me/5548991039557"
            title="Enviar mensagem de whatsapp"
            rel="noopener noreferrer"
            target="_blank"
            className="text-grape-600 hover:bg-grape-50 mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium shadow-md sm:w-auto"
          >
            <span>Entrar em contato</span>
            <WhatsappIcon
              className="ml-3 h-5 w-5 shrink-0 text-emerald-400"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </>
  )
}
