import React from "react";
import { Carousel } from "react-responsive-carousel";
import styles from "./Carousel.module.css";

function Carousel3() {
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
            src="https://static.thehoneycombers.com/wp-content/uploads/sites/2/2017/05/Old-Man-Singapore-cocktail-bars-singapore-900x643.png"
          />
        </div>
        <div>
          <img
            className={styles.images}
            alt=""
            src="https://static.thehoneycombers.com/wp-content/uploads/sites/2/2019/06/Mo-bar-singapore-900x643.png"
          />
        </div>
        <div>
          <img
            className={styles.images}
            alt=""
            src="https://static.thehoneycombers.com/wp-content/uploads/sites/2/2019/11/sago-house-900x643.png"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Carousel3;
