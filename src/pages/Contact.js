function Contact() {
    return (
        <section id="about">
    <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div
            className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="text-grey sm:text-4xl text-3xl mb-1 font-medium title-font">
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
            <img className="contactImg" src="https://i.imgur.com/kpXSyl1.png" alt="gitHub" />
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
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img src="https://i.imgur.com/TpIpPKu.jpg" alt="Alaina Gossett" className="object-cover object-center rounded" />
            </div>
    </div>
</section>
    )
}

export default Contact