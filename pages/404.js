import Head from "next/head";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function Custom404() {
  return (
    <>
      <Head>
        <title>Página não encontrada - Mensageira Frutas</title>
      </Head>
      <Navbar />
      <div className="flex justify-center items-center h-dvh bg-gradient-to-br from-neutral-100 to-neutral-300">
        <span className="text-4xl">404 - Página não encontrada</span>
      </div>
      <Footer />
    </>
  );
}

export default Custom404;
