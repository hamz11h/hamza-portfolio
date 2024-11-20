import React from "react";
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import styles from "./Carousel.module.scss";

const Carousel = ({ items }) => {
  return (
    <div className={styles.carouselWrapper}>
      <ResponsiveCarousel
        showThumbs={true} // Hide thumbnail images
        autoPlay={false} // Enable auto play
        infiniteLoop={true} // Infinite loop for carousel
        stopOnHover={true} // Stop auto-play on hover
        showStatus={false} // Hide status like "1 of 5"
        dynamicHeight={true} // Adjust height according to content
      >
        {items.map((item, index) => (
          <div key={index} className={styles.carouselItem}>
            <img src={item.image} alt={item.alt} className={styles.image} />
          </div>
        ))}
      </ResponsiveCarousel>
    </div>
  );
};

export default Carousel;
