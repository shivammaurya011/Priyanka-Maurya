import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../../assets/heroimg.png';

function HeroSection() {
  return (
    <section className="flex justify-around items-center pb-12 pt-28 bg-gradient-to-b from-[#ff7e54] to-[#ff2e63]">
      <div className="flex flex-col gap-6 text-white">
        <h1 className="text-6xl font-bold">Dr. Priyanka Maurya</h1>
        <p className="text-lg">A dedicated politician working for the community.</p>
        <div className="mt-4 space-x-4">
          <Link
            to="/donate"
            className="inline-block px-8 py-4 bg-white text-[#e3562f] font-bold rounded-lg border-2 border-[#ff7e54] hover:bg-[#ff7e54] hover:text-white"
          >
            Donate
          </Link>
          <Link
            to="/community"
            className="inline-block px-8 py-4 text-white font-bold rounded-lg border-2 border-white hover:bg-white hover:text-[#e3562f]"
          >
            Join our community
          </Link>
        </div>
      </div>
      <div>
        <img
          src={heroImg}
          alt="Dr. Priyanka Maurya"
          className="h-96 w-96 object-cover border-8 border-white rounded-full"
        />
      </div>
    </section>
  );
}

export default HeroSection;
