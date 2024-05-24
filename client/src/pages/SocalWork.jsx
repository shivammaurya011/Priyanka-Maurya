import React from 'react';
import { FaWhatsapp, FaEnvelope, FaPhoneAlt, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Layout from '../layouts/Layout';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import heroBackground from '../assets/herosec.jpg'; 

const SocialWork = () => {
  const experiences = [
    {
      role: "State Convener Uttar Pradesh",
      company: "Indian Roti Bank",
      duration: "Nov 2019 - Jan 2020 · 4 yrs 7 mos",
      description: "Convene and chair the meetings of the state committees. Organize Network activities. Communicate with members and organize the ground activities and meetings.",
      location: "Lucknow, Uttar Pradesh, India"
    },
    {
      role: "National Coordinator",
      company: "Indian Roti Bank",
      duration: "Jan 2020 - Present · 4 yrs 5 mos",
      description: "Coordination with doctors. Facilitate Sanjeevani program for underprivileged and poor people to connect with a network of specialist doctors over phone call and obtain medical advice for common health-related concerns.",
      location: "Lucknow, Uttar Pradesh, India"
    },
    {
      role: "Brand Ambassador",
      company: "Help India Rising Foundation",
      duration: "Aug 2020 - Present · 3 yrs 10 mos",
      description: "Represent the NGO, participate in events, generate brand awareness, and be an opinion leader in the community.",
      location: "India"
    }
  ];
  

  const services = [
    { 
      title: "Counseling", 
      description: "Providing professional counseling services to individuals and families." 
    },
    { 
      title: "Community Outreach", 
      description: "Organizing and leading community outreach programs." 
    },
    { 
      title: "Advocacy", 
      description: "Advocating for the rights and needs of vulnerable populations." 
    },
    { 
      title: "Education", 
      description: "Promoting education and providing resources for students and educators." 
    },
    { 
      title: "Health Services", 
      description: "Offering medical and health services to underserved communities." 
    },
    { 
      title: "Agriculture Support", 
      description: "Supporting local farmers with resources and training for sustainable agriculture." 
    }
  ];

  const testimonials = [
    {
      name: "Abhishek Maurya",
      occupation: "Businessman",
      feedback: "Dr. Priyanka's efforts in social work are truly inspiring. Her dedication to helping those in need and improving community welfare is admirable. She is a compassionate leader making a significant impact."
    },
    {
      name: "Vaibhav Singh",
      occupation: "Politician",
      feedback: "Collaborating with Dr. Priyanka has been eye-opening. Her commitment to homeopathy and social service is exceptional. She genuinely strives to improve lives, making her a valuable asset to any community."
    },
    {
      name: "Priya Yadav",
      occupation: "Engineer",
      feedback: "Dr. Priyanka is not just a doctor but a guiding light in social work. Her expertise in homeopathy and her dedication to humanitarian causes are commendable. She makes a real difference."
    },
    {
      name: "Shivam Maurya",
      occupation: "Programmer",
      feedback: "Dr. Priyanka's work with the Indian Roti Bank showcases her dedication to eradicating hunger. Her passion for social causes and her homeopathic expertise make her an inspiration to many."
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true
  };

  const whatsappLink = `https://wa.me/7667238292`;

  return (
    <Layout>
      <section className="bg-cover h-screen bg-center py-16" style={{ backgroundImage: `url(${heroBackground})` }}>
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-yellow-500 mb-4 md:mb-28">Empowering Communities, One Step at a Time</h1>
          <p className="text-2xl text-gray-900 opacity-75 bg-yellow-100 border-2 mb-8 md:mb-20 max-w-2xl mx-auto">Join us in our mission to create a positive impact and bring lasting change to those in need. Together, we can make a difference.</p>
          <a href="#contact" className="bg-yellow-500 text-white py-3 px-6 rounded-full font-semibold hover:bg-yellow-600 transition duration-300 inline-block">
            Get in Touch
          </a>
        </div>
      </section>

      <section id="experience" className="bg-yellow-100 py-12 px-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-yellow-500">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                <h3 className="text-2xl font-bold mb-2 text-yellow-500">{exp.role}</h3>
                <p className="text-gray-600 mb-1">{exp.company} - {exp.duration}</p>
                <p className="text-gray-700 mb-4">{exp.description}</p>
                <p className="text-gray-500 italic">{exp.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section id="services" className="bg-white py-12 px-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-yellow-500 text-center">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-100 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                <h3 className="text-2xl font-bold mb-4 text-yellow-500">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-yellow-100 py-12 px-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-yellow-500">Testimonials</h2>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-8">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <p className="text-gray-700 text-justify leading-relaxed mb-6 whitespace-pre-line">{testimonial.feedback}</p>
                  <h4 className="text-2xl font-semibold text-right text-yellow-300">{testimonial.name}</h4>
                  <p className="text-right text-gray-600 italic">{testimonial.occupation}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section id="contact" className="bg-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/path-to-your-image.jpg")', opacity: 0.1 }}></div>
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-5xl font-bold mb-8 text-yellow-500 animate-fade-in">Get in Touch</h2>
        <p className="text-xl mb-8 px-16 text-gray-600 animate-fade-in">
          We would love to hear from you. Reach out to us through any of the following methods. 
          Whether you have questions, feedback, or simply want to connect, we're here for you. 
          Our team is dedicated to providing the best support possible and ensuring all your inquiries 
          are addressed promptly. Don't hesitate to drop us a message!
        </p>
        <div className="flex flex-col items-center space-y-6">
          <a
            href={whatsappLink}
            className="bg-yellow-500 text-white py-3 px-6 rounded-full inline-flex items-center hover:bg-yellow-600 transition transform hover:-translate-y-1 duration-300 shadow-lg animate-bounce"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="mr-2" /> Connect via WhatsApp
          </a>
          <div className="flex space-x-4 text-3xl">
            <a target='_blank' href="mailto:priyankamaurya27@gmail.com" className="text-yellow-300 hover:text-yellow-500 transition duration-300">
              <FaEnvelope />
            </a>
            <a target='_blank' href="tel:+917667238292" className="text-yellow-300 hover:text-yellow-500 transition duration-300">
              <FaPhoneAlt />
            </a>
            <a target='_blank' href="https://www.facebook.com/drpriyankamaurya27" className="text-yellow-300 hover:text-yellow-500 transition duration-300">
              <FaFacebook />
            </a>
            <a target='_blank' href="https://www.instagram.com/drpriyankamaurya27/" className="text-yellow-300 hover:text-yellow-500 transition duration-300">
              <FaInstagram />
            </a>
            <a target='_blank' href="https://www.linkedin.com/in/drpriyankamaurya27/" className="text-yellow-300 hover:text-yellow-500 transition duration-300">
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
};

export default SocialWork;
