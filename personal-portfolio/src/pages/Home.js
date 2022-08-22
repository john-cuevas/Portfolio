import React from 'react'
import { Link} from 'react-router-dom';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/Home.css"


function Home() {
    function open(url) {
        window.open(url, '_blank').focus();
    }
    return (
        <div className='home'>
            <div className='about'>
                <h3>Hello World, My name is John Cuevas</h3>
                <div className='prompt'>
                    <p>Here is my portfolio</p>
                    <div className='promptIcons'>
                        <LinkedInIcon onClick={() => {
                            open("https://www.linkedin.com/in/john-cuevas/");
                        }} />
                        <Link to={"/contact"}> <EmailIcon /> </Link>
                        <GithubIcon onClick={() => {
                            open("https://github.com/john-cuevas");
                        }} />
                    </div>
                </div>
            </div>
            <div className='skills'>
                <h1>Skills</h1>
                <ol className='list'>
                    <li className='item'>
                        <h2>Front-End</h2>
                        <span>
                            HTML, CSS, NPM, BootStrap, MaterialUI, ReactJS
                        </span>
                    </li>
                    <li className='item'>
                        <h2>Back-End</h2>
                        <span>
                            NodeJS, Java Spring, ExpressJS, MySQL, MongoDB
                        </span>
                    </li>
                    <li className='item'>
                        <h2>Languages</h2>
                        <span>
                            JavaScript, Java, Python
                        </span>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Home