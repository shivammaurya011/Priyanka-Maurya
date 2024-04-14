import React from "react";
import DoctorLayout from "../../layouts/DoctorLayout";

const CommingSoonPage = () => {
  return (
    <DoctorLayout>
      <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center">
        <h1 className="text-5xl text-blue-800 font-bold mb-8 animate-pulse">
          Coming Soon
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
      </div>
    </DoctorLayout>
  );
};

export default CommingSoonPage;
