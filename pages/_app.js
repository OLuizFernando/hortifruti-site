import Head from "next/head";
import "@/styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mensageira Frutas</title>
        <link rel="icon" href="icones/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
