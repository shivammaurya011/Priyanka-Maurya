import React, { useState, useEffect } from 'react';
import { FaUserCheck, FaUserMd, FaUsers } from 'react-icons/fa';

function HighlightSection() {
  const [customers, setCustomers] = useState(0);
  const [experience, setExperience] = useState(0);
  const [teams, setTeams] = useState(0);

  const finalCustomers = 20000;
  const finalExperience = 16;
  const finalTeams = 20;

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (customers < finalCustomers) {
        setCustomers((prevCount) => prevCount + 400);
      }
      if (experience < finalExperience) {
        setExperience((prevCount) => prevCount + 1); 
      }
      if (teams < finalTeams) {
        setTeams((prevCount) => prevCount + 1); 
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [customers, experience, teams, finalCustomers, finalExperience, finalTeams]);

  return (
    <section className='bg-blue-100 p-6 flex justify-around items-center'>
      <div className='flex flex-col items-center gap-2'>
        <FaUserCheck className='text-4xl text-blue-500' />
        <p className='text-xl'>{customers}+</p>
        <h1 className='text-2xl font-bold'>Customers</h1>
      </div>
      <div className='flex flex-col items-center gap-2 mx-8'>
        <FaUserMd className='text-4xl text-blue-500' />
        <p className='text-xl'>{experience}+</p>
        <h1 className='text-2xl font-bold'>Experience</h1>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <FaUsers className='text-4xl text-blue-500' />
        <p className='text-xl'>{teams}+</p>
        <h1 className='text-2xl font-bold'>Teams</h1>
      </div>
    </section>
  );
}

export default HighlightSection;
