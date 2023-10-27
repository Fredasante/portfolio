import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const Homepage = () => {
  return (
    <section className="h-screen w-full bg-gradient-to-b from-[#121212] via-[#121212] to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl md:text-7xl font-bold">
            Front End Developer
          </h2>
          <p className="text-gray-400 py-4 max-w-screen-md">
            Hello! I'm Alfred Asante Apenteng, a passionate front-end developer
            with a creative flair and a love for crafting beautiful and
            user-friendly web experiences. I'm thrilled to be a part of the
            digital world, where I get to blend my technical skills with my
            passion for design to bring ideas to life on the web.
          </p>
          <div>
            <button className="group w-fit px-6 py-3 my-2 cursor-pointer flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <BsArrowRight className="ml-1" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
