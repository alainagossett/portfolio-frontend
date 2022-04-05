function About() {
return (
<section id="about">
    <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img src="https://i.imgur.com/TpIpPKu.jpg" alt="Alaina Gossett" className="object-cover object-center rounded" />
            </div>
        <div
            className="lg:w-1/2 md:w-1/3 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h1 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                About Me
            </h1>
            <p className="mb-8 leading-relaxed">
            A personable and results-driven software engineer, I find joy in figuring out how things work and creatively solving problems for my clients.
            </p>
            <p className="mb-8 leading-relaxed">
            I have over 4 years experience in the tech industry, specifically in the SaaS space. My experience in client-facing and inter-departmental roles paired with my two degrees from CU Boulder have given me the tools to translate client needs effectively to more technical language.
            </p>
            <p className="mb-8 leading-relaxed">
            When I'm not coding, I enjoy hiking, swimming, and going to music festivals. I'm a Coloradan through and through and love bringing my determined spirit to all projects/challenges I'm given.
            </p>
            <div className="flex justify-left">
            <a href="https://docs.google.com/document/d/1ZWtIWojzA43KWNkCdSKBgalFSjyw-c__wZMLqznZ8-0/edit?usp=sharing" className="inline-flex text-white bg-fuchsia-500 border-0 py-2 px-6 focus:outline-none hover:bg-fuchsia-600 rounded text-lg" download>
            Download my Resume
            </a>
            </div>
        </div>
    </div>
</section>
)
}

export default About