import Header from "@/components/home/Header";
import MarketSummary from "@/components/home/MarketSummary";
import Navbar from "@/components/home/Navbar";
import Products from "@/components/home/Products";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <MarketSummary />
      <Products />
    </>
  );
}
