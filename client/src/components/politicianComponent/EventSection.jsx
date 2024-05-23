import React from 'react';
import { Link } from 'react-router-dom';
import event from '../../assets/event.jpg'
const events = [
  {
    image: 'https://via.placeholder.com/150',
    title: 'Annual Charity Gala',
    description: 'Description for charity gala event.',
    time: '6:00PM',
    date: 'Nov 15, 2023',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Product Launch Event',
    description: 'Description for new product launch.',
    time: '10:00AM',
    date: 'Dec 10, 2023',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Tech Summit 2023',
    description: 'Description for technology summit.',
    time: '9:30AM',
    date: 'Jan 20, 2024',
  },
];

const data = {
  image: 'https://via.placeholder.com/150',
  title: 'Official Election Day',
  description: 'Description for economic growth objective.',
  time: '3:00PM',
  date: 'Oct 5, 2023',
};

function EventSection() {
  return (
    <section className="p-12 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm text-[#e3562f] uppercase font-medium">UPCOMING EVENTS</p>
        <h1 className="text-4xl font-bold mt-4 mb-8">Stay tuned for the upcoming events</h1>
        <p className="text-lg text-gray-700 mb-8">Explore and register for our upcoming events.</p>
      </div>
      <div className="flex items-center justify-between px-12 mb-8">
        <div className="w-1/2 flex flex-col gap-6">
          <div className="flex gap-6">
            <p>{data.date}</p>
            <p>{data.time}</p>
          </div>
          <div className=''>
            <h1 className="text-4xl mb-6 font-semibold">{data.title}</h1>
            <p className="text-gray-700">{data.description}</p>
          </div>
          <div className="flex justify-start space-x-4">
            <a
              target='_blank'
              href="https://www.facebook.com/drpriyankamaurya27/events"
              className="inline-block px-8 py-4 bg-[#e3562f] text-white font-bold rounded-lg border-2 border-[#e3562f] hover:bg-white hover:text-[#e3562f]"
            >
              Register now
            </a>
            <a
              target='_blank'
              href='https://www.facebook.com/drpriyankamaurya27/events'
              className="inline-block px-8 py-4 text-gray-900 font-bold rounded-lg border-2 border-gray-500 hover:bg-[#e3562f] hover:border-[#e3562f] hover:text-white"
            >
              More Information
            </a>
          </div>
        </div>
        <div className="w-1/2">
          <img src={event} alt="Event" className="rounded-lg h-60 w-[80%]" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 px-12 gap-8 max-w-7xl mx-auto">
        {events.map((event, index) => (
          <div key={index} className="text-center shadow-md bg-white rounded-xl p-4">
            <div className="flex gap-4 items-center justify-center mb-4">
              <p>{event.date}</p>
              <p>{event.time}</p>
            </div>
            <h2 className="text-xl font-semibold">{event.title}</h2>
            <p className="text-gray-700 mb-4">{event.description}</p>
            <a
              target='_blank'
              href='https://www.facebook.com/drpriyankamaurya27/events'
              className="text-[#e3562f] font-bold  hover:text-[#eb9d88]"
            >
              Register Now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EventSection;
