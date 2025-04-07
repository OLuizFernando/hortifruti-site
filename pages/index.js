import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import BemVindos from "@/components/BemVindos";
import Produtos from "@/components/Produtos";

function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <BemVindos />
      <Produtos />
      <Footer />
    </>
  );
}

export default Home;
