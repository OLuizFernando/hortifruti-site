function Footer() {
  return (
    <>
      <footer id="contato" className="bg-white">
        <div className="flex items-center mx-auto w-full max-w-screen-xl px-4 py-5">
          <span className="me-auto md:me-10 text-2xl text-green-700 font-bold">
            ENTRE EM CONTATO CONOSCO!
          </span>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <a
              target="_blank"
              href="https://wa.me/5511966433031"
              className="bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-lg px-4 py-2 mb-3 md:mb-auto me-auto md:me-7"
            >
              <img
                width="25"
                src="https://img.icons8.com/?id=85088&format=png&color=ffffff"
              />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/mensageirafrutas/"
              className="bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-lg px-4 py-2 mb-3 md:mb-auto me-auto md:me-7"
            >
              <img
                width="25"
                src="https://img.icons8.com/?id=48841&format=png&color=ffffff"
              />
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/mensageira.frutas"
              className=" bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-lg px-4 py-2"
            >
              <img
                width="25"
                src="https://img.icons8.com/?id=pZ9xZYiinken&format=png&color=ffffff"
              />
            </a>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.9388970939353!2d-46.737906800000005!3d-23.5347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef90766236993%3A0x5736bd85f4bd23bc!2sMensageira%20Comercio%20e%20Importa%C3%A7%C3%A3o%20de%20Frutas%20Ltda!5e0!3m2!1spt-BR!2sbr!4v1744001958083!5m2!1spt-BR!2sbr"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-40 md:h-60"
        ></iframe>
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
              © 2025 Mensageira Comércio e Importação de Frutas LTDA.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
