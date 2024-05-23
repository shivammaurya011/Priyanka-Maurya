import React from "react";
import { Link } from "react-router-dom";
import indImg from "../../assets/indImg.png";

function IndiaSection() {
  const whatsappLink = `https://wa.me/7667238292`;

  return (
    <section className="py-12 px-20 bg-gray-100 flex justify-around">
      <div className="max-w-4xl mx-auto relative w-1/2">
        {/* Absolute divs for Active users and Volunteers */}
        <div className="absolute top-0 bottom-0 -right-16 flex justify-center items-center gap-20 flex-col">
          <div className="text-center p-6 w-40 rounded-lg bg-white">
            <p className="text-2xl font-bold text-[#e3562f]">520,000+</p>
            <h2 className="text-xl font-semibold">Active users</h2>
          </div>
          <div className="text-center p-6 w-40 rounded-lg bg-white">
            <p className="text-2xl font-bold text-[#e3562f]">25,000+</p>
            <h2 className="text-xl font-semibold">Volunteers</h2>
          </div>
        </div>
        {/* Image */}
        <div className="mx-auto mb-8 static z-10">
          <img
            src={indImg}
            alt="India Image"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="max-w-4xl mx-auto ml-24 w-1/2">
        <p className="text-sm text-[#e3562f] uppercase text-center font-medium">
          OUR COMMUNITY
        </p>
        <h1 className="text-4xl font-bold mt-4 mb-6">
          India’s change begins with you and me.
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Together, we harness the strength of unity towards impactful change.
          Become a member today and contribute to building a better future for
          India through collaborative efforts.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Our belief in collective strength drives meaningful transformations.
          Embrace community engagement today and play your role in fostering
          positive transformations across India's landscape.
        </p>

        <div className="flex justify-start space-x-4 mt-12">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[#e3562f] text-white font-bold rounded-lg border-2 border-[#e3562f] hover:bg-white hover:text-[#e3562f]"
          >
            Contact Now
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/drpriyankamaurya27"
            className="inline-block px-8 py-4 text-gray-900 font-bold rounded-lg border-2 border-gray-500 hover:bg-[#e3562f] hover:border-[#e3562f] hover:text-white"
          >
            Join our community
          </a>
        </div>
      </div>
    </section>
  );
}

export default IndiaSection;
