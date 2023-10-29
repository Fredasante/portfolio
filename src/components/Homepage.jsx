import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import About from "./About";

const Homepage = () => {
  return (
    <section name="homepage" className="pt-[100px] lg:pt-0 lg:h-screen w-full">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
        <div className="flex flex-col justify-center h-full gap-y-5">
          <h2 className="text-4xl md:text-7xl font-bold">
            Front End Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-screen-lg text-justify text-xl">
            Hello! I'm Alfred Asante Apenteng, a passionate front-end developer
            with a creative flair and a love for crafting beautiful and
            user-friendly web experiences. I'm thrilled to be a part of the
            digital world, where I get to blend my technical skills with my
            passion for design to bring ideas to life on the web.
          </p>
          <div>
            <button className="group w-fit px-6 py-3 my-2 cursor-pointer flex items-center rounded-md bg-[#133080] text-white">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <BsArrowRight className="ml-1" />
              </span>
            </button>
          </div>

          {/* <About /> */}
        </div>
      </div>
    </section>
  );
};

export default Homepage;
