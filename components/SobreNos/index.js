function SobreNos() {
  return (
    <>
      <div
        id="sobre"
        className="bg-gradient-to-bl from-neutral-100 to-neutral-300 flex flex-col justify-center items-center py-20 md:py-25 px-7 md:px-30"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-15 md:mb-20 text-center">
          Sobre Nós
        </h2>
        <p className="text-center mb-10">
          Lorem ipsum dolor sit amet. Quo labore nulla sed voluptatum autem eum
          esse nihil et voluptas numquam ut accusantium rerum ea optio aliquid.
          Non recusandae quia cum nesciunt earum in accusamus quam qui nobis
          quasi aut mollitia quasi. Ea voluptas distinctio et enim nisi est
          totam molestias 33 dolores pariatur.
        </p>
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="flex flex-col items-center lg:items-end w-auto lg:w-md me-auto md:me-10 mb-15 lg:mb-0">
            <h4 className="text-3xl md:text-4xl font-bold mb-5">Sucesso</h4>
            <p className="mb-5 text-center lg:text-end">
              Lorem ipsum dolor sit amet. rem veniam cupiditate est dignissimos
              enim et delectus libero aut incidunt repudiandae et quis
              consequuntur qui enim galisum.
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
            src="outros/rodrigo.jpg"
          />
        </div>
      </div>
    </>
  );
}

export default SobreNos;
