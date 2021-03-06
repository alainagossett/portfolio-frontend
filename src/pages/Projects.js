import { CodeIcon } from '@heroicons/react/solid';
import { projects } from '../data';

function Projects() {
return (
<section id="projects" className='text-indigo-300 bg-slate-800 body-font'>
    <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
            <CodeIcon className="mx-auto inline-block w-10 mb-4 text-indigo-300" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                Apps I've Built
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Click on one of the tiles below to check out the live app. Each app uses a slightly different tech stack to demonstrate my skills in each.
            </p>
        </div>
        <div className="flex flex-wrap -m-4">
            {projects.map((project) => (
            <a href={project.link} key={project.image} className="sm:w-1/2 w-100 p-4" target="_blank" rel="noopener noreferrer">
                <div className="flex relative">
                    <img src={project.image} alt="{project.title}"
                        className='absolute inset-0 w-full h-full object-contain object-center' />
                    <div
                        className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                        <h3 className="tracking-widest text-sm title-font font-medium text-fuchsia-500 mb-1">
                            {project.subtitle}
                        </h3>
                        <h1 className="title-font text-lg font-medium text-white mb-3">
                            {project.title}
                        </h1>
                        <p className="leading-relaxed text-indigo-300">{project.description}</p>
                    </div>
                </div>
            </a>
            ))}
        </div>
    </div>
</section>
)
}

export default Projects