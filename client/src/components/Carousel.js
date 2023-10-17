import { useState } from 'react';

import gallery7 from "../assets/img/gallery7.jpg";
import gallery8 from "../assets/img/gallery8.jpg";
import gallery9 from "../assets/img/gallery9.jpg";
import gallery10 from "../assets/img/gallery10.jpg";
import gallery11 from "../assets/img/gallery11.jpg";
import gallery12 from "../assets/img/gallery12.jpg";
import gallery13 from "../assets/img/gallery13.jpg";
import gallery14 from "../assets/img/gallery14.jpg";
import gallery15 from "../assets/img/gallery15.jpg";
import gallery16 from "../assets/img/gallery16.jpg";
import gallery17 from "../assets/img/gallery17.jpg";
import gallery18 from "../assets/img/gallery18.jpg";
import gallery19 from "../assets/img/gallery19.jpg";
import gallery20 from "../assets/img/gallery20.jpg";
import gallery21 from "../assets/img/gallery21.jpg";
import "./Carousel.scss";

const Carousel = () => {
    const images = [gallery7, gallery8, gallery9, gallery10, gallery11, gallery12, gallery13, gallery14, gallery15, gallery16, gallery17, gallery18, gallery19, gallery20, gallery21]; // Update with your imported images

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleThumbnailClick = (index) => {
        setCurrentIndex(index);
    };

    // Group images into rows of 6
    const rowsOfThumbnails = [];
    for (let i = 0; i < images.length; i += 5) {
        const row = images.slice(i, i + 5);
        rowsOfThumbnails.push(row);
    }

    return (
        <div className="carousel-container">
            <img
                className="carousel-image"
                src={images[currentIndex]}
                alt={`${currentIndex + 1}`}
            />

            <div className="thumbnails">
                {rowsOfThumbnails.map((row, rowIndex) => (
                    <div className="thumbnail-row" key={rowIndex}>
                        {row.map((image, columnIndex) => (
                            <img
                                key={columnIndex}
                                className={`thumbnail ${currentIndex === rowIndex * 5 + columnIndex ? 'active' : ''}`}
                                src={image}
                                alt={`${rowIndex * 5 + columnIndex + 1}`}
                                onClick={() => handleThumbnailClick(rowIndex * 5 + columnIndex)}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carousel;