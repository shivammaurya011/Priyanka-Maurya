import { Avatar, Navbar } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import profile from '../../assets/profile.jpeg'
function Header() {
    const [activeLink, setActiveLink] = useState('');
    const location = useLocation();
    const whatsappLink = `https://wa.me/7667238292`;

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    return (
        <Navbar fluid className={`dark:bg-pink-500 bg-pink-500 dark:${activeLink === "/politician" && 'bg-red-500'} ${activeLink === "/politician" && 'bg-red-500'} dark:${activeLink === "/doctor" && 'bg-blue-500'} ${activeLink === "/doctor" && 'bg-blue-500'} dark:${activeLink === "/social-work" && 'bg-yellow-500'} ${activeLink === "/social-work" && 'bg-yellow-500'} fixed top-0 right-0 left-0 z-auto`}>
            <Navbar.Brand as={Link} to="/doctor">
                <Avatar img={profile} rounded className="border-2 rounded-full"/>
                <span className="self-center whitespace-nowrap ml-2 text-2xl text-white font-semibold">
                    Dr. Priyanka Maurya
                </span>
            </Navbar.Brand>
            <a href={whatsappLink} className="order-1 border-2 text-white font-medium hover:text-black hover:bg-white py-2 px-4 rounded-full">Contact Now</a>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link as={Link} to="/" active={activeLink === "/"} className="text-base">Home</Navbar.Link>
                <Navbar.Link as={Link} to="/doctor" active={activeLink === "/doctor"} className="text-base">Doctor</Navbar.Link>
                <Navbar.Link as={Link} to="/politician" active={activeLink === "/politician"} className="text-base">Politician</Navbar.Link>
                <Navbar.Link as={Link} to="/social-work" active={activeLink === "/social-work"} className="text-base">Social Work</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
