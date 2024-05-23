import React, { useState } from 'react';

const FaqSection = () => {
  const faqData = [
    {
      question: 'Is there a weekly off?',
      answer:
        "Yes, our clinic observes a weekly off day every Thursday.",
    },
    {
      question: 'What are the payment options?',
      answer:
        'We currently accept almost all payment options. You can choose the preferred payment method during the checkout process.',
    },
    {
      question: 'How can I book an appointment?',
      answer:
        'You can book through our website or contact the clinic directly by phone.',
    },
    {
      question: 'Can homeopathy treat children and pregnant women?',
      answer:
        'Yes, homeopathy is safe for all ages, including children and pregnant women.',
    },
  ];

  const [isOpen, setIsOpen] = useState(Array(faqData.length).fill(false));

  const toggleAnswer = (index) => {
    setIsOpen((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <section className="py-2 sm:py-8 bg-blue-100 lg:py-16">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-blue-500 sm:text-4xl lg:text-5xl">
            Explore Common Questions
          </h2>
          <p className='m-4 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem maxime totam similique magnam facilis iste.</p>
        </div>
        <div className="max-w-3xl mx-auto mt-4 space-y-2 md:mt-4">
          {faqData.map((data, index) => (
            <div
              key={`question${index}`}
              className="transition-all duration-200 bg-white rounded-md border-gray-200 cursor-pointer hover:bg-gray-50"
            >
              <button
                type="button"
                onClick={() => toggleAnswer(index)}
                className="flex items-center justify-between w-full px-4 py-2 sm:p-6"
              >
                <span className="flex text-lg font-semibold text-black">
                  {data.question}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={`w-6 h-6 text-gray-400 ${isOpen[index] ? 'rotate-0' : 'rotate-180'}`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                style={{ display: isOpen[index] ? 'block' : 'none' }}
                className="px-4 pb-5 sm:px-6 sm:pb-6"
              >
                <p>{data.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
