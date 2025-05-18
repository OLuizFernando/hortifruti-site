import { useState, useEffect } from "react";

const carouselData = [
  {
    src: "/banners/peras_amarelas.png",
    title: "A Qualidade que Você Merece",
    subtitle: "Frutas frescas e selecionadas para você",
  },
  {
    src: "/banners/macas.png",
    title: "Importar Qualidade é o que Importa",
    subtitle:
      "Frutas selecionadas de vários países, com alto padrão de qualidade",
  },
  {
    src: "/banners/pessegos_e_ameixas_caixa.png",
    title: "Sabor e Saúde",
    subtitle: "Frutas selecionadas com carinho para você",
  },
  {
    src: "/banners/pessegos.png",
    title: "O Melhor da Natureza",
    subtitle: "Sabor, frescor e qualidade em cada escolha",
  },
  {
    src: "/banners/pessegos_e_ameixas_prato.png",
    title: "Tradição e Confiança no Que Fazemos",
    subtitle: "Garantindo sabor e qualidade em cada produto",
  },
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + carouselData.length) % carouselData.length,
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval); // Limpa o intervalo ao desmontar
  }, [currentIndex]);

  return (
    <div className="relative w-full">
      <div className="relative h-96 md:h-[700px] overflow-hidden">
        {carouselData.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={item.src}
              className="block w-full h-full object-cover"
              alt={`Slide ${index + 1}`}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50">
              <p className="text-white text-2xl md:text-4xl font-bold text-center px-4 mb-5">
                {item.title}
              </p>
              <p className="text-white text-xl md:text-2xl text-center px-4">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3">
        {carouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full bg-white ${
              index === currentIndex ? "opacity-100" : "opacity-50"
            }`}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-0 left-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-7 h-7 md:w-10 md:h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg
            className="w-3 h-3 md:w-4 md:h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </span>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-0 right-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-7 h-7 md:w-10 md:h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg
            className="w-3 h-3 md:w-4 md:h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </span>
      </button>
    </div>
  );
}

export default Carousel;
