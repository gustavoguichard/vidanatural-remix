import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from 'remix'
import type { MetaFunction } from 'remix'
import styles from './tailwind.css'
import Footer from './components/footer'
import Navigation from './components/navigation'
import Certifications from './components/certifications'

export let links = () => [
  { rel: 'stylesheet', href: styles },
  { rel: 'shortcut icon', href: '/favicon.png', type: 'image/x-icon' },
]

export const meta: MetaFunction = () => ({
  title: 'Vida Natural | Cosmética Consciente',
  description:
    'Produzimos desodorantes, shampoos, óleos hidratantes e pó dental elaborados em um processo de produção totalmente artesanal, 100% feitos à mão e em pequenos lotes, o que garante a entrega de cosméticos únicos, frescos, eficientes e em total equilíbrio com o seu corpo e o meio ambiente.',
})

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  )
}

function Document({
  children,
  title,
}: {
  children: React.ReactNode
  title?: string
}) {
  return (
    <html lang="en" className="font-sans [overflow-anchor:auto]">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        {title && <title>{title}</title>}
        <Links />
      </head>
      <body className="max-w-screen flex min-h-screen flex-col bg-gray-50 [overflow-anchor:auto]">
        <div className="bg-primary-600">
          <div className="mx-auto flex h-10 max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm font-medium text-white">
              Natural de verdade <span aria-hidden="true">&middot;</span> Alta
              Eficiência <span aria-hidden="true">&middot;</span> Vegano
            </p>
          </div>
        </div>
        <Navigation />
        <div className="flex grow flex-col">{children}</div>
        <Certifications />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

export let CatchBoundary = () => {
  let caught = useCatch()
  return (
    <Document title={`${caught.status} | Vida Natural`}>
      <div className="mx-auto my-4 w-full max-w-screen-sm rounded-lg bg-white p-4 text-center shadow-sm">
        <h1 className="text-4xl font-bold">{caught.status}</h1>
        <p className="text-lg">Por favor, tente novamente</p>
      </div>
    </Document>
  )
}
