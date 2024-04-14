import React from "react";
import a1 from "../../assets/a1.png"
import a2 from "../../assets/a2.png"
import a3 from "../../assets/a3.png"
import a4 from "../../assets/a4.png"
import DoctorLayout from "../../layouts/DoctorLayout";

const AboutSection = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="w-full flex flex-col justify-center">
                <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">About Us</h1>
                <p className="font-normal text-base leading-6 text-gray-600 ">
                    Dr. Priyanka Maurya (B.H.M.S.) is a distinguished Homeopathy Physician & Consultant, hailing from Lucknow, Uttar Pradesh. With an extensive medical experience spanning over 8 years, she earned her B.H.M.S. degree from Gwalior University, showcasing her commitment to advancing her knowledge in the field of homeopathy.

                    A scion of healing, Dr. Priyanka Maurya draws inspiration from her father, Mr. Ram Briksh Maurya, a senior renowned Homeopathy doctor based in Azamgarh, Uttar Pradesh. This familial connection not only instilled in her a passion for holistic healthcare but also provided a strong foundation for her professional journey.

                    Dr. Priyanka Maurya's influence extends far beyond her practice, with a substantial following of over 5 lakh on social platforms like Facebook, Instagram, YouTube, and LinkedIn. A dedicated advocate for knowledge dissemination, she regularly shares valuable insights on Homeopathy, health, and social issues, connecting with a wide audience and making a positive impact on their lives.

                    Beyond her role as a healthcare professional, Dr. Priyanka Maurya is an active BJP politician. Her commitment to societal well-being is exemplified by her previous role as the Face of the "Ladki Hoon Lad Sakti Hoon" campaign initiated by Priyanka Gandhi Vadra in Uttar Pradesh.

                    Looking forward, Dr. Priyanka Maurya has ambitious plans to organize health camps, eye camps, and blood donation camps throughout India in collaboration with Indian Roti Bank. These initiatives aim to create awareness among the common and weaker sections of society about hygiene, cleanliness, food nutrition, and other health-related issues.

                    Dr. Priyanka Maurya's journey is not merely a professional trajectory but a holistic approach towards healing and societal welfare. Join us in celebrating her dedication to healthcare, social causes, and the vision of a healthier, more informed society.
                </p>
            </div>
        </div>
    );
};

const ImageSection = () => {
  return (
      <div className="flex flex-wrap mt-8 justify-around">
          <img className="rounded-lg mb-4 sm:w-full md:w-1/2 lg:w-1/4 xl:w-1/4" src={a1} alt="about image" />
          <img className="rounded-lg mb-4 sm:w-full md:w-1/2 lg:w-1/4 xl:w-1/4" src={a2} alt="about image" />
          <img className="rounded-lg mb-4 sm:w-full md:w-1/2 lg:w-1/4 xl:w-1/4" src={a3} alt="about image" />
          <img className="rounded-lg mb-4 sm:w-full md:w-1/2 lg:w-1/4 xl:w-1/4" src={a4} alt="about image" />
      </div>
  );
};


const About = () => {
    return (
        <DoctorLayout>
            <div className="2xl:container bg-blue-100 2xl:mx-auto lg:py-9 lg:px-20 md:py-6 md:px-6 py-4 px-4">
                <AboutSection />
                <ImageSection />
            </div>
        </DoctorLayout>
    );
};

export default About;
