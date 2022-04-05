import { Link } from 'react-router-dom';
// import { ArrowRightIcon } from "@heroicons/react/solid";

function Navbar() {
    return (
        <header className="bg-gray-900 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a href="/" className="title-fint font-medium text-white mb-4 md:mb-0">
                    <Link to="/" className="ml-3 text-xl">
                        Alaina Gossett
                    </Link>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-1 md:border-gray-700 flex flex-wrap items-center text-base justify-center">
                    <Link to="/projects" className="mr-5 hover:text-grey">
                        Portfolio
                    </Link>
                    <Link to="/about" className="mr-5 hover:text-grey">
                        About
                    </Link>
                    <Link to="/contact" className="mr-5 hover:text-grey">
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Navbar