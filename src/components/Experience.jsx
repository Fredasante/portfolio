const Experience = () => {
  const experiences = [
    {
      id: 1,
      src: "/html.png",
      title: "HTML",
    },
    {
      id: 2,
      src: "/css.png",
      title: "CSS",
    },
    {
      id: 3,
      src: "/javascript.png",
      title: "Javascript",
    },
    {
      id: 4,
      src: "/react.png",
      title: "React",
    },
    {
      id: 5,
      src: "/nextjs.png",
      title: "Next Js",
    },
    {
      id: 6,
      src: "/github.png",
      title: "GitHub",
    },
    {
      id: 7,
      src: "/tailwind.png",
      title: "Tailwind",
    },
    {
      id: 8,
      src: "/Typescript.svg.webp",
      title: "Typescript",
    },
    {
      id: 9,
      src: "/SQL.svg",
      title: "MySQL",
    },
    {
      id: 10,
      src: "/php.webp",
      title: "PHP",
    },
  ];

  return (
    <section name="Experience" className="w-full pt-10 bg-[#191d2b]">
      <div className="max-w-screen-lg mx-auto py-4 px-6 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-white">
            Experience
          </p>
          <p className="py-6 text-base 2xl:text-xl text-[#dbe1e8]">
            These are the technologies I&apos;ve worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-8 py-8 text-[#dbe1e8]">
          {experiences.map(({ id, src, title, style }) => (
            <div
              key={id}
              className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg"
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4 text-center">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
