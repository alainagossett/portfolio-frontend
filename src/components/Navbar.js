import { ArrowRightIcon } from "@heroicons/react/solid";

function Navbar() {
    return (
        <header className="bg-gray-800 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="title-fint font-medium text-white mb-4 md:mb-0">
                    <a href="#landing" className="ml-3 text-xl">
                        Alaina Gossett
                    </a>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-1 md:border-gray-700 flex flex-wrap items-center text-base justify-center">
                    <a href="#projects" className="mr-5 hover:text-white">
                        Projects
                    </a>
                    <a href="#about" className="mr-5 hover:text-white">
                        About
                    </a>
                    <a href="#contact" className="mr-5 hover:text-white">
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    )
}

export default Navbar