import "./Media.css";
import first from "/src/Assets/Images/1.jpg";
import second from "/src/Assets/Images/2.jpg";
import third from "/src/Assets/Images/3.jpg";
import Image from "react-bootstrap/Image";

const content = [first, second, third, first, second, third]

const Media = () => {
  return (
    <div className="page">
      {/* <h3 className="font-face-rumor-sm header">Media</h3> */}
      <div className="grid-container">
        {content.map((item, index) => {
          return (<Image
              key={index}
              className="grid-item img"
              src={item}
              rounded
              alt="1"
            />
          )})}
      </div>
    </div>
  );
};

export default Media;