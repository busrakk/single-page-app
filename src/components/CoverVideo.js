import React from "react";
import GIF from "../assets/Home Video.mp4";

const CoverVideo = () => {
  return (
    <div className="w-full">
      <video
        src={GIF}
        type="video/mp4"
        autoPlay
        muted
        loop
        className="w-full h-auto"
      />
    </div>
  );
};

export default CoverVideo;
