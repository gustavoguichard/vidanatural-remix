const Certifications = () => (
  <div className="bg-white">
    <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-0.5 md:grid-cols-3">
        <div className="col-span-1 flex justify-center bg-gray-50 px-6 py-6">
          <img
            width={65}
            height={65}
            title="Certificados pela ANVISA"
            className="max-h-12"
            src="/svgs/anvisa.svg"
            alt="Anvisa"
          />
        </div>
        <div className="col-span-1 flex justify-center bg-gray-50 px-6 py-6">
          <img
            width={65}
            height={65}
            title="Investimos na compensação ambiental das embalagens que produzimos"
            className="max-h-12"
            src="/svgs/eureciclo.svg"
            alt="Eu Reciclo"
          />
        </div>
        <div className="col-span-1 flex justify-center bg-gray-50 px-6 py-6">
          <img
            width={65}
            height={65}
            title="Livre de parabenos e outros absurdos sintéticos"
            className="max-h-12"
            src="/svgs/parabenos.svg"
            alt="Sem parabenos"
          />
        </div>
        <div className="col-span-1 flex justify-center bg-gray-50 px-6 py-6">
          <img
            width={65}
            height={65}
            title="Produtos artesanais"
            className="max-h-12"
            src="/svgs/artesanal.svg"
            alt="Artesanal"
          />
        </div>
        <div className="col-span-1 flex justify-center bg-gray-50 px-6 py-6">
          <img
            width={65}
            height={65}
            title="Livres de crueldade animal"
            className="max-h-12"
            src="/svgs/cruelty-free.svg"
            alt="Livre de crueldade animal"
          />
        </div>
        <div className="col-span-1 flex justify-center bg-gray-50 px-6 py-6">
          <img
            width={65}
            height={65}
            title="Sem fragrâncias sintéticas"
            className="max-h-12"
            src="/svgs/fragrancias.svg"
            alt="Sem Fragrâncias sintéticas"
          />
        </div>
      </div>
    </div>
  </div>
)

export default Certifications
