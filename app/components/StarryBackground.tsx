"use client"
import React, { useEffect, useState } from "react";

const StarryBackground = () => {
  const [stars, setStars] = useState<{ id: number; x: number; y: number; size: number; duration: number }[]>([]);

  useEffect(() => {
    const starArray = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // Random x position in viewport percentage
      y: Math.random() * 100, // Random y position in viewport percentage
      size: Math.random() * 3 + 1, // Random star size (1px to 4px)
      duration: Math.random() * 4 + 1, // Random twinkle duration (1s to 3s)
    }));
    setStars(starArray);
  }, []);

  return (
    <div className="stars">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.x}vw`,
            top: `${star.y}vh`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default StarryBackground;
