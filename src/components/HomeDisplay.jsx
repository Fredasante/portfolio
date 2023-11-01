import Link from "next/link";
import React from "react";
import { FaDownload } from "react-icons/fa";

const HomeDisplay = () => {
  return (
    <main
      name="Home"
      className="min-h-screen overflow-hidden bg-[#191d2b] pt-[100px] text-white w-full"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
        <div className="flex items-center justify-center px-4">
          <div className="image w-[68%] h-[90%] lg:ml-16 ml-0 transition-all duration-300">
            <img
              src="/alfred.JPG"
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center px-6">
          <h1 className="text-[30px] md:text-[42px] 2xl:text-7xl font-bold">
            Hi, I&apos;m &nbsp;
            <span className="text-[#58ccea]">Alfred Asante Apenteng.</span> A
            Front end developer.
          </h1>
          <p className="my-6 xl:my-12 text-justify text-base 2xl:text-xl">
            I&apos;m passionate about crafting immersive digital experiences
            through web development. As a front-end developer, I specialize in
            creating user-friendly, visually engaging, and highly functional
            websites that leave a lasting impression.
          </p>
          <div className="">
            <Link
              href="/Alfred-Asante-Apenteng-resume.pdf"
              download={true}
              target="_blank"
              className="flex items-center justify-center border border-[#58ccea] w-fit font-bold px-4 py-2 rounded-full gap-x-6 hover:bg-[#58ccea] duration-500"
            >
              <span className="">Download CV</span>
              <span className="bg-[#58ccea] p-2 rounded-full">
                <FaDownload />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomeDisplay;
