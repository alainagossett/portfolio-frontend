import { Link } from 'react-router-dom';

function Landing(props) {
    return (
    <section id="landing">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div
                className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                    Alaina Gossett
                </h1>
                <h2 className='title-font sm:text-2xl text-1xl mb-2 font-medium text-white'>
                    Hi, I'm so glad you're here
                </h2>
                <p className="mb-8 leading-relaxed text-indigo-300">
                    Welcome to my portfolio site! I'd like to showcase some recent projects I've worked on as well as give you a better idea of who I am as a Software Engineer. 
                </p>
                <div className="flex justify-center">
                    <Link to="/contact"
                        className="inline-flex text-white bg-fuchsia-500 border-0 py-2 px-6 focus:outline-none hover:bg-fuchsia-600 rounded text-lg">
                        Contact
                    </Link>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img src="./Landing_Page040522.JPEG" alt="Alaina Gossett" className="object-cover object-center rounded" />
            </div>
        </div>
    </section>
    )
    }
    
    export default Landing;