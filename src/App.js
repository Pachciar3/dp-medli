import React from "react";

import './App.scss';
import Navbar from "./organisms/Navbar/Navbar";
import Header from "./organisms/Header/Header";
import OurNumbers from "./organisms/OurNumbers/OurNumbers";
import Section from "./organisms/Section/Section";

const appUrl = process.env.REACT_APP_URL;

const links = [
  {
    id: "1",
    text: "Home"
  },
  {
    id: "2",
    text: "About"
  },
  {
    id: "3",
    text: "Courses"
  },
  {
    id: "4",
    text: "News"
  },
  {
    id: "5",
    text: "Contact"
  }
];

const image = {
  src: `${appUrl}/images/header-image.png`,
  alt: "The woman reading book"
};

const textContent = {
  head: `Check your well-being`,
  desc: "We’re sure that deciding to check on your health is a big step, even if it doesn’t bother in any way. ",
  linkText: "Get started",
  linkUrl: "/"
};

const ourNumbers = [
  {
    id: 1,
    number: "230+",
    text: "Scientifically based tests"
  },
  {
    id: 2,
    number: "10,000+",
    text: "Medical recommendations"
  },
  {
    id: 3,
    number: "25M+",
    text: "Students learning"
  }
];

function App() {
  return (
    <div className="App">
      <Navbar links={links} logoUrl={`${appUrl}/images/logo.png`} />
      <Header image={image} textContent={textContent} />
      <Section>
        <OurNumbers ourNumbers={ourNumbers} />
      </Section>
      <Section colored>xDDD</Section>
      <Section></Section>
    </div>
  );
}

export default App;
