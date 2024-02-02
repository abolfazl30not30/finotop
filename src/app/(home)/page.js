import Header from "@/components/home/Header";
import MarketSummary from "@/components/home/MarketSummary";
import Navbar from "@/components/home/Navbar";
import Products from "@/components/home/Products";
import Tools from "@/components/home/Tools";

import Notes from "@/components/home/Notes";
import Contact from "@/components/home/Contact";
import Properties from "@/components/home/Properties";
import PriceOfProduct from "@/components/home/PriceOfProduct";

export default function Home() {

  return (
    <>
      <Header />
      <MarketSummary />
      <Products />
      <Tools />

      <Notes />
      <Contact />
      <Properties />
      <PriceOfProduct />
    </>
  );
}
