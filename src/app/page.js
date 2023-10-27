import Homepage from "@/components/Homepage";
import NavBar from "@/components/NavBar";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  return (
    <div className="text-white">
      <NavBar />
      <Homepage />
      <SocialLinks />
    </div>
  );
}
