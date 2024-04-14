import { Avatar, Navbar } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import profile from '../../assets/profile.jpeg'
function DoctorHeader() {
    const [activeLink, setActiveLink] = useState('');
    const location = useLocation();

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    return (
        <Navbar fluid className="dark:bg-blue-800 px-6 bg-blue-800 fixed top-0 right-0 left-0 z-auto">
            <Navbar.Brand as={Link} to="/doctor">
                <Avatar img={profile} rounded className="border-2 rounded-full"/>
                <span className="self-center whitespace-nowrap ml-2 text-2xl text-white font-semibold">
                    Dr. Priyanka Maurya
                </span>
            </Navbar.Brand>
            <Link to={'/doctor/contact'} className="order-1 bg-blue-800 border-2 text-white font-medium hover:bg-blue-900 py-2 px-4 rounded-full">Contact Now</Link>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link as={Link} to="/doctor" active={activeLink === "/doctor"} className="text-base">Home</Navbar.Link>
                <Navbar.Link as={Link} to="/doctor/about" active={activeLink === "/doctor/about"} className="text-base">About</Navbar.Link>
                <Navbar.Link as={Link} to="/doctor/blog" active={activeLink === "/doctor/blog"} className="text-base">Blog</Navbar.Link>
                <Navbar.Link as={Link} to="/doctor/contact" active={activeLink === "/doctor/contact"} className="text-base">Contact</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default DoctorHeader;
