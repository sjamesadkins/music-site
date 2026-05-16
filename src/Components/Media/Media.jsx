import "./Media.css";
import desperado from "/src/Assets/Videos/desperado.mp4";
import fastasyou from "/src/Assets/Videos/fastasyou.mp4";
import tearsforfears from "/src/Assets/Videos/tearsforfears.mp4";
import genes from "/src/Assets/Images/genes.jpeg";
import chicago from "/src/Assets/Images/chicago.jpeg";
import tik from "/src/Assets/Images/tik.jpeg";

const tiles = [
  { type: "video", src: desperado, label: "Desperado" },
  { type: "video", src: fastasyou, label: "Fast as You" },
  { type: "video", src: tearsforfears, label: "Everbody Wants to Rule..." },
  { type: "image", src: genes, alt: "Genes" },
  { type: "image", src: chicago, alt: "Chicago" },
  { type: "image", src: tik, alt: "Tik" },
];

const Media = () => (
  <div className="page">
    <div className="grid-container">
      {tiles.map((tile, i) => (
        <div key={i} className="grid-item">
          {tile.type === "image" ? (
            <img className="tile-media" src={tile.src} alt={tile.alt} />
          ) : (
            <>
              <video
                className="tile-media"
                src={tile.src}
                controls
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
