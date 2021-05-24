import React from "react";

import ImageWithGradient from "../../atoms/ImageWithGradient/ImageWithGradient";
import RoundButtonWithIco from "../../atoms/Buttons/RoundButtonWithIco";
import Play from "../../icons/Play.js";
import './YoutubeVideo.scss';

function YoutubeVideo({ src, alt, videoUrl }) {
  return (
    <div className="m-youtubeVideo">
      <ImageWithGradient src={src} alt={alt} />
      <div className="m-youtubeVideo__btn">
        <RoundButtonWithIco><Play className="m-youtubeVideo__ico" /></RoundButtonWithIco>
      </div>
    </div>
  );
}

export default YoutubeVideo;
