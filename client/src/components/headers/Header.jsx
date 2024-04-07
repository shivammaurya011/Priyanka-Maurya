import React, { useState } from "react";
import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";

function Header() {
  const [theme, setTheme] = useState('light'); // State to manage theme

  const handleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light')); // Toggle theme
  }

  return (
    <Navbar fluid px-4>
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <img
          src="https://flowbite-react.com/favicon.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Priynka Maurya
        </span>
      </Navbar.Brand>
      <div className="flex gap-2 md:order-2">
        <Button onClick={handleTheme} className='w-12 h-10 hidden sm:inline' color={'gray'} pill>
            {theme === 'light' ? <FaSun/> : <FaMoon/>}
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active>Home</Navbar.Link>
        <Navbar.Link href="/doctor">Doctor</Navbar.Link>
        <Navbar.Link href="/politician">Politician</Navbar.Link>
        <Navbar.Link href="/social-work">Social Work</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
