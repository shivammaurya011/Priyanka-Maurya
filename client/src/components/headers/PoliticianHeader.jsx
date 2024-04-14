import { Avatar, Navbar } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import profile from '../../assets/profile.jpeg'

function PoliticianHeader() {
    const [activeLink, setActiveLink] = useState('');
    const location = useLocation();

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);
console.log(activeLink === "/politician")
  return (
<Navbar fluid className="dark:bg-gradient-to-br from-[#ff7e54] to-[#ff2e63] px-6 bg-gradient-to-br fixed top-0 right-0 left-0 z-auto">
            <Navbar.Brand as={Link} to="/doctor">
                <Avatar img={profile} rounded className="border-2 rounded-full"/>
                <span className="self-center whitespace-nowrap ml-2 text-2xl text-white font-bold">
                    Dr. Priyanka Maurya
                </span>
            </Navbar.Brand>
            <div className='order-1 flex gap-4'>
            <button className=" border-2 text-white font-medium hover:bg-[#ff2e63] py-2 px-4 rounded-full">Join our community</button>
            </div>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link as={Link} to="/politician" active={activeLink === "/politician"} style={{ color: activeLink === "/politician" ? "#fff" : "#bfbfbf" }} className="text-base">Home</Navbar.Link>
                <Navbar.Link as={Link} to="/politician/about" active={activeLink === "/politician/about"} style={{ color: activeLink === "/politician/about" ? "#fff" : "#bfbfbf" }} className="text-base">About</Navbar.Link>
                <Navbar.Link as={Link} to="/politician/blog" active={activeLink === "/politician/blog"} style={{ color: activeLink === "/politician/blog" ? "#fff" : "#bfbfbf" }} className="text-base">Blog</Navbar.Link>
                <Navbar.Link as={Link} to="/politician/contact" active={activeLink === "/politician/contact"} style={{ color: activeLink === "/politician/contect" ? "#fff" : "#bfbfbf" }} className="text-base">Contact</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
  )
}

export default PoliticianHeader
