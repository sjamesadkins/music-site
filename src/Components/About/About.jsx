import "./About.css";
import pressKit from "/src/Assets/Files/Silvertones_EPK_QR_Media.pdf";

const About = () => (
  <div className="page">
    <div className="text">
      <p>The Silvertones are a duo consisting of Sam Adkins and Kevin Korinek hailing from Saint Louis, MO. They play genres spanning pop, rock, soul, and country using guitars and harmony. They make great music and build a vibe.</p>
      <p>Artists they cover include The Beatles, Bowie, Radiohead, Dwight Yoakam, Queen, Stevie Wonder, and many more. Please inquire on the Contact page for a full list.</p>
      <p className="press-kit-download">
        <a href={pressKit} download="Silvertones_EPK_QR_Media.pdf">Download Press Kit</a>
      </p>
    </div>
  </div>
);

export default About;
