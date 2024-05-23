import React from "react";
import { Link } from "react-router-dom";
import regImg from "../../assets/regImg.png";
import { FiCheckCircle } from "react-icons/fi";

function RegisterSection() {
  return (
    <section className="py-12 px-6 md:px-12  bg-gradient-to-br from-[#ff7e54] to-[#ff2e63] flex flex-col md:flex-row items-center justify-center">
      <div className="max-w-4xl mx-auto w-1/2 text-center md:text-left">
        <h1 className="text-4xl font-bold mt-4 mb-6 text-white">
          Register today to vote for the future of India.
        </h1>
        <div className="flex flex-col md:flex-row items-center pr-8 justify-center md:justify-start space-y-4 md:space-y-0 text-lg font-semibold md:space-x-4 mt-12">
          <input
            placeholder="Enter your email"
            className="w-3/4 px-4 py-3 rounded-md focus:outline-none focus:ring focus:border-[#ff2e63]"
          />
          <a
            target="_blank"
            href="https://www.facebook.com/drpriyankamaurya27"
            className="w-1/4 px-4 py-3 text-white text-center border-2 border-white hover:text-[#ff2e63] hover:bg-white  rounded-md"
          >
            Join us
          </a>
        </div>
        <div className="flex items-center space-x-4 mt-8">
          <FiCheckCircle className="text-[#fcbbbb] w-8 h-8" />
          <h3 className="text-lg font-semibold text-white">
            Join our 500,000+ community members
          </h3>
        </div>
      </div>
      <div className="max-w-4xl mx-auto relative w-1/2">
        <div className="absolute bottom-20 md:-left-16 text-center p-6 w-40 rounded-lg bg-white shadow-lg">
          <p className="text-2xl font-bold text-[#ff2e63]">520,000+</p>
          <h2 className="text-xl font-semibold">Active users</h2>
        </div>
        <div className="mx-auto mb-8 md:mb-0">
          <img
            src={regImg}
            alt="India Image"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default RegisterSection;
