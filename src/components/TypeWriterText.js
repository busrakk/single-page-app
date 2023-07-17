import React from "react";
import Button from "./Button";
import Typewriter from "typewriter-effect";

const TypeWriterText = () => {
  return (
    <>
      <h2 className="text-fontxxl font-semibold capitalize w-[440px] text-[#202020] self-start">
        Discover a new era of cool
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                '<span class="uppercase font-akaya text-blue-600">NFTs.</span>'
              )
              .pauseFor(2000)
              .deleteAll()
              .typeString(
                '<span class="uppercase font-akaya text-orange-600">Collectible Items.</span>'
              )
              .pauseFor(2000)
              .deleteAll()
              .typeString(
                '<span class="uppercase font-akaya text-red-600">Ape Killers!</span>'
              )
              .deleteAll()
              .start();
          }}
        />
      </h2>
      <div className="text-fontlg capitalize text-[#202020] text-opacity-60 font-semibold mb-4 w-[440px] self-start">
        Bored Of Apes? Try Something New.
      </div>
      <div className="w-80 self-start">
        <Button text="Explore" link="#about" />
      </div>
    </>
  );
};

export default TypeWriterText;
