"use client";

import { Link } from "react-scroll";
import MobileLinks from "./MobileLinks";

const NavBar = () => {
  const links = [
    { id: 1, link: "Home" },
    { id: 2, link: "About" },
    { id: 3, link: "Portfolio" },
    { id: 4, link: "Experience" },
    { id: 5, link: "Contact" },
  ];

  return (
    <nav className="w-full fixed bg-[#1F2937] border-b border-gray-700">
      <div className="flex justify-between items-center max-w-[1500px] mx-auto w-full px-4 h-20 text-white">
        <a href="/">
          <h1 className="text-4xl font-signature">Alfred</h1>
        </a>

        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer font-medium hover:scale-105 duration-200"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <MobileLinks />
      </div>
    </nav>
  );
};

export default NavBar;
