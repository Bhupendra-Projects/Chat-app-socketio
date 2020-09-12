import React from "react";
import "./InfoBar.css";

import onLineIcon from '../../Icons/onlineIcon.png';
import closeIcon from '../../Icons/closeIcon.png';


const InfoBar = ({room}) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
        <img className="onLineIcon" src={onLineIcon} alt="online"/>
        <h3>{room}</h3>
    </div>

    <div className="rightInnerContainer">
        <a href="/"><img src={closeIcon} alt="close"/></a>
    </div>
  </div>
);
export default InfoBar
