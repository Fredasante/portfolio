const About = () => {
  return (
    <section name="about" className="w-full pt-5 lg:pt-20 bg-[#191d2b]">
      <div className="max-w-screen-lg p-4 mx-auto text-justify flex flex-col justify-center w-full h-full">
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
          Let's Connect: I'm excited to connect with fellow developers,
          designers, and anyone who shares a passion for the web. If you're
          looking to collaborate on a project, discuss the latest web trends, or
          just chat about all things front-end, feel free to reach out. Let's
          create amazing web experiences together!
        </p>
      </div>
    </section>
  );
};

export default About;
