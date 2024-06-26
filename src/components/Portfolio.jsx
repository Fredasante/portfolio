import Link from "next/link";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: "/portfolio/nokofio.PNG",
      demo: "https://nokofio.me",
    },
    {
      id: 2,
      src: "/portfolio/swap.PNG",
      demo: "https://simpleswap.io",
    },
  ];

  return (
    <section name="Portfolio" className="w-full pt-10 bg-[#191d2b] ">
      <div className="max-w-screen-lg py-4 px-6 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-white">
            Portfolio
          </p>
          <p className="py-6 text-base 2xl:text-xl text-[#dbe1e8]">
            Check out some of my programming builds using varying technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="portfolio"
                className="rounded-md duration-500 hover:scale-105 object-contain"
              />

              <div className="flex items-center justify-center text-[#dbe1e8]">
                <Link href={demo} target="_blank">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
