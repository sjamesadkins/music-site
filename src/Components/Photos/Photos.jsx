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
        <div className="grid-tiles">
        <Image
              src={first}
              rounded
              width="500"
              height="600"
              className="d-inline-block align-top grid-tile"
              alt="1"
        /></div>
        <div className="grid-tiles">
        <Image
              src={second}
              rounded
              width="500"
              height="600"
              className="d-inline-block align-top grid-tile"
              alt="2"
        /></div>
        <div className="grid-tiles">
        <Image
              src={third}
              rounded
              width="500"
              height="600"
              className="d-inline-block align-top grid-tile"
              alt="3"
        /></div>
        <div className="grid-tiles">
        <Image
              src={fourth}
              rounded
              width="500"
              height="600"
              className="d-inline-block align-top grid-tile"
              alt="4"
        /></div>
        <div className="grid-tiles">
        <Image
              src={fifth}
              rounded
              width="500"
              height="600"
              className="d-inline-block align-top grid-tile"
              alt="5"
        /></div>
        <div className="grid-tiles">
        <Image
              src={sixth}
              rounded
              width="500"
              height="600"
              className="d-inline-block align-top grid-tile"
              alt="6"
        /></div>
      </div>
    );
  };
  
  export default Photos;