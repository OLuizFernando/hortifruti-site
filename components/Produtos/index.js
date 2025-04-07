function NossasFrutas() {
  const productsInfo = [
    {
      imgSrc: "frutas/maca_red.png",
      name: "Maçã Red",
      buttonHref: "/produtos/maca_red",
    },
    {
      imgSrc: "frutas/pera_williams.png",
      name: "Pera Williams",
      buttonHref: "/produtos/pera_williams",
    },
    {
      imgSrc: "frutas/maca_fuji.png",
      name: "Maçã Fuji",
      buttonHref: "/produtos/maca_fuji",
    },
    {
      imgSrc: "frutas/maca_gala.png",
      name: "Maçã Gala",
      buttonHref: "/produtos/maca_gala",
    },
  ];

  return (
    <>
      <div className="bg-gradient-to-tl from-red-500 to-red-900 flex flex-col justify-center items-center py-20 md:py-25">
        <h2 className="text-4xl text-white md:text-5xl font-bold mb-15 md:mb-20 text-center">
          Principais Frutas
        </h2>
        <div className="flex flex-col md:flex-row mb-10 md:mb-20 px-7 md:px-3 lg:px-10 xl:px-20">
          {productsInfo.map((product) => (
            <div className="flex flex-col items-center justify-center pb-10 mb-10 mx-auto md:mb-auto md:mx-3 lg:mx-5 px-5 bg-white rounded-md shadow-2xl">
              <img src={product.imgSrc} className="mb-5 rounded-md" />
              <h3 className="text-2xl mb-7 text-center">{product.name}</h3>
              <a
                href={product.buttonHref}
                className=" text-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg px-4 py-2"
              >
                Saiba mais
              </a>
            </div>
          ))}
        </div>
        <a
          href="/produtos"
          className="text-red-700 bg-white hover:bg-red-100 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg px-6 py-4 text-xl shadow-2xl"
        >
          Ver mais produtos
        </a>
      </div>
    </>
  );
}

export default NossasFrutas;
