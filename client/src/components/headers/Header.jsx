import { Avatar, Navbar } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import profile from '../../assets/profile.jpeg';

function Header() {
    const [activeLink, setActiveLink] = useState('');
    const location = useLocation();

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    return (
        <Navbar fluid className={`dark:bg-pink-500 bg-pink-500 ${activeLink === "/politician" && 'dark:bg-red-500 bg-red-500'} ${activeLink === "/doctor" && 'dark:bg-blue-500 bg-blue-500'} ${activeLink === "/social-work" && 'dark:bg-yellow-500 bg-yellow-500'} fixed top-0 right-0 left-0 z-auto`}>
            <Navbar.Brand as={Link} to="/">
                <Avatar img={profile} rounded className="border-2 rounded-full"/>
                <span className="self-center whitespace-nowrap ml-2 text-2xl text-white font-semibold">
                    Dr. Priyanka Maurya
                </span>
            </Navbar.Brand>
            <a href={'https://wa.me/7667238292'} className="order-1 border-2 hidden sm:inline text-white font-medium hover:text-black hover:bg-white py-2 px-4 rounded-full">
                Contact Now
            </a>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link as={Link} to="/" active={activeLink === "/"} className="text-base">
                    Home
                </Navbar.Link>
                <Navbar.Link as={Link} to="/doctor" active={activeLink === "/doctor"} className="text-base">
                    Doctor
                </Navbar.Link>
                <Navbar.Link as={Link} to="/politician" active={activeLink === "/politician"} className="text-base">
                    Politician
                </Navbar.Link>
                <Navbar.Link as={Link} to="/social-work" active={activeLink === "/social-work"} className="text-base">
                    Social Work
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
