import { useState } from "react";
import "./PhotoSlider.css";

// Correct paths: remove '/public'
const photos = [
  "/photo1.jpg",
  "/photo2.jpg",
  "/photo3.jpg",
  "/photo4.jpg",
  "/photo5.jpg",
  "/photo6.jpg",
];

export default function PhotoSlider() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % photos.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? photos.length - 1 : prev - 1
    );
  };

  return (
    <div className="slider">
      <button onClick={prev} className="nav">❮</button>

      <img 
        src={photos[index]}
        alt="Valentine memory"
        className="slide"
      />

      <button onClick={next} className="nav">❯</button>
    </div>
  );
}
