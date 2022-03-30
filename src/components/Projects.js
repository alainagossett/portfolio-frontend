import { Link } from 'react-router-dom'

function Projects(props) {
    const loaded = () => {
        return props.projects.map((project) => (
            <div key={project._id} className="project">
                <Link to={`/projects/${project._id}`}>
                    <h1>{project.name}</h1>
                    </Link>
                    <h3>{project.link}</h3>
                    <p>{project.description}</p>
                    <img src={project.thumbnail} alt={project.name} />
                    </div>
        ))
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }

    return props.people ? loaded() : loading()
}

export default Projects