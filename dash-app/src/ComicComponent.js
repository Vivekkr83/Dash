import React from "react";
import "./styles2.css";

const ComicComponent = () => {
  return (
    <div className="comic">
      <div className="panel">
        <p className="text top-left">Begin...</p>
        <p className="text bottom-right">...next photo</p>
      </div>
      <div className="panel"></div>
      <div className="panel"></div>
      <div className="panel">
        <p className="text bottom-right">...</p>
        <p className="speech">A speech bubble</p>
      </div>
      <div className="panel"></div>
      <div className="panel">
        <p className="text top-left">...</p>
      </div>
      <div className="panel"></div>
      <div className="panel"></div>
      <div className="panel"></div>
      <div className="panel">
        <p className="text bottom-right">THE END</p>
      </div>
    </div>
  );
};

export default ComicComponent;
