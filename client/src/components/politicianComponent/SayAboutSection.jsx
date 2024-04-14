import React, { useState } from 'react';
import ap1 from '../../assets/ap1.jpg';
import ap2 from '../../assets/ap2.jpg';
import ap3 from '../../assets/ap3.jpg';
import ap4 from '../../assets/ap4.jpg';
import ap5 from '../../assets/ap5.jpg';

const sayAbout = [
  {
    image: ap1,
    name: 'Keshav Prashad Maurya',
    position: 'Deputy CM',
    title: 'The senator we are looking for',
    description:
    'Priya is committed to creating a positive work environment and ensuring efficient HR operations. Lorem ipsum dolor sit amet consectetur adipiscing elit.'
},
  {
    image: ap2,
    name: 'Aisha Gupta',
    position: 'Lead Engineer',
    title: 'Innovator and problem solver',
    description:
      'Aisha is a dedicated engineer with a passion for solving complex problems and creating innovative solutions. Lorem ipsum dolor sit amet consectetur adipiscing elit.',
  },
//   {
//     image: ap3,
//     name: 'Rahul Sharma',
//     position: 'Marketing Director',
//     title: 'Strategist and creative thinker',
//     description:
//       'Rahul brings years of experience in marketing and a keen eye for creative strategies. Lorem ipsum dolor sit amet consectetur adipiscing elit.',
//   },
//   {
//     image: ap4,
//     name: 'Priya Singh',
//     position: 'HR Manager',
//     title: 'People-oriented and efficient',
//     description:
//       'Priya is committed to creating a positive work environment and ensuring efficient HR operations. Lorem ipsum dolor sit amet consectetur adipiscing elit.',
//   },
//   {
//     image: ap5,
//     name: 'Suresh Patel',
//     position: 'Finance Analyst',
//     title: 'Analytical and detail-oriented',
//     description:
//       'Suresh excels in financial analysis and brings a keen eye for detail to every project. Lorem ipsum dolor sit amet consectetur adipiscing elit.',
//   },
];

function SayAboutSection() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm text-[#e3562f] uppercase font-medium">OUR aboutS</p>
        <h1 className="text-4xl font-bold mt-4 mb-8">What are the key abouts we are looking to achieve?</h1>
      </div>
      <div className="flex gap-8 px-12 items-center">
        {sayAbout.map((about, index) => (
          <div
            key={index}
            className={`w-1/2 shadow-md flex flex-col gap-6 p-6 bg-white rounded-xl mb-4 `}
          >
            <h2 className="text-center text-xl font-semibold">"{about.title}"</h2>
            <p className="text-gray-700">{about.description}</p>
            <div className="flex">
              <img src={about.image} alt={about.name} className="w-12 h-12 rounded-full" />
              <div className="text-left ml-4">
                <h4>{about.name}</h4>
                <p>{about.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SayAboutSection;
