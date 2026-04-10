import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhenAmericaCelebrates from "./components/WhenAmericaCelebrates";
import TheStory from "./components/TheStory";
import GrownRight from "./components/GrownRight";
import RetailPartner from "./components/RetailPartner";
import Products from "./components/Products";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhenAmericaCelebrates />
      <TheStory />
      <GrownRight />
      <RetailPartner />
      <Products />
      <CTA />
      <Footer />
    </main>
  );
}
