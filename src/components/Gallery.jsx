import React from "react";
import Masonry from "react-masonry-css";
import "./../styles/Gallery.css";
import image1 from "./../assets/image1.png";
import image2 from "./../assets/image2.png";
import image4 from "./../assets/image4.png";
import image5 from "./../assets/image5.png";
import image6 from "./../assets/image6.png";
import image9 from "./../assets/image9.png";
import image13 from "./../assets/image13.png";
import image14 from "./../assets/image14.png";
import image15 from "./../assets/image15.png";
import image16 from "./../assets/image16.png";
import image17 from "./../assets/image17.png";
import image24 from "./../assets/image24.png";


const images = [
  image1,
  image2,
  image4,
  image5,
  image6,
  image9,
  image13,
  image14,
  image15,
  image16,
  image17,
  image24
];

export default function Gallery() {
  const breakpointColumns = {
    default: 4,
    1100: 3,
    768: 2,
    500: 1,
  };

  return (
    <div className="gallery-container">
      <Masonry
        breakpointCols={breakpointColumns}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {images.map((src, i) => (
          <div key={i} className="masonry-item">
            <img src={src} alt={`img-${i}`} />
          </div>
        ))}
      </Masonry>
    </div>
  );
}
