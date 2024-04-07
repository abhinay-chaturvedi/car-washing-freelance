import Image from "next/image";
import HeroSection from "./_components/HeroSection";
import Pricing from "./_components/pricing";
import NavBar from "@/components/navbar";

export default function Home() {
  return (
    <div>
      {/* <NavBar/> */}
      <HeroSection/>
      <Pricing/>
    </div>
  );
}
