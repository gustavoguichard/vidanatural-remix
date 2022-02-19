export default function Stats() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Marca pioneira em desodorantes veganos
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Veja os números de quem já usa nossos produtos desde o início
          </p>
        </div>
      </div>
      <div className="mt-10 bg-white pb-12 sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-50" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <dl className="rounded-lg border bg-white sm:grid sm:grid-cols-3">
                <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                    Produtos vendidos
                  </dt>
                  <dd className="order-1 text-5xl font-extrabold text-secondary-500">
                    +50mil
                  </dd>
                </div>
                <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                    Fundação
                  </dt>
                  <dd className="order-1 text-5xl font-extrabold text-secondary-500">
                    2013
                  </dd>
                </div>
                <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                    Animais prejudicados
                  </dt>
                  <dd className="order-1 text-5xl font-extrabold text-secondary-500">
                    0
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
