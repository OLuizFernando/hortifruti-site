import Navbar from "@/components/Navbar";
import StaticBanner from "@/components/StaticBanner";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";

import products from "./products.json";

function Produtos() {
  return (
    <>
      <Navbar />
      <StaticBanner
        title="Produtos"
        subtitle="Veja mais sobre nossas frutas"
        src="/banners/pessegos_e_ameixas_caixa.png"
      />
      <div className="bg-gradient-to-br from-neutral-50 to-neutral-400 flex flex-col justify-center items-center py-20 md:py-25">
        <h2 className="text-4xl md:text-5xl font-bold mb-15 md:mb-20 text-center">
          Catálogo
        </h2>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-10 md:mb-15 px-10 md:px-0 xl:px-7">
          {products.map((product) => (
            <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/5">
              <ProductCard
                key={product.id}
                name={product.name}
                imgSrc={product.imgSrc}
                slug={product.slug}
              />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Produtos;
