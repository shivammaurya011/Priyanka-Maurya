import React from 'react';
import obj1 from '../../assets/obj1.png';
import obj2 from '../../assets/obj2.png';
import obj3 from '../../assets/obj3.png';
import obj4 from '../../assets/obj4.png';
import obj5 from '../../assets/obj5.png';
import obj6 from '../../assets/obj6.png';

const objectivesData = [
  {
    image: obj1,
    alt: 'Active Voters',
    title: 'Drive economic growth and create more jobs',
    description: 'Description for economic growth objective.',
  },
  {
    image: obj2,
    alt: 'Volunteers',
    title: 'Make healthcare more accessible than ever',
    description: 'Description for healthcare accessibility objective.',
  },
  {
    image: obj3,
    alt: 'Days in Campaign',
    title: 'Drive eco-friendly policies to stop climate change',
    description: 'Description for eco-friendly policies objective.',
  },
  {
    image: obj4,
    alt: 'Donors',
    title: 'Implement the first basic income program in India',
    description: 'Description for basic income program objective.',
  },
  {
    image: obj5,
    alt: 'Donors',
    title: 'Allocate the budget transparently and effectively',
    description: 'Description for budget allocation objective.',
  },
  {
    image: obj6,
    alt: 'Donors',
    title: 'Improve benefits & celebrate our veterans',
    description: 'Description for benefits improvement objective.',
  },
];

function ObjectiveSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm text-[#e3562f] uppercase font-medium">OUR OBJECTIVES</p>
        <h1 className="text-4xl font-bold mt-4 mb-8">What are the key objectives we are looking to achieve?</h1>
        <p className="text-lg text-gray-700 mb-8">Brief description of your objectives section.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 px-12 gap-8 max-w-7xl mx-auto mt-8">
        {objectivesData.map((objective, index) => (
          <div key={index} className="text-center shadow-md bg-white rounded-xl p-4">
            <img src={objective.image} alt={objective.alt} className="w-32 h-32 mx-auto mb-4" />
            <h2 className="text-xl font-semibold">{objective.title}</h2>
            <p className="text-gray-700">{objective.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ObjectiveSection;
