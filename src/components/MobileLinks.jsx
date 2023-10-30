"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const MobileLinks = () => {
  const [isopen, setIsOpen] = useState(false);

  const links = [
    { id: 1, link: "Home" },
    { id: 2, link: "About" },
    { id: 3, link: "Portfolio" },
    { id: 4, link: "Experience" },
    { id: 5, link: "Contact" },
  ];

  return (
    <>
      <div className="md:hidden cursor-pointer pr-4 z-10">
        {!isopen ? (
          <FaBars onClick={() => setIsOpen(true)} size={30} />
        ) : (
          <FaTimes onClick={() => setIsOpen(false)} size={30} />
        )}
      </div>

      {isopen && (
        <ul className="flex flex-col absolute justify-center items-center top-0 left-0 w-full h-screen bg-[#191d2b] text-[#dbe1e8]">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 py-6 text-4xl cursor-pointer font-medium"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MobileLinks;
