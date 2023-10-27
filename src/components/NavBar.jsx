"use client";

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
    <div className="flex justify-between items-center w-full text-white fixed px-4 h-20">
      <div>
        <h1 className="text-4xl font-signature">Alfred</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200"
          >
            {link}
          </li>
        ))}
      </ul>

      <MobileLinks />
    </div>
  );
};

export default NavBar;
