import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/heroImage.png';

const HeroSection = () => {
  return (
    <section className="">
      <div className="grid max-w-screen-xl px-4 h-screen mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
        <div className="lg:col-span-5 lg:flex">
          <img src={heroImage} alt="mockup" />
        </div>
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl text-blue-500 font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">India's Premier Homeopathy Clinic</h1>
          <p className="max-w-2xl mb-6 font-normal text-gray-700 lg:mb-8 md:text-lg lg:text-xl">At Modern Homeopathic Clinic, we redefine wellness through personalized care and genuine healing. Our dedicated team, led by the esteemed Dr. Priyanka Maurya, is committed to delivering high-quality homeopathic treatment.</p>
          <Link to={'/doctor/contact'} className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border bg-blue-500 border-white rounded-full hover:bg-blue-600 focus:ring-4 focus:ring-gray-100">
            Contact Now
          </Link> 
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
