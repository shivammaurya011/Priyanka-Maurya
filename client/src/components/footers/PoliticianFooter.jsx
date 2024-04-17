import { Footer } from 'flowbite-react'
import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs'
import { HiLocationMarker, HiMail, HiPhone } from 'react-icons/hi'

function PoliticianFooter() {
  return (
    <Footer container className='dark:bg-gradient-to-br from-[#ff7e54] to-[#ff2e63] bg-gradient-to-br rounded-none px-16 md:px-8'>
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
                UGF3, Pratap Plaza, Sector B, LDA Colony,<br />Lucknow, Uttar Pradesh, India
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
                <Footer.Link href="/doctor/about">About Us</Footer.Link>
                <Footer.Link href="/doctor/blog">Privacy Policy</Footer.Link>
                <Footer.Link href="/doctor/blog">Terms & Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
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
export default PoliticianFooter
