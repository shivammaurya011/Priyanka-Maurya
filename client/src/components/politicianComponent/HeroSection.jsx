import React from 'react';
import { Link } from 'react-router-dom';
import phero from '../../assets/phero.png';

function HeroSection() {
  const whatsappLink = `https://wa.me/7667238292`;
  return (
    <section className="flex items-center h-screen bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex flex-col gap-6 p-4">
          <h1 className="text-8xl font-bold text-gray-800">Dr. Priyanka <br/>Maurya</h1>
          <p className="text-lg text-gray-600">A dedicated politician working for the community.</p>
          <div className="mt-4 space-x-4">
            <a
              href={whatsappLink}
              target='_blank'
              className="inline-block px-8 py-4 bg-[#e3562f] text-white font-bold rounded-lg hover:bg-[#ff7e54] transition-colors duration-300"
            >
              Contact Now
            </a>
            <a
              href='https://www.instagram.com/drpriyankamaurya27/'
              target='_blank'
              className="inline-block px-8 py-4 bg-white text-[#e3562f] font-bold rounded-lg border-2 border-[#e3562f] hover:bg-[#e3562f] hover:text-white transition-colors duration-300"
            >
              Join our community
            </a>
          </div>
        </div>
        <div className="md:w-1/2 p-4">
          <img
            src={phero}
            alt="Dr. Priyanka Maurya"
            className="w-[90%] object-cover rounded-lg "
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
