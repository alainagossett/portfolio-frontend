function Contact() {
    return (
        <section id="about">
    <div className="container mx-auto flex px-10 py-40 md:flex-row flex-col items-center">
        <div
            className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                Find Me Here:
            </h1>
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <p className="mb-8 leading-relaxed">
            <a href="mailto:alaina.gossett@gmail.com">
            <img className="contactImg" src="https://i.imgur.com/QmFKysc.png" alt="email" />
            </a>
            </p>
            <br className="hidden lg:inline-block" />
            <p className="mb-8 leading-relaxed">
            <a href="https://github.com/alainagossett" target="_blank" rel="noopener noreferrer">
            <img className="contactImg" src="https://i.imgur.com/eH7Qm2V.png" alt="gitHub" />
            </a>
            </p>
            <br className="hidden lg:inline-block" />
            <p className="mb-8 leading-relaxed">
            <a href="https://www.linkedin.com/in/alainagossett/" target="_blank" rel="noopener noreferrer">
            <img className="contactImg" src="https://i.imgur.com/xjk9ljI.png" alt="LinkedIn" />
            </a>
            </p>
            </div>
        </div>
        <form
          netlify
          name="contact"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Contact Me
          </h2>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </form>
    </div>
</section>
    )
}

export default Contact