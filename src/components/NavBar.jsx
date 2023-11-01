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
    <div className="flex justify-between items-center w-full bg-[#191d2b] fixed px-4 h-20 text-white">
      <div>
        <a href="/">
          <h1 className="text-4xl font-signature">Alfred</h1>
        </a>
      </div>

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
  );
};

export default NavBar;
