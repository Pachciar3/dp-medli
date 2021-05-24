import React from "react";

import Navbar from "../organisms/Navbar/Navbar";
import Header from "../organisms/Header/Header";
import OurNumbers from "../organisms/OurNumbers/OurNumbers";
import Section from "../organisms/Sections/Section";
import SectionWithVideo from "../organisms/Sections/SectionWithVideo";
import Tiles from "../organisms/Tiles/Tiles";
import Footer from "../organisms/Footer/Footer";
import SectionTextContent from "../molecules/SectionTextContent/SectionTextContent";
import {
  links,
  image,
  textContent,
  ourNumbers,
  sectionWithVideo,
  services,
  footerLinks,
  footerNewsletter,
  servicesSectionTextContent
} from "../data/data";

const appUrl = process.env.REACT_APP_URL;

function Home() {
  return (
    <div className="Home">
      <Navbar links={links} logoUrl={`${appUrl}/images/logo.png`} />
      <Header image={image} textContent={textContent} />
      <Section>
        <OurNumbers ourNumbers={ourNumbers} />
      </Section>
      <SectionWithVideo sectionWithVideo={sectionWithVideo}>xDDD</SectionWithVideo>
      <Section>
        <SectionTextContent
          header={servicesSectionTextContent.header}
          description={servicesSectionTextContent.description}
        />
        <Tiles data={services} />
      </Section>
      <Footer
        logoUrl={`${appUrl}/images/logo-white.png`}
        links={footerLinks} newsletter={footerNewsletter}>
      </Footer>
    </div>
  );
}

export default Home;
