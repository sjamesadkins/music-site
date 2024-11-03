import "./Videos.css";
import first from "/src/Assets/Images/1.jpg";
import second from "/src/Assets/Images/2.jpg";
import third from "/src/Assets/Images/3.jpg";
import Image from "react-bootstrap/Image";

const Videos = () => {
    return (
      <>
      <div className="page">
        <h3 className="font-face-rumor-sm header">Videos</h3>
        {/* <p>Sam Adkins' Video Page</p> */}
      </div>
      <div className="column">
        <Image
          className="img"
          src={first}
          rounded
          //   width="150%"
          //   height="150%"
          alt="1"
        />
        <Image
          className="img"
          src={second}
          rounded
          //   width="150%"
          //   height="150%"
          alt="2"
        />
        <Image
          className="img"
          src={third}
          rounded
          //   width="150%"
          //   height="150%"
          alt="3"
        />
      </div>
      <div className="column">
        <Image
          className="img"
          src={first}
          rounded
          //   width="150%"
          //   height="150%"
          alt="1"
        />
        <Image
          className="img"
          src={second}
          rounded
          //   width="150%"
          //   height="150%"
          alt="2"
        />
        <Image
          className="img"
          src={third}
          rounded
          //   width="150%"
          //   height="150%"
          alt="3"
        />
      </div>
    </>
  );
  };
  
  export default Videos;