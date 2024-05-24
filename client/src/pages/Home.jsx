import React, { useEffect, useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaPhoneAlt, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import Layout from '../layouts/Layout';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from '../assets/a4.png';
import img2 from '../assets/a2.png';
import img3 from '../assets/regImg.png';
import img4 from '../assets/event.jpg';
import community1 from '../assets/community1.png';
import community2 from '../assets/community2.png';
import community3 from '../assets/community3.png';
import community4 from '../assets/community4.png';
import obj1 from '../assets/obj1.png';
import obj2 from '../assets/obj2.png';
import obj3 from '../assets/obj3.png';
import obj4 from '../assets/obj4.png';
import obj5 from '../assets/obj5.png';
import obj6 from '../assets/obj6.png';

const slides = [
  {
    title: "Renowned Homeopathy Physician",
    description: "Dr. Priyanka Maurya is a renowned homeopathy physician with over 10 years of experience, dedicated to providing holistic healthcare and advocating for community wellness through her medical expertise and compassionate care.",
    image: img1,
  },
  {
    title: "Committed Medical Professional",
    description: "As a committed doctor, I strive to offer the best medical care to my patients, focusing on preventive health measures and personalized treatment plans to ensure their overall well-being and long-term health.",
    image: img2,
  },
  {
    title: "Dedicated Community Politician",
    description: "As a politician, I am dedicated to serving the community, implementing policies that promote social justice, healthcare, and education, ensuring a better quality of life for all citizens through proactive governance.",
    image: img3,
  },
  {
    title: "Passionate Social Worker",
    description: "In my role as a social worker, I focus on uplifting underprivileged communities, providing essential services and support, and advocating for the rights and needs of vulnerable populations to create a more inclusive society.",
    image: img4,
  }
];

const socialMediaStats = [
  { icon: <FaFacebook />, platform: "Facebook", followers: "1.2M+", link: "https://www.facebook.com/drpriyankamaurya27" },
  { icon: <FaInstagram />, platform: "Instagram", followers: "1.4M+", link: "https://www.instagram.com/drpriyankamaurya27/" },
  { icon: <FaLinkedin />, platform: "LinkedIn", followers: "36k+", link: "https://www.linkedin.com/in/drpriyankamaurya27/" },
  { icon: <FaTwitter />, platform: "Twitter", followers: "45.5k+", link: "https://twitter.com/dpriyankamaurya" },
  { icon: <FaYoutube />, platform: "YouTube", subscribers: "5.4k+", link: "https://www.youtube.com/@drpriyankamauryahomeopathy" }
];

const videos = [
  { id: "video1", link: "PFrcn_8GLEg" },
  { id: "video2", link: "7gr97njI_ps" },
  { id: "video3", link: "iHYVcs5Vlgg" },
  { id: "video4", link: "dtIKIvrlrUE" },
  { id: "video5", link: "K0z5AzvqfKg" },
  { id: "video6", link: "SP-P2xZLftU" },
];

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

const CardWithVideo = ({ video }) => {
  return (
    <div className="relative group overflow-hidden rounded-xl shadow-lg bg-gray-200">
      <iframe
        title={video.id}
        className="w-full"
        width="560"
        height="200"
        src={`https://www.youtube.com/embed/${video.link}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false
  };

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
    <Layout>
      <section className="h-screen overflow-hidden">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="flex items-center justify-center px-4">
              {index % 2 === 0 ? (
                <div className="flex w-full items-center justify-center">
                  <div className="w-1/2 p-8">
                    <img src={slide.image} alt={slide.title} className="w-full h-96 rounded-lg shadow-lg" />
                  </div>
                  <div className="w-1/2 p-8">
                    <h2 className="text-5xl font-bold text-pink-500 mb-4">{slide.title}</h2>
                    <p className="text-lg text-gray-600 mb-8">{slide.description}</p>
                    <a 
                      target='_blank'
                      href="https://wa.me/7667238292" 
                      className="inline-block px-8 py-4 bg-pink-500 text-white font-bold rounded-lg hover:bg-pink-600 transition-colors duration-300"
                    >
                      Contact Now
                    </a>
                  </div>
                </div>
              ) : (
                <div className="flex w-full items-center justify-center">
                  <div className="w-1/2 p-8">
                    <h2 className="text-5xl font-bold text-pink-500 mb-4">{slide.title}</h2>
                    <p className="text-lg text-gray-600 mb-8">{slide.description}</p>
                    <a 
                      target='_blank'
                      href="https://wa.me/7667238292"
                      className="inline-block px-8 py-4 bg-pink-500 text-white font-bold rounded-lg hover:bg-pink-600 transition-colors duration-300"
                    >
                      Contact Now
                    </a>
                  </div>
                  <div className="w-1/2 p-8">
                    <img src={slide.image} alt={slide.title} className="w-full h-96 rounded-lg shadow-lg" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </Slider>
      </section>
      <section className="py-12 mt-[-50px] bg-pink-100">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm text-[#e3562f] uppercase font-medium">JOIN OUR MOVEMENT</p>
        <h1 className="text-4xl font-bold text-pink-500 mt-4 mb-8">We have a big, committed community</h1>
      </div>
      <div className="flex justify-around items-center flex-wrap max-w-7xl mx-auto mt-8">
        <div className="text-center mb-8">
          <img src={community1} alt="Active Voters" className="w-32 h-32 mx-auto mb-4" />
          <p className="text-2xl font-bold text-[#e3562f]">{counts.activeVoters.toLocaleString()}+</p>
          <h2 className="text-xl font-semibold">Active users</h2>
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
      
      <section className="py-8 flex flex-col items-center justify-center" id="about">
      <p className="text-sm text-[#e3562f] uppercase font-medium">ALL ABOUT ME</p>
        <h2 className="text-5xl font-bold text-pink-500 mb-8 text-center">About Dr. Priyanka Maurya</h2>
        <div className="max-w-4xl p-8 transform hover:scale-105 transition-transform duration-300">
          <p className="text-lg text-gray-600 mb-4">Dr. Priyanka Maurya, B.H.M.S., is a distinguished Homeopathy Physician and Consultant from Lucknow, Uttar Pradesh, with over 10 years of experience. She earned her degree from Gwalior University and follows in the footsteps of her father, a prominent Homeopathy doctor in Azamgarh.</p>
          <p className="text-lg text-gray-600 mb-4">Dr. Maurya has over 2.5 million followers on social media, where she shares insights on homeopathy, health, and social issues. She is also a Senior BJP politician and was a key figure in the "Ladki Hoon Lad Sakti Hoon" campaign in the 2022 Uttar Pradesh Assembly Election.</p>
          <p className="text-lg text-gray-600 mb-4">Committed to social work, she collaborates with NGOs like Indian Roti Bank and Help India Rising Foundation to combat hunger and provide free medical consultations. Dr. Maurya plans to organize health, eye, and blood donation camps across India to raise awareness about health issues among the underprivileged.</p>
        </div>
      </section>
      <section className=' py-8 bg-pink-100 flex flex-col items-center justify-center'>
      <p className="text-sm text-[#e3562f] uppercase font-medium">JOIN OUR NETWORK</p>
        <h2 className="text-5xl font-bold text-pink-500 mb-8">Follow Us on Social Media</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12 px-8">
          {socialMediaStats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <a href={stat.link} target="_blank" rel="noopener noreferrer" className="text-6xl mb-4 text-pink-500 hover:text-pink-600 transition-colors duration-300">
                {stat.icon}
              </a>
              <h3 className="text-2xl font-bold mb-2">{stat.platform}</h3>
              <p className="text-lg text-gray-600">{stat.followers || stat.subscribers} followers</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-12">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm text-[#e3562f] uppercase font-medium">OUR OBJECTIVES</p>
        <h1 className="text-4xl font-bold text-pink-500 mt-4 mb-8">What are the key objectives we are looking to achieve?</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 px-12 gap-8 max-w-7xl mx-auto mt-8">
        {objectivesData.map((objective, index) => (
          <div key={index} className="text-center shadow-md bg-pink-50 rounded-xl p-4">
            <img src={objective.image} alt={objective.alt} className="w-32 h-32 mx-auto mb-4" />
            <h2 className="text-xl font-semibold">{objective.title}</h2>
            <p className="text-gray-700">{objective.description}</p>
          </div>
        ))}
      </div>
    </section>
      <section className="py-16 px-6 lg:px-10 bg-gray-100">
      <div className="container mx-auto">
        <div className="text-center mb-12">
        <p className="text-sm text-[#e3562f] uppercase font-medium">OUR MEDIA MOVEMENT</p>
          <h2 className="text-3xl font-bold leading-[1.2] text-pink-500 sm:text-4xl md:text-5xl">
          Media Coverage Highlights
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <CardWithVideo key={video.id} video={video} />
          ))}
        </div>
      </div>
    </section>
      <section id="contact" className="bg-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/path-to-your-image.jpg")', opacity: 0.1 }}></div>
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-5xl font-bold mb-8 text-pink-500 animate-fade-in">Get in Touch</h2>
        <p className="text-xl mb-8 px-16 text-gray-600 animate-fade-in">
          We would love to hear from you. Reach out to us through any of the following methods. 
          Whether you have questions, feedback, or simply want to connect, we're here for you. 
          Our team is dedicated to providing the best support possible and ensuring all your inquiries 
          are addressed promptly. Don't hesitate to drop us a message!
        </p>
        <div className="flex flex-col items-center space-y-6">
          <a
            href="https://wa.me/7667238292" 
            className="bg-pink-500 text-white py-3 px-6 rounded-full inline-flex items-center hover:bg-pink-600 transition transform hover:-translate-y-1 duration-300 shadow-lg animate-bounce"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="mr-2" /> Connect via WhatsApp
          </a>
          <div className="flex space-x-4 text-3xl">
            <a target='_blank' href="mailto:priyankamaurya27@gmail.com" className="text-pink-300 hover:text-pink-500 transition duration-300">
              <FaEnvelope />
            </a>
            <a target='_blank' href="tel:+917667238292" className="text-pink-300 hover:text-pink-500 transition duration-300">
              <FaPhoneAlt />
            </a>
            <a target='_blank' href="https://www.facebook.com/drpriyankamaurya27" className="text-pink-300 hover:text-pink-500 transition duration-300">
              <FaFacebook />
            </a>
            <a target='_blank' href="https://www.instagram.com/drpriyankamaurya27/" className="text-pink-300 hover:text-pink-500 transition duration-300">
              <FaInstagram />
            </a>
            <a target='_blank' href="https://www.linkedin.com/in/drpriyankamaurya27/" className="text-pink-300 hover:text-pink-500 transition duration-300">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-30px);
          }
          60% {
            transform: translateY(-15px);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-in-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-in-out;
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
    </Layout>
  );
}

export default Home;
