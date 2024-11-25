import "./About.css";
import about from "/src/Assets/Images/about.jpg";
import Image from "react-bootstrap/Image";



const About = () => {
  return (
    <div className="page">
      <h3 className="font-face-rumor-sm header">About</h3>
      <Image
              src={about}
              rounded
              width="600"
              height="750"
              // className="d-inline-block align-top"
              className="img"
              alt="Adkins Music Logo"
      />
      <div className="text">
        <p>Fiction is a music endeavor that has been rattling around in Sam Adkins' brain 
          for far too long.
        </p>
        <p>Sam Adkins has been singing and playing guitars 
          since the mid-90s. He draws inspiration from the music of that decade as well as 
          a healthy musical upbringing on artists like Steve Winwood, the
          Beatles, the Stones, 80s music, and indie pop. He spent his youth in numerous musical 
          projects and bands, performing for theatrical productions, and generally rocking out 
          in many bars (and on quite a few couches).
        </p>
        <p>Fiction can be booked to play sets of original and cover music for up to three hours. 
          Set list selections can be defined and catered to the event.
          Please visit the Music, Video, and Photo pages to get a sense of musicality and presence.
          Then head on over to the Contact page for bookings. Thanks for the visit!
        </p>
      </div>
    </div>
  );
};

export default About;
