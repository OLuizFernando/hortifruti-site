function Footer() {
  return (
    <>
      <footer className="bg-white">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                <img
                  src="/logos/minimal_logo.png"
                  className="h-10 sm:h-15 me-1 sm:me-3"
                  alt="Logo Mensageira"
                />
                <span className="self-center text-xl sm:text-3xl mt-2 antecf whitespace-nowrap font-bold text-green-700">
                  MENSAGEIRA
                </span>
              </a>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  Informações
                </h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-4">Ceagesp</li>
                  <li>Pavilhão HFE Box 111</li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  Contato
                </h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-4">
                    <a href="https://wa.me/5511966433031" target="_blank">
                      Telefone:{" "}
                      <span className="hover:underline">(11) 9 6643-3031</span>
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://www.facebook.com/mensageira.frutas"
                      target="_blank"
                    >
                      Facebook:{" "}
                      <span className="hover:underline">Mensageira Frutas</span>
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://www.instagram.com/mensageirafrutas/"
                      target="_blank"
                    >
                      Instagram:{" "}
                      <span className="hover:underline">@mensageirafrutas</span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:mensageirasp@gmail.com" target="_blank">
                      Email:{" "}
                      <span className="hover:underline">
                        mensageirasp@gmail.com
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center">
              © 2025 Mensageira Comércio E Importação de Frutas LTDA.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
