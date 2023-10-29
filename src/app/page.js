import About from "@/components/About";
import Homepage from "@/components/Homepage";
import NavBar from "@/components/NavBar";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <Homepage />
      <About />
      <SocialLinks />
    </div>
  );
}
