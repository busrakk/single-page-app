import React from "react";
import TypeWriterText from "../TypeWriterText";
import CoverVideo from "../CoverVideo";
import RoundedTextBlack from "../../assets/Rounded-Text-Black.png";
import { keyframes, styled } from "styled-components";

const rotate = keyframes`
  100% {
    transform: rotate(1turn);
  }
`;

const Round = styled.div`
  img {
    animation: ${rotate} 6s linear infinite reverse;
  }
`;

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)] w-screen relative bg-[#fff]">
      <div className="w-3/4 min-h-[80vh] mx-auto flex justify-center items-center">
        <div className="w-1/2 h-full flex flex-col justify-center items-center">
          <TypeWriterText />
        </div>
        <div className="w-1/2 h-full flex flex-col justify-center items-center">
          <CoverVideo />
        </div>
        <Round>
          <div className="absolute bottom-8 w-24 h-24 left-12 border-2 border-[#202020] rounded-full">
            <span className="w-12 h-12 flex justify-center items-center rounded-full text-[#fff] bg-[#202020] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-fontxl">
              &#x2193; {/* arrow hex code */}
            </span>
            <img src={RoundedTextBlack} alt="NFT" className="w-full h-auto" />
          </div>
        </Round>
      </div>
    </div>
  );
};

export default Home;
