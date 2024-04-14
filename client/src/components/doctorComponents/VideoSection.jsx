import React from "react";

const VideoSection = () => {
  const videos = [
    { id: "video1", link: "j-USUw2SBic" },
    { id: "video2", link: "RJZczHiymLY" },
    { id: "video3", link: "iHYVcs5Vlgg" },
    { id: "video4", link: "8SRcOT0qHrI" },
    { id: "video5", link: "IoZVioBOcvA" },
    { id: "video6", link: "CK_jLAIPi-M" },
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

  return (
    <section className="py-16 px-6 lg:px-10 bg-gray-100">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="block text-lg font-semibold text-primary">Our Videos</span>
          <h2 className="text-3xl font-bold leading-[1.2] text-blue-800 sm:text-4xl md:text-5xl">
            Health Insights
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <CardWithVideo key={video.id} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
