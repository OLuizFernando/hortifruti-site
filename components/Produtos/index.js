import ProductCard from "../ProductCard";

function Produtos() {
  const productsInfo = [
    {
      id: 2,
      imgSrc: "frutas/maca_fuji.png",
      name: "Maçã Fuji",
      slug: "maca-fuji",
    },
    {
      id: 3,
      imgSrc: "frutas/maca_gala.png",
      name: "Maçã Gala",
      slug: "maca-gala",
    },
    {
      id: 0,
      imgSrc: "frutas/maca_red.png",
      name: "Maçã Red",
      slug: "maca-red",
    },
    {
      id: 1,
      imgSrc: "frutas/pera_williams.png",
      name: "Pera Williams",
      slug: "pera-williams",
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
            <ProductCard
              key={product.id}
              name={product.name}
              imgSrc={product.imgSrc}
              slug={product.slug}
            />
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

export default Produtos;
