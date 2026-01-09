import { useState } from "react";
import "./candle.css";

const Candle = () => {
  const [blown, setBlown] = useState(false);

  return (
    <div className="candle-container">
      <div className="cake">
        {!blown && <div className="flame"></div>}
        <div className="candle"></div>
      </div>

      {!blown ? (
        <button onClick={() => setBlown(true)}>Blow the Candle 💨</button>
      ) : (
        <p className="wish-text">🌸 May all your wishes come true Mom 🌸</p>
      )}
    </div>
  );
};

export default Candle;
