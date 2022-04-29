import "./Tour.scss";
import { useState } from "react";
export default function Tour(props) {
    const [showInfo, setShowInfo] = useState(false);
    const [removeTour, setRemoveTour] = useState(true);


    function handleShowInfo(){
        setShowInfo(!showInfo);
    }
    function handleRemoveTour() {
        setRemoveTour(false);
    }
    return removeTour && (
    <div className="tour">
      <div className="img-container">
        <img
          src={props.img}
          alt="img"
              />
              <span onClick={handleRemoveTour}>
              <i className="fas fa-window-close" />
              </span>
      </div>
      <div className="tour-info">
              <h3>{props.city}</h3>
              <h4>{ props.name}</h4>
        <h5>
          info
          <span onClick={handleShowInfo}>
            <i className="fas fa-caret-square-down" />
          </span>
              </h5>
              {showInfo && <p>{props.info }</p>}
              
      </div>
    </div>
  );
}
