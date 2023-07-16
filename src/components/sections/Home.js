import React from "react";
import TypeWriterText from "../TypeWriterText";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)] w-screen relative bg-[#fff]">
      <div className="w-3/4 min-h-[80vh] mx-auto bg-blue-200 flex justify-center items-center">
        <div className="w-1/2 h-full flex flex-col justify-center items-center">
          <TypeWriterText />
        </div>
        <div className="w-1/2 h-full flex flex-col justify-center items-center">
          <h1>video</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
