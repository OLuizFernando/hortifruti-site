import Head from "next/head";

import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import BemVindos from "@/components/BemVindos";
import Produtos from "@/components/Produtos";
import SobreNos from "@/components/SobreNos";

function Inicio() {
  return (
    <>
      <Head>
        <title>Início - Marfruti</title>
      </Head>
      <Navbar />
      <Carousel />
      <BemVindos />
      <Produtos />
      <SobreNos />
      <Footer />
    </>
  );
}

export default Inicio;
