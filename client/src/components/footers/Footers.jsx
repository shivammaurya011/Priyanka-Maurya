import { Footer } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs'
import { HiLocationMarker, HiMail, HiPhone } from 'react-icons/hi'
import { useLocation } from 'react-router-dom';

function Footers() {
    const [activeLink, setActiveLink] = useState('');
    const location = useLocation();

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);
  return (
    <Footer container className={`dark:bg-pink-500 bg-pink-500 dark:${activeLink === "/politician" && 'bg-red-500'} ${activeLink === "/politician" && 'bg-red-500'} dark:${activeLink === "/doctor" && 'bg-blue-500'} ${activeLink === "/doctor" && 'bg-blue-500'} dark:${activeLink === "/social-work" && 'bg-yellow-500'} ${activeLink === "/social-work" && 'bg-yellow-500'} rounded-none px-16 md:px-8`}>
      <div className="w-full ">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="#"
              name="Dr. Priyanka Maurya"
              className="rounded-full"
            />
            <span className="text-gray-100 py-6 font-normal">
              <p className="mt-4 flex items-center">
                <HiLocationMarker className="h-6 w-6 mr-2 text-gray-300" />
                Lucknow, Uttar Pradesh, India
              </p>
              <p className="mt-2 flex items-center">
                <HiPhone className="h-6 w-6 mr-2 text-gray-300" />
                +91 76672 38292
              </p>
              <p className="mt-2 flex items-center">
                <HiMail className="h-6 w-6 mr-2 text-gray-300" />
                priyankamaurya27@gmail.com
              </p>
            </span>
          </div>
          <div className="grid grid-cols-2 gap-16 sm:mt-4 sm:grid-cols-3 sm:gap-12">
            <div>
              <Footer.Title title="Follow Us" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://www.linkedin.com/in/drpriyankamaurya27/">Linkedin</Footer.Link>
                <Footer.Link href="https://www.facebook.com/drpriyankamaurya27">Facebook</Footer.Link>
                <Footer.Link href="https://www.instagram.com/drpriyankamaurya27/">Instagram</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">About Us</Footer.Link>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms & Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full text-gray-200 items-center sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="https://vibhamaurya011.github.io/" by="Shivam Maurya™" year={new Date().getFullYear()} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="https://www.facebook.com/drpriyankamaurya27" icon={BsFacebook} />
            <Footer.Icon href="https://www.instagram.com/drpriyankamaurya27/" icon={BsInstagram} />
            <Footer.Icon href="https://twitter.com/dpriyankamaurya" icon={BsTwitter} />
            <Footer.Icon href="https://youtube.com/@DrPriyankaMauryaHomeopathy" icon={BsYoutube} />
            <Footer.Icon href="https://www.linkedin.com/in/drpriyankamaurya27/" icon={BsLinkedin} />
          </div>
        </div>
      </div>
    </Footer>
  )
}

export default Footers
