import React from "react";

import ImageWithGradient from "../../atoms/ImageWithGradient/ImageWithGradient";
import RoundButtonWithIco from "../../atoms/Buttons/RoundButtonWithIco";
import icon from "../../icons/play.svg";
import './YoutubeVideo.scss';

function YoutubeVideo({ src, alt, videoUrl }) {
  return (
    <div className="m-youtubeVideo">
      <ImageWithGradient src={src} alt={alt} />
      <div className="m-youtubeVideo__btn">
        <RoundButtonWithIco><img src={icon} alt="play button" /></RoundButtonWithIco>
      </div>
    </div>
  );
}

export default YoutubeVideo;
