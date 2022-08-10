import React from 'react'
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from"@mui/icons-material/GitHub";
import "../styles/Footer.css"

function Footer() {
    function open(url) {
        window.open(url, '_blank').focus();
    }
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <LinkedInIcon onClick={() => {
                open("https://www.linkedin.com/in/john-cuevas/");
            }}/>
                <GithubIcon onClick={() => {
                open("https://github.com/john-cuevas");
            }}/>
            </div>
            <p> &copy; 2022 johncuevas.com</p>
        </div>
    )
}

export default Footer