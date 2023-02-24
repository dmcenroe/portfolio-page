export default function Contact() {
  return (
    <section className=" h-screen">
      <div className="py-8 lg:py-12 px-12 mx-auto max-w-screen-md mt-24 bg-slate-800 rounded-md">
        <h2 className="mb-4 text-6xl tracking-tight font-extrabold text-center text-white ">
          Contact Me
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-white  sm:text-xl">
          Want to reach out? Shoot me an email and I'll get back to you soon!
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-light text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="text-sm rounded-lg block w-full p-2.5 bg-white border-white placeholder-gray-400 text-slate-800 focus:outline-teal-600 shadow-sm-light"
              placeholder=""
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-light text-white"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="text-sm rounded-lg block w-full p-2.5 bg-white border-white placeholder-gray-400 text-slate-800 focus:outline-teal-600 shadow-sm-light"
              placeholder=""
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-light text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="6"
              className="text-sm rounded-lg block w-full p-2.5 bg-white border-white placeholder-gray-400 text-slate-800 focus:outline-teal-600 shadow-sm-light"
              placeholder=""
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-teal-600 sm:w-fit hover:bg-teal-500 focus:ring-4 focus:outline-none focus:ring-teal-300"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
