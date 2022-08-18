import React, { useEffect, useState } from 'react'
import { Link, useLocation} from 'react-router-dom';
import "../styles/Navbar.css"
import ReorderIcon from "@mui/icons-material/Reorder"

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);
    
    const location = useLocation();

    useEffect(() =>{
        setExpandNavbar(false);
    }, [location])
    return (
        <div className='navbar' id = {expandNavbar ? "open" : "close"}>
            <div className='toggleButton'>
                <button onClick={() => {
                    setExpandNavbar((prev) => !prev);
                }}>
                    {/* <img src='https://cdn.icon-icons.com/icons2/1863/PNG/512/reorder_118734.png'
                        alt='reorder icon' /> */}
                        <ReorderIcon/>
                </button>
            </div>
            <div className='links'>
                <Link to={"/"}> Home </Link>
                <Link to={"/projects"}> Projects </Link>
                <Link to={"/experience"}> Experience </Link>
                <Link to={"/contact"}> Contact Me </Link>
            </div>
        </div>
    )
}

export default Navbar