import React from "react";
import { styled } from "styled-components";
import Logo from "../Logo";
import "./index.css";
import Button from "../Button";

const Section = styled.section`
  width: 100vw;
  background-color: ${(props) => props.theme.body};
`;

const Navigation = () => {
  return (
    <Section>
      <div className="flex justify-between items-center w-5/6 h-20 mx-auto list-none">
        <Logo />
        <ul className="menu">
          <li className="menu-item">Home</li>
          <li className="menu-item">About</li>
          <li className="menu-item">Roadmap</li>
          <li className="menu-item">Showcase</li>
          <li className="menu-item">Team</li>
          <li className="menu-item">Faq</li>
        </ul>
        <Button text="Connect Wallet" link="/#" />
      </div>
    </Section>
  );
};

export default Navigation;
