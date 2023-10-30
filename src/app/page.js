import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import HomeDisplay from "@/components/HomeDisplay";
import NavBar from "@/components/NavBar";
import Portfolio from "@/components/Portfolio";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <HomeDisplay />
      <About />
      <Portfolio />
      <Experience />
      <Contact />

      {/* <SocialLinks /> */}
    </div>
  );
}
