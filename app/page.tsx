import Image from "next/image";
import HeroSection from "./_components/HeroSection";
import Pricing from "./_components/pricing";
import NavBar from "@/components/navbar";
import FirstCarWash from "./_components/FirstCarWash";
import CarWashExperience from "./_components/CarWashExperience";
import ClientSays from "./_components/clientsays";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      {/* <NavBar/> */}
      <HeroSection/>
      <Pricing/>
      <FirstCarWash/>
      <ClientSays/>
      <CarWashExperience/>
      <Footer/>
    </div>
  );
}
