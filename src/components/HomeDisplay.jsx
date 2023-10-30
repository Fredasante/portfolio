import React from "react";
import { FaDownload } from "react-icons/fa";

const HomeDisplay = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#191d2b] pt-[100px] text-white w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-4">
          <div className="image w-[68%] h-[90%] lg:ml-16 ml-0 transition-all duration-300">
            <img
              src="/alfred.JPG"
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center px-4">
          <h1 className="text-[30px] md:text-[42px] 2xl:text-7xl font-bold">
            Hi, I'm{" "}
            <span className="text-[#58ccea]">Alfred Asante Apenteng.</span> A
            Front end developer.
          </h1>
          <p className="my-6 xl:my-12 text-justify text-base 2xl:text-xl">
            I'm a passionate developer with a creative flair and a love for
            crafting beautiful and user-friendly web experiences. I'm thrilled
            to be a part of the digital world, where I get to blend my technical
            skills with my passion for design to bring ideas to life on the web.
          </p>
          <div className="">
            <a
              href=""
              className="main-btn flex items-center justify-center border border-[#58ccea] w-fit font-bold px-4 py-2 rounded-full gap-x-6 hover:bg-[#58ccea] duration-500"
            >
              <span className="">Download CV</span>
              <span className="bg-[#58ccea] p-2 rounded-full">
                <FaDownload />
              </span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomeDisplay;
