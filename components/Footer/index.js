function Footer() {
  return (
    <>
      <footer id="contato" className="bg-white">
        <div className="flex items-center mx-auto w-full max-w-screen-xl px-4 py-5">
          <span className="me-auto md:me-10 text-2xl text-[#26530E] font-bold">
            ENTRE EM CONTATO CONOSCO!
          </span>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <a
              target="_blank"
              href="https://wa.me/5511966433031"
              className="bg-[#26530E] hover:bg-[#183409] focus:ring-4 focus:outline-none focus:ring-[#26530E]/40 rounded-lg px-4 py-2 mb-3 md:mb-auto me-auto md:me-7 transition-all duration-200 ease-in-out"
            >
              <img
                width="25"
                src="https://img.icons8.com/?id=85088&format=png&color=ffffff"
              />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/mensageirafrutas/"
              className="bg-[#26530E] hover:bg-[#183409] focus:ring-4 focus:outline-none focus:ring-[#26530E]/40 rounded-lg px-4 py-2 mb-3 md:mb-auto me-auto md:me-7 transition-all duration-200 ease-in-out"
            >
              <img
                width="25"
                src="https://img.icons8.com/?id=48841&format=png&color=ffffff"
              />
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/mensageira.frutas"
              className=" bg-[#26530E] hover:bg-[#183409] focus:ring-4 focus:outline-none focus:ring-[#26530E]/40 rounded-lg px-4 py-2 transition-all duration-200 ease-in-out"
            >
              <img
                width="25"
                src="https://img.icons8.com/?id=pZ9xZYiinken&format=png&color=ffffff"
              />
            </a>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1884.430799785293!2d-51.165049917425854!3d-29.977669590664995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951970b39dc5b33f%3A0x9dfb6ba354f3fc5!2sAv.%20Fernando%20Ferrari%2C%201001%20-%20Anchieta%2C%20Porto%20Alegre%20-%20RS%2C%2090200-041!5e0!3m2!1spt-BR!2sbr!4v1747528953599!5m2!1spt-BR!2sbr"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-40 md:h-60"
        ></iframe>
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                <img
                  src="/logos/logo_symbol.png"
                  className="h-10 sm:h-15 me-1 sm:me-3"
                  alt="Logo Marfruti"
                />
                <img
                  src="/logos/logo_write.png"
                  className="h-10"
                  alt="Logo Marfruti"
                />
              </a>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  Informações
                </h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-4">CNPJ: 01.425.716/0001-01</li>
                  <li className="mb-4">CEP: 90.200-041</li>
                  <li className="mb-4">Avenida Fernando Ferrari, 1001</li>
                  <li className="mb-4">Pavilhão D3, Box 19 e 20</li>
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
                      href="https://www.facebook.com/marfruti.frutas" // MUDAR LINK E LABEL
                      target="_blank"
                    >
                      Facebook:{" "}
                      <span className="hover:underline">Marfruti</span>
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://www.instagram.com/marfrutifrutas/" // MUDAR LINK E LABEL
                      target="_blank"
                    >
                      Instagram:{" "}
                      <span className="hover:underline">@marfrutifrutas</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:rodrigo.barros@marfruti.com.br"
                      target="_blank"
                    >
                      Email:{" "}
                      <span className="hover:underline">
                        rodrigo.barros@marfruti.com.br
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
              © 2025 MARFRUTI COMÉRCIO DE FRUTAS LTDA.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
