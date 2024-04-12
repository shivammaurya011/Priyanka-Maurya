import React from "react";
import { Link } from "react-router-dom";
import profile from "../assets/profile.jpeg";
import { Button } from "flowbite-react";

function Landing() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-400 to-blue-500">
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col items-center px-28 space-y-8">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gradient-rose-300 shadow-blue hover:shadow-blue-dark transition duration-300">
            <img
              className="w-full h-full object-cover transform scale-105 hover:scale-110 transition-transform duration-300"
              src={profile}
              alt="Dr. Priyanka Maurya"
            />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">
            <span className="sr-only">Dr. Priyanka Maurya - </span> Hi, I'm Dr. Priyanka Maurya
          </h1>
          <p className="text-lg text-gray-700 text-center">
            Welcome to the digital home of Dr. Priyanka Maurya, where compassionate healthcare meets community leadership and social advocacy.
          </p>
          <div className="flex space-x-4">
            <Button outline gradientDuoTone="purpleToPink" >
              <Link to={"/doctor"} className="btn-link">
                Doctor
              </Link>
            </Button>
            <Button outline gradientDuoTone="pinkToOrange">
              <Link to={"/politician"} className="btn-link">
                Politician
              </Link>
            </Button>
            <Button outline gradientDuoTone="tealToLime">
              <Link to={"/social-work"} className="btn-link">
                Social Work
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
