import React from 'react';
import about from '../../assets/about.png';

const AboutSection = () => {
  return (
    <div id="about" className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-2 md:py-4 lg:py-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="lg:relative">
            <h2 className="text-3xl font-bold leading-[1.2] text-blue-500 sm:text-4xl md:text-[40px] mb-8">About me</h2>
            <p className="text-lg text-gray-700 mb-4">
              Dr. Priyanka Maurya, a Homeopathy Physician from Lucknow with 8+ years of experience, holds a B.H.M.S. degree from Gwalior University. Followed by 5 lakh people on social media, she is not only a BJP politician but also actively engages in social work with the Indian Roti Bank.
            </p>
            <p className="text-lg text-gray-700 ">
              Dr. Maurya initiated the Sanjeevani Free Medical Consultation during the COVID-19 pandemic and plans to organize health camps nationwide. Her mission extends beyond healthcare, focusing on creating awareness about hygiene, cleanliness, and nutrition in society.
            </p>
          </div>
          <div className="lg:relative">
            <img
              className="h-full w-full object-cover rounded-lg shadow-lg"
              src={about}
              alt="About Me"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
