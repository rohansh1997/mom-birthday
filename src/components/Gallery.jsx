import { useState } from "react";
import mom1 from "../assets/photos/mom_solo.jpeg";
import mom2 from "../assets/photos/mom_together.jpeg";
import mom3 from "../assets/photos/mom_solo2.jpeg";
import mom4 from "../assets/photos/mom_lovish.jpeg";
import "./gallery.css";

const photos = [
  {
    img: mom1,
    message: "Your smile makes every day brighter ❤️",
  },
  {
    img: mom2,
    message: "Home is wherever you are 🏡",
  },
  {
    img: mom3,
    message: "You are so beautiful 🌸",
  },
  {
    img: mom4,
    message: "Forever grateful to be your child 💖",
  },
];

const Gallery = () => {
  return (
    <div className="gallery">
      {photos.map((item, index) => (
        <FlipCard key={index} img={item.img} message={item.message} />
      ))}
    </div>
  );
};

const FlipCard = ({ img, message }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`flip-card ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="flip-inner">
        <div className="flip-front">
          <img src={img} alt="memory" />
        </div>
        <div className="flip-back">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
