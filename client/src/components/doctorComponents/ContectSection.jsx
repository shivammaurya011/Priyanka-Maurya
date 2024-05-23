import React, { useState } from 'react';

const ContactSection = () => {
  const [isThankYouModalOpen, setThankYouModalOpen] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

  const name = e.target.elements.name.value;
  const email = e.target.elements.email.value;
  const message = e.target.elements.textarea.value;

  if (!name || !email || !message) {
    alert('Please fill in all required fields');
    return;
  }
  setThankYouModalOpen(true);
  };

  const closeThankYouModal = () => {
    setThankYouModalOpen(false);
  };
  const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="absolute bg-white p-8 rounded shadow-lg">
          {children}
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  };
  
  const ContactInfo = ({ icon, title, address1, address2 }) => {
    return (
      <li className="flex">
        <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-500 text-blue-700">
          {icon}
        </div>
        <div className="ml-4 mb-4">
          <h3 className="mb-2 text-lg font-medium leading-6 dark:text-blue-700 text-blue-700">{title}</h3>
          <p className="text-gray-100 dark:text-slate-100">{address1}</p>
          <p className="text-gray-100 dark:text-slate-100">{address2}</p>
        </div>
      </li>
    );
  };
  return (
    <section className="bg-blue-500" id="contact">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-4 lg:px-4 lg:py-4">
        <div className="mb-2">
          <div className=" max-w-3xl text-center sm:text-center md:mx-auto">
            {/* <p className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
              Contact
            </p> */}
            <h2 className="font-heading font-bold tracking-tight text-white text-3xl sm:text-5xl">
              Get in Touch
            </h2>
            {/* <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
              In hac habitasse platea dictumst
            </p> */}
          </div>
        </div>
        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2">
            {/* Address and Contact Info */}
            <div className="h-full pr-6">
              <p className="mt-3 mb-12 text-lg text-blue-500">
                Class aptent taciti sociosqu ad litora torquent per hg jjjjj
              </p>
              <ul className="mb-6 md:mb-0">
          <ContactInfo
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
              </svg>
            }
            title="Our Address"
            address1="UGF3, Pratap Plaza, Sector B, LDA Colony,"
            address2="Lucknow, Uttar Pradesh, India"
          />
          <ContactInfo
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                <path d="M15 7a2 2 0 0 1 2 2"></path>
                <path d="M15 3a6 6 0 0 1 6 6"></path>
              </svg>
            }
            title="Contact"
            address1="Mobile: +91 7667238292"
            address2="Mail: priyankamaurya27@gmail.com"
          />
          <ContactInfo
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                <path d="M12 7v5l3 3"></path>
              </svg>
            }
            title="Working hours"
            address1="Monday - Sunday: 10:00 - 20:00"
            address2="Thursday - Closed"
          />
        </ul>
            </div>
            {/* Contact Form */}
            <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
              {/* <h2 className="mb-4 text-2xl font-bold">Ready to Get Started?</h2> */}
              <form id="contactForm" onSubmit={(e) => handleFormSubmit(e)}>
                <div className="mb-6">
                  <div className="mx-0 mb-1 sm:mb-4">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label>
                      <input type="text" id="name" autoComplete="given-name" placeholder="Your name"
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-600 text-gray-600 sm:mb-0" name="name" />
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label>
                      <input type="email" id="email" autoComplete="email" placeholder="Your email address"
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-600 text-gray-600 sm:mb-0" name="email" />
                    </div>
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider"></label>
                    <textarea id="textarea" name="textarea" cols="30" rows="5" placeholder="Write your message..."
                      className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-600 text-gray-600 sm:mb-0"></textarea>
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-xl rounded-md sm:mb-0">Send Message</button>
                </div>
              </form>
            </div>
            <Modal isOpen={isThankYouModalOpen} onClose={closeThankYouModal}>
              <h2 className="mb-4 text-2xl font-bold">Thank you for reaching out!</h2>
              <p>Our team will connect with you soon.</p>
            </Modal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;