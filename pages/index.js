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
      <div className="w-full flex justify-center bg-neutral-300">
        <div className="border w-50"></div>
      </div>
      <Produtos />
      <Footer />
    </>
  );
}

export default Home;
