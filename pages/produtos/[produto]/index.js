"use client";

import { useParams } from "next/navigation";
import Head from "next/head";

import Navbar from "@/components/Navbar";
import StaticBanner from "@/components/StaticBanner";
import Footer from "@/components/Footer";
import products from "../products.json";

export default function ProdutoPage() {
  const params = useParams();

  if (!params)
    return (
      <>
        <Head>
          <title>Carregando - Mensageira Frutas</title>
        </Head>
        <Navbar />
        <div className="flex justify-center items-center h-dvh">
          <span className="text-4xl">Carregando...</span>
        </div>
        <Footer />
      </>
    );

  const product = products.find((p) => p.slug === params.produto);

  if (!product)
    return (
      <>
        <Head>
          <title>Produto não encontrado - Mensageira Frutas</title>
        </Head>
        <Navbar />
        <div className="flex justify-center items-center h-dvh">
          <span className="text-4xl">Produto não encontrado</span>
        </div>
        <Footer />
      </>
    );

  return (
    <>
      <Head>
        <title>{product.name} - Mensageira Frutas</title>
      </Head>
      <Navbar />
      <StaticBanner
        src={product.bannerSrc}
        title={product.name}
        subtitle={`Conheça mais sobre nossa ${product.name}`}
      />
      <div className="flex items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-300 py-15 md:py-20 px-7 md:px-20 lg:px-30 xl:px-50">
        <div className="flex flex-col lg:flex-row items-center justify-center rounded-lg shadow-2xl bg-white py-0 lg:py-5 px-7 md:px-10">
          <img className="me-0 lg:me-10" src={product.imgSrc} />
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <div className="flex items-center mb-5">
              <h3 className="text-xl font-bold me-3">Origem:</h3>
              {product.paises.map((pais) => (
                <img
                  key={pais}
                  className="w-5 h-3 sm:w-10 sm:h-auto me-2"
                  src={`/paises/${pais}.png`}
                />
              ))}
            </div>
            <p className="text-neutral-600 mb-6 text-center lg:text-start">
              {product.text}
            </p>
            <a
              target="_blank"
              href={`https://wa.me/5511966433031?text=Olá, vim pelo site! Tenho interesse na ${product.name}`}
              className="text-center text-lg text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg px-4 py-2 mb-10 lg:mb-0"
            >
              Tenho interesse
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
