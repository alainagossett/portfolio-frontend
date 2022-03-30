import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Projects from '../pages/Projects'

function Main(props) {
    const [projects, setProjects] = useState(null)

    const URL = 'http://localhost:3001/projects/'

    const getProjects = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setProjects(data)
    }

    return (
        <main>
            <Routes>
                <Route exact path='/'>
                <About />
                </Route>
                <Route path='/contact'>
                <Contact />
                </Route>
                <Route path='/projects'>
                <Projects projects={projects} />
                </Route>
            </Routes>
        </main>
    )
}

export default Main;