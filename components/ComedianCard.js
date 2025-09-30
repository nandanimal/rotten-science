import React, { useState } from "react";

const ComedianCard = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative max-w-sm rounded-xl overflow-hidden"
            style={{
                aspectRatio: ".77",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src="/jerrod.png"
                alt="Comedian"
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: isHovered ? "none" : "block",
                }}
            />
            <video
                src="/vid.mp4"
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: isHovered ? "block" : "none",
                }}
                autoPlay
                loop
                muted
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-opacity-50 text-white">
                <h2 className="text-xl font-bold">Comedian Name</h2>
            </div>
        </div>
    );
};

export default ComedianCard;
