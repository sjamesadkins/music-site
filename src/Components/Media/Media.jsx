import "./Media.css";
import help from "/src/Assets/Videos/help.mp4";
import helpPoster from "/src/Assets/Videos/help-poster.jpg";
import desperado from "/src/Assets/Videos/desperado.mp4";
import desperadoPoster from "/src/Assets/Videos/desperado-poster.jpg";
import fastasyou from "/src/Assets/Videos/fastasyou.mp4";
import fastasyouPoster from "/src/Assets/Videos/fastasyou-poster.jpg";
import moreThanWords from "/src/Assets/Videos/more-than-words.mp4";
import moreThanWordsPoster from "/src/Assets/Videos/more-than-words-poster.jpg";
import tearsforfears from "/src/Assets/Videos/tearsforfears.mp4";
import tearsforfearsPoster from "/src/Assets/Videos/tearsforfears-poster.jpg";
import chicago from "/src/Assets/Images/chicago.jpeg";
import pressKit from "/src/Assets/Files/Silvertones_EPK_QR_Media.pdf";

const tiles = [
  { type: "video", src: help, poster: helpPoster, label: "Help" },
  { type: "video", src: fastasyou, poster: fastasyouPoster, label: "Fast as You" },
  { type: "video", src: moreThanWords, poster: moreThanWordsPoster, label: "More Than Words" },
  { type: "video", src: desperado, poster: desperadoPoster, label: "Desperado" },
  { type: "image", src: chicago, alt: "Chicago", download: true },
  { type: "video", src: tearsforfears, poster: tearsforfearsPoster, label: "Everybody Wants to Rule the World" },
];

const Media = () => (
  <div className="page">
    <div className="grid-container">
      {tiles.map((tile, i) => (
        <div key={i} className={`grid-item${tile.type === "video" ? " video-item" : ""}`}>
          {tile.type === "image" ? (
            <>
              {tile.download ? (
                <a
                  className="press-kit-photo-link"
                  href={pressKit}
                  download="Silvertones_EPK_QR_Media.pdf"
                  aria-label="Download The Silvertones electronic press kit (PDF)"
                >
                  <img className="tile-media" src={tile.src} alt={tile.alt} />
                </a>
              ) : (
                <img className="tile-media" src={tile.src} alt={tile.alt} />
              )}
              {tile.download && <div className="tile-label press-kit-label">Download Press Kit</div>}
            </>
          ) : (
            <>
              <video
                className="tile-media"
                src={tile.src}
                poster={tile.poster}
                controls
                controlsList="nodownload"
                playsInline
                preload="metadata"
              />
              <div className="tile-label">{tile.label}</div>
            </>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default Media;
