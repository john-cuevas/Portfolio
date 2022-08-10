import React from 'react'
import { useParams } from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectList';
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css"



function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];

    function open(url) {
        window.open(url, '_blank').focus();
    }

    return (
        <div className='project'>
            <h1>{project.name}</h1>
            <p> <b>Skills:</b> {project.skills}
            </p>
            <div className = "special" onClick={() => {
                open(project.link);
            }}>
                <GithubIcon />
            </div>

        </div>
    )
}

export default ProjectDisplay