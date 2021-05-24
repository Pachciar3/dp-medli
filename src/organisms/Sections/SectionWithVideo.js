import React from "react";

import SectionTextContent from "../../molecules/SectionTextContent/SectionTextContent";
import YoutubeVideo from "../../molecules/YoutubeVideo/YoutubeVideo";
import "./Section.scss";

function SectionWithVideo({ sectionWithVideo }) {
  return (
    <section className="o-section o-section--colored o-sectionWithVideo">
      <div className="o-sectionWithVideo__text">
        <SectionTextContent
          header={sectionWithVideo.header}
          description={sectionWithVideo.description}
        />
      </div>
      <div className="o-sectionWithVideo__video">
        <YoutubeVideo
        src={sectionWithVideo.src}
        alt={sectionWithVideo.alt}
        videoUrl={sectionWithVideo.videoUrl}
        />
      </div>  
    </section>
  );
}

export default SectionWithVideo;
