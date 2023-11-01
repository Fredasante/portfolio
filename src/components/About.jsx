const About = () => {
  return (
    <section name="About" className="w-full pt-5 lg:pt-20 bg-[#191d2b]">
      <div className="max-w-screen-lg py-4 px-6 mx-auto text-justify flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-white">
            About
          </p>
        </div>
        <p className="text-base 2xl:text-xl text-[#dbe1e8]">
          My Journey: I began my journey in web development because I was drawn
          to the endless possibilities of creating visually appealing and
          interactive websites. Over the years, I've honed my skills by keeping
          up with the ever-evolving world of front-end technologies. From HTML
          and CSS to JavaScript, and the latest front-end frameworks like React
          and Next js, I strive to stay at the forefront of web development
          trends.
        </p>
        <br />
        <p className="text-base 2xl:text-xl text-[#dbe1e8]">
          What I Do: My primary focus is on turning design concepts into
          interactive, responsive, and pixel-perfect websites. I believe in the
          power of design and user experience to shape a brand's identity and
          engage its audience. By meticulously translating the visions of
          designers into functioning websites, I ensure that the user's journey
          is seamless, visually appealing, and engaging.
        </p>
        <br />
        <p className="text-base 2xl:text-xl text-[#dbe1e8]">
          Let's Connect: I'm always excited to explore new projects or share
          ideas. Whether you're a fellow developer, a designer, or a business
          owner looking to enhance your online presence, feel free to reach out.
          Let's collaborate and create something exceptional together!
        </p>
      </div>
    </section>
  );
};

export default About;
