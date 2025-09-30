import React from "react";

const HorizontalGallery = () => {
    const images = [
        "/com1.png",
        "/com2.png",
        "/com3.png",
        "/com4.png",
        "/com5.png",
        "/com6.png",
        "/com1.png",
        "/com2.png",
        "/com3.png",
        "/com4.png",
        "/com5.png",
        "/com6.png",
    ];

    return (
        <div className="horizontal-gallery w-full overflow-x-scroll flex space-x-4 p-2 -rotate-2 scale-110">
            {images.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    alt={`com ${index + 1}`}
                    className="h-96 object-cover"
                />
            ))}
        </div>
    );
};

export default HorizontalGallery;
