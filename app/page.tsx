import Image from "next/image";
import HeroSection from "./_components/HeroSection";
import Pricing from "./_components/pricing";
import NavBar from "@/components/navbar";
import FirstCarWash from "./_components/FirstCarWash";

export default function Home() {
  return (
    <div>
      {/* <NavBar/> */}
      <HeroSection/>
      <Pricing/>
      <FirstCarWash/>
    </div>
  );
}
