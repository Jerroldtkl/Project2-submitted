import React from "react";
import { Carousel } from "react-responsive-carousel";
import styles from "./Carousel.module.css";

function Carousel2() {
  return (
    <div className={styles.images}>
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={false}
        stopOnHover={false}
        showThumbs={false}
      >
        <div>
          <img
            className={styles.images}
            alt=""
            src="https://static.thehoneycombers.com/wp-content/uploads/sites/2/2015/08/Bitters-Love2.jpg"
          />
        </div>
        <div>
          <img
            className={styles.images}
            alt=""
            src="https://static.thehoneycombers.com/wp-content/uploads/sites/2/2015/08/Shin-Gi-Tai.jpg"
          />
        </div>
        <div>
          <img
            className={styles.images}
            alt=""
            src="https://static.thehoneycombers.com/wp-content/uploads/sites/2/2015/08/Bago.jpg"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Carousel2;
