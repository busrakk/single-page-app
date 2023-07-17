import React from "react";
import Carousel from "../Carousel";
import Button from "../Button";

const About = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center relative bg-[#202020]">
      <div className="w-3/4 mx-auto flex justify-center items-center">
        <div className="w-1/2 h-full flex flex-col justify-center items-center">
          <Carousel />
        </div>
        <div className="w-1/2 h-full flex flex-col justify-center items-center ml-10">
          <h2 className="text-fontxxl font-semibold capitalize text-[#fff] self-start mx-auto w-[500px]">
            Welcome To The Weirdos Club.
          </h2>
          <p className="text-fontlg font-normal my-4 text-[#fff] self-start mx-auto w-[500px]">
            The WEIRDOS CLUB is a private collection of NFTs—unique digital
            collectibles. The Weirdos are stored as ERC-721 tokens on the
            Ethereum blockchain and hosted on IPFS.
          </p>
          <p className="text-opacity-60 text-fontmd font-normal my-4 text-[#fff] self-start mx-auto w-[500px]">
            With more than 200+ hand drawn traits, each NFT is unique and comes
            with a membership to an exclusive group of successful investors.
            Join an ambitious ever-growing community with multiple benefits and
            utilities.
          </p>
          <div className="w-80 self-start my-4">
            <Button
              text="JOIN OUR DISCORD"
              link="#"
              className="bg-white text-[#202020] border-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
