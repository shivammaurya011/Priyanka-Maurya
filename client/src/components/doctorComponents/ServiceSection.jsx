import React from "react";
import { FaHeart, FaChild, FaVenus, FaUserMd, FaBalanceScale, FaSmile } from 'react-icons/fa';

const ServiceSection = () => {

  const ServiceCard = ({ icon, title, details }) => {
    return (
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10">
          <div className="mb-8 flex items-center justify-center h-[70px] w-[70px] rounded-full bg-blue-800 text-white">
            {React.cloneElement(icon, { size: 40 })} {/* Increase icon size */}
          </div>
          <h4 className="mb-[14px] text-xl font-semibold text-blue-800">
            {title}
          </h4>
          <p className="text-body-color dark:text-dark-6 ">{details}</p>
        </div>
      </div>
    );
  };

  return (
    <section className="py-8 px-10 bg-blue-100">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center ">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Services
              </span>
              <h2 className=" text-3xl font-bold leading-[1.2] text-blue-800 sm:text-4xl md:text-[40px]">
                What We Offer
              </h2>
            </div>
          </div>
        </div>

        <div className="mx-4 flex items-center flex-wrap">
          <ServiceCard
            title="Chronic Management"
            details="Specializing in allergies, arthritis management to enhance overall quality of life."
            icon={<FaHeart />}
          />
          <ServiceCard
            title="Pediatric Homoeopathy"
            details="Gentle treatments addressing childhood issues like allergies, ADHD, and recurring infection."
            icon={<FaChild />}
          />
          <ServiceCard
            title="Women's Health"
            details="Supporting women through every stage of life, addressing menstrual problems, managing menopause."
            icon={<FaVenus />}
          />
          <ServiceCard
            title="Skin Disorders"
            details="Effective treatments for skin conditions like eczema, psoriasis, and acne, restoring skin’s health."
            icon={<FaUserMd />}
          />
          <ServiceCard
            title="Weight Management"
            details="Natural solutions for stress, anxiety, and mood disorders, promoting mental and emotional wellness."
            icon={<FaBalanceScale />}
          />
          <ServiceCard
            title="Mental Health"
            details="Empowering individuals through comprehensive mental health services for emotional well-being."
            icon={<FaSmile />}
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
