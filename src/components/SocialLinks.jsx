import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/alfred-apenteng-8374771a2/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Fredasante?tab=repositories",
      style: "rounded-tr-md",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:alfredapenteng6996@gmail.com",
      style: "rounded-tr-md",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/Alfred-Asante-Apenteng-resume.pdf",
      style: "rounded-tr-md",
      download: true,
    },
  ];

  return (
    <section className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-2 hover:rounded-md hover:ml-[-4px] duration-300 bg-gray-500 ml-[-100px]" +
              " " +
              style
            }
          >
            <Link
              href={href}
              target="_blank"
              className="flex justify-between items-center w-full"
              download={download}
            >
              <>{child}</>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SocialLinks;
