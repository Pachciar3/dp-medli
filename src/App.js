import React from "react";

import './App.scss';
import Navbar from "./organisms/Navbar/Navbar";
import Header from "./organisms/Header/Header";
import OurNumbers from "./organisms/OurNumbers/OurNumbers";
import Section from "./organisms/Sections/Section";
import SectionWithVideo from "./organisms/Sections/SectionWithVideo";
import Tiles from "./organisms/Tiles/Tiles";
import Footer from "./organisms/Footer/Footer";
import SectionTextContent from "./molecules/SectionTextContent/SectionTextContent";

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

const sectionWithVideo = {
  header: "What our community is saying?",
  description: "A mission-driven company that invest in and builds healthier living",
  src: `${appUrl}/images/video-image.png`,
};

const services = [
  {
    id: 1,
    image: `${appUrl}/images/service-1.png`,
    title: "1 FREE chat session",
    desc: "Start with a free text based chat session online"
  },
  {
    id: 2,
    image: `${appUrl}/images/service-2.png`,
    title: "Personal Coach",
    desc: "A dedicated coach to help you through your journey"
  },
  {
    id: 3,
    image: `${appUrl}/images/service-3.png`,
    title: "Text chat session",
    desc: "An excellent way of preaparing a projects wireframe"
  }
];

const footerLinks = [
  {
    id: 1, title: "Product", links: [
      {
        id: 1,
        name: "Updates",
        href: "ss"
      },
      {
        id: 2,
        name: "Security",
        href: "ss"
      },
      {
        id: 3,
        name: "Chrome Extension",
        href: "ss"
      },
    ]
  },
  {
    id: 2, title: "Company", links: [
      {
        id: 1,
        name: "About",
        href: "ss"
      },
      {
        id: 2,
        name: "Blog",
        href: "ss"
      },
      {
        id: 3,
        name: "Join us",
        href: "ss"
      },
    ]
  },
  {
    id: 2, title: "Help", links: [
      {
        id: 1,
        name: "Talk to Support",
        href: "ss"
      },
      {
        id: 2,
        name: "Support Docs",
        href: "ss"
      },
      {
        id: 3,
        name: "API Docs",
        href: "ss"
      },
      {
        id: 3,
        name: "System Status",
        href: "ss"
      },
    ]
  }
];

const footerNewsletter = {
  placeholder: "Enter your email",
  label: "Try Medli for free",
  buttonText: "Get started"
};

function App() {
  return (
    <div className="App">
      <Navbar links={links} logoUrl={`${appUrl}/images/logo.png`} />
      <Header image={image} textContent={textContent} />
      <Section>
        <OurNumbers ourNumbers={ourNumbers} />
      </Section>
      <SectionWithVideo sectionWithVideo={sectionWithVideo}>xDDD</SectionWithVideo>
      <Section>
        <SectionTextContent
          header="What you’re getting?"
          description="We bring you personalized development programs that are backed by research and crafted from the years of experience"
        />
        <Tiles data={services} />
      </Section>
      <Footer logoUrl={`${appUrl}/images/logo-white.png`} links={footerLinks} newsletter={footerNewsletter}>
      </Footer>
    </div>
  );
}

export default App;
