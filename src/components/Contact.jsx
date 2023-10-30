import React from "react";

const Contact = () => {
  return (
    <section name="Contact" className="bg-[#191d2b] w-full p-4">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-white">
            Contact
          </p>
          <p className="text-base 2xl:text-xl text-[#dbe1e8] py-6 text-justify">
            Interested in working together? Fill out the form below.
          </p>
        </div>

        <div className="flex items-center justify-center">
          <form
            action="https://getform.io/f/b1390185-9b07-4574-9f86-6e97fc611f43"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="p-2 bg-transparent border-2 rounded-md text-[#dbe1e8] focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter Your Email"
              className="p-2 my-4 bg-transparent border-2 rounded-md text-[#dbe1e8] focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter Your Message"
              id=""
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-[#dbe1e8] focus:outline-none"
            />
            <button
              href=""
              className="my-4 text-white border border-[#58ccea] w-fit font-bold px-6 py-2 rounded-md hover:bg-[#58ccea] duration-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
