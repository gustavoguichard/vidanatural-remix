import { useState } from 'react'
import MenuIcon from '@heroicons/react/outline/MenuIcon'
import SearchIcon from '@heroicons/react/outline/SearchIcon'

import Logo from '~/components/logo'
import { Link } from 'remix'
// import MobileMenu from './mobile-menu'
// import useGlobal from 'lib/use-global'

const categories = [
  {
    name: 'Kits',
    href: '/produtos?filter=kit',
    featured: [],
    collection: [],
    categories: [],
    brands: [],
  },
  {
    name: 'Desodorantes',
    href: '/produtos?filter=desodorante',
    featured: [],
    collection: [],
    categories: [],
    brands: [],
  },
  {
    name: 'Hidratantes',
    href: '/produtos?filter=hidratante',
    featured: [],
    collection: [],
    categories: [],
    brands: [],
  },
  {
    name: 'Higiene',
    href: '/produtos?filter=higiene',
    featured: [],
    collection: [],
    categories: [],
    brands: [],
  },
]

const pages = [
  { name: 'Sobre a VN', href: '/sobre-a-vida-natural' },
  { name: 'Blog', href: '/blog' },
]

const Navigation = () => {
  // const [open, setOpen] = useState(false)
  // const [, actions] = useGlobal()
  return (
    <div className="sticky top-0 z-30 border-b border-gray-200 bg-white">
      {/* <MobileMenu open={open} setOpen={setOpen} /> */}
      <header className="relative">
        <nav aria-label="Top">
          <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-12 items-center justify-between sm:h-16">
                <div className="hidden opacity-70 lg:flex lg:items-center">
                  <Logo />
                </div>
                <div className="hidden h-full lg:flex">
                  <div className="ml-6 flex space-x-4">
                    {[...categories, ...pages].map(({ href, name }) => (
                      <Link
                        key={name}
                        to={href}
                        className="relative z-10 flex items-center border-b-2 border-transparent px-2 text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800"
                      >
                        {name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mobile menu and search (lg-) */}
                <div className="flex flex-1 items-center lg:hidden">
                  <button
                    type="button"
                    className="-ml-2 rounded-md bg-white p-2 text-gray-400"
                    // onClick={() => setOpen(true)}
                  >
                    <span className="sr-only">Abrir menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Search */}
                  <button
                    // onClick={actions.openSearch}
                    className="ml-2 p-2 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Buscar</span>
                    <SearchIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Logo (lg-) */}
                <div className="flex opacity-70 lg:hidden">
                  <Logo />
                </div>

                <div className="flex flex-1 items-center justify-end">
                  <div className="flex items-center lg:ml-8">
                    <div className="flex space-x-8">
                      <div className="hidden lg:flex">
                        <button
                          // onClick={actions.openSearch}
                          className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">Buscar</span>
                          <SearchIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export { categories }
export default Navigation
