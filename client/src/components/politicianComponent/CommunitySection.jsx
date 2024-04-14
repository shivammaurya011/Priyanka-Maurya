import React, { useState, useEffect } from 'react';
import community1 from '../../assets/community1.png';
import community2 from '../../assets/community2.png';
import community3 from '../../assets/community3.png';
import community4 from '../../assets/community4.png';

function CommunitySection() {
  const [counts, setCounts] = useState({
    activeVoters: 0,
    volunteers: 0,
    daysInCampaign: 0,
    donors: 0,
  });

  useEffect(() => {
    const targetCounts = {
      activeVoters: 520000,
      volunteers: 20000,
      daysInCampaign: 175,
      donors: 35000,
    };

    const interval = setInterval(() => {
      setCounts(prevCounts => ({
        activeVoters: Math.min(prevCounts.activeVoters + 1500, targetCounts.activeVoters),
        volunteers: Math.min(prevCounts.volunteers + 100, targetCounts.volunteers),
        daysInCampaign: Math.min(prevCounts.daysInCampaign + 1, targetCounts.daysInCampaign),
        donors: Math.min(prevCounts.donors + 100, targetCounts.donors),
      }));
    }, 10); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-gray-200">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm text-[#e3562f] uppercase font-medium">JOIN OUR MOVEMENT</p>
        <h1 className="text-4xl font-bold mt-4 mb-8">We have a big, committed community</h1>
        <p className="text-lg text-gray-700 mb-8">
          Our community is dedicated to making a positive impact. Join us today and be a part of something bigger!
        </p>
      </div>
      <div className="flex justify-around items-center flex-wrap max-w-7xl mx-auto mt-8">
        <div className="text-center mb-8">
          <img src={community1} alt="Active Voters" className="w-32 h-32 mx-auto mb-4" />
          <p className="text-2xl font-bold text-[#e3562f]">{counts.activeVoters.toLocaleString()}+</p>
          <h2 className="text-xl font-semibold">Active voters</h2>
        </div>
        <div className="text-center mb-8">
          <img src={community2} alt="Volunteers" className="w-32 h-32 mx-auto mb-4" />
          <p className="text-2xl font-bold text-[#e3562f]">{counts.volunteers.toLocaleString()}+</p>
          <h2 className="text-xl font-semibold">Volunteers</h2>
        </div>
        <div className="text-center mb-8">
          <img src={community3} alt="Days in Campaign" className="w-32 h-32 mx-auto mb-4" />
          <p className="text-2xl font-bold text-[#e3562f]">{counts.daysInCampaign}+</p>
          <h2 className="text-xl font-semibold">Days in campaign</h2>
        </div>
        <div className="text-center mb-8">
          <img src={community4} alt="Donors" className="w-32 h-32 mx-auto mb-4" />
          <p className="text-2xl font-bold text-[#e3562f]">{counts.donors.toLocaleString()}+</p>
          <h2 className="text-xl font-semibold">Donors</h2>
        </div>
      </div>
    </section>
  );
}

export default CommunitySection;
