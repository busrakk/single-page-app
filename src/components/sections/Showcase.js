import React, { useRef } from "react";
import { keyframes, styled } from "styled-components";
import img1 from "../../assets/Nfts/bighead.svg";
import img2 from "../../assets/Nfts/bighead-1.svg";
import img3 from "../../assets/Nfts/bighead-2.svg";
import img4 from "../../assets/Nfts/bighead-3.svg";
import img5 from "../../assets/Nfts/bighead-4.svg";
import img6 from "../../assets/Nfts/bighead-5.svg";
import img7 from "../../assets/Nfts/bighead-6.svg";
import img8 from "../../assets/Nfts/bighead-7.svg";
import img9 from "../../assets/Nfts/bighead-8.svg";
import img10 from "../../assets/Nfts/bighead-10.svg";
import ETH from "../../assets/icons8-ethereum-48.png";

const move = keyframes`
0% {
  transform: translateX(100%);
};
  100% {
    transform: translateX(-100%);
  };
`;

const Section = styled.section`
  & > *:first-child {
    animation-duration: 20s;
  }
  & > *:last-child {
    animation-duration: 15s;
  }
`;

const Row = styled.div`
  animation: ${move} linear infinite ${(props) => props.direction};
`;

const NftItem = ({ img, number = 0, price = 0, passRef }) => {
  let play = (e) => {
    passRef.current.style.animationPlayState = "running";
  };

  let pause = (e) => {
    passRef.current.style.animationPlayState = "paused";
  };

  return (
    <div
      className="w-60 mx-4 my-auto rounded-2xl cursor-pointer bg-[#fff]"
      onMouseOver={(e) => pause(e)}
      onMouseOut={(e) => play(e)}
    >
      <img src={img} alt="The Weirdos" className="w-full h-auto" />
      <div className="flex justify-between px-4 py-3.5 bg-[#202020] border-2 border-solid border-[#fff] border-opacity-50 rounded-bl-2xl rounded-br-2xl">
        <div>
          <span className="text-fontsm text-[#fff] text-opacity-50 font-medium leading-6">
            Weirdos
          </span>
          <h1 className="text-fontmd text-[#fff]">#{number}</h1>
        </div>
        <div>
          <span className="text-fontsm text-[#fff] text-opacity-50 font-medium leading-6">
            Price
          </span>
          <div className="flex justify-start items-center">
            <img src={ETH} alt="ETH" className="w-4 h-auto" />
            <h1 className="text-fontmd text-[#fff]">
              {Number(price).toFixed(1)}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

const Showcase = () => {
  const Row1Ref = useRef(null);
  const Row2Ref = useRef(null);
  return (
    <Section className="min-h-screen w-screen relative bg-[#202020] flex flex-col justify-center items-center">
      <Row direction="none" ref={Row1Ref}>
        <div className="whitespace-nowrap box-border my-8 flex">
          <NftItem img={img1} number={654} price={0.5} passRef={Row1Ref} />
          <NftItem img={img2} number={654} price={0.5} passRef={Row1Ref} />
          <NftItem img={img3} number={654} price={0.5} passRef={Row1Ref} />
          <NftItem img={img4} number={654} price={0.5} passRef={Row1Ref} />
          <NftItem img={img5} number={654} price={0.5} passRef={Row1Ref} />
        </div>
      </Row>
      <Row direction="reverse" ref={Row2Ref}>
        <div className="whitespace-nowrap box-border my-8 flex">
          <NftItem img={img6} number={654} price={0.5} passRef={Row2Ref} />
          <NftItem img={img7} number={654} price={0.5} passRef={Row2Ref} />
          <NftItem img={img8} number={654} price={0.5} passRef={Row2Ref} />
          <NftItem img={img9} number={654} price={0.5} passRef={Row2Ref} />
          <NftItem img={img10} number={654} price={0.5} passRef={Row2Ref} />
        </div>
      </Row>
    </Section>
  );
};

export default Showcase;
