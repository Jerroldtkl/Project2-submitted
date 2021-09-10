import React from "react";
import Carousel1 from "../carousel/Carousel1";
import Carousel2 from "../carousel/Carousel2";
import Carousel3 from "../carousel/Carousel3";

function DesignImage() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Carousel1 />
          </div>
          <div className="col-md-4">
            <Carousel2 />
          </div>
          <div className="col-md-4">
            <Carousel3 />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default DesignImage;
