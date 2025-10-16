function SobreNos() {
  return (
    <>
      <div
        id="sobre"
        className="bg-gradient-to-bl from-neutral-100 to-neutral-300 flex flex-col justify-center items-center py-20 md:py-25 px-7 md:px-30"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-15 md:mb-20 text-center">
          Nossa História
        </h2>
        <p className="text-center mb-10">
          A Marfruti nasceu em 2025, no coração do CEASA de Porto Alegre, com o
          propósito de levar frutas de qualidade superior e atendimento
          personalizado a todos os clientes.
          <br className="mb-5" />
          Fundada por sócios apaixonados e experientes no setor
          hortifrutigranjeiro, a empresa rapidamente se destacou pela atuação
          direta na importação de frutas, garantindo produtos sempre frescos,
          selecionados e com procedência confiável.
          <br className="mb-5" />
          Desde o início, a Marfruti construiu parcerias sólidas com grandes
          marcas do mercado, como a Cachorrita, referência em maçãs e peras, e a
          Sanjo, reconhecida pela excelência na produção de maçãs. Essas
          alianças reforçam o compromisso da empresa com a qualidade, a
          credibilidade e a satisfação dos clientes.
        </p>
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="flex flex-col items-center lg:items-end w-auto lg:w-md me-auto md:me-10 mb-15 lg:mb-0">
            <h4 className="text-3xl md:text-4xl font-bold mb-5">
              Isso é Marfruti
            </h4>
            <p className="mb-5 text-center lg:text-end">
              Mais do que frutas, a Marfruti entrega confiança, cuidado e
              atenção em cada detalhe, do campo até o ponto de venda.
            </p>
            <a
              href="sobre-nos"
              className="text-center text-white bg-[#26530e] hover:bg-[#183409] focus:ring-4 focus:outline-none focus:ring-[#26530e]/40 rounded-lg shadow-2xl text-lg font-medium px-4 py-2 transition-all duration-200 ease-in-out"
            >
              Saiba mais
            </a>
          </div>
          <img
            className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[400px] rounded-md shadow-2xl ring-5 ring-[#26530e]"
            src="outros/fachada.jpg"
          />
        </div>
      </div>
    </>
  );
}

export default SobreNos;
