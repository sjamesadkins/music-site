import "./Photos.css";
import first from "/src/Assets/Images/1.jpg";
import second from "/src/Assets/Images/2.jpg";
import third from "/src/Assets/Images/3.jpg";
import fourth from "/src/Assets/Images/4.jpg";
import fifth from "/src/Assets/Images/5.jpg";
import sixth from "/src/Assets/Images/6.jpg";
import Image from "react-bootstrap/Image";

const Photos = () => {
  return (
    <div className="page flex">
      <h3 className="font-face-rumor-sm header">Photos</h3>
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
    </div>
  );
};

export default Photos;
