import { useRef, useState } from "react";
import confetti from "canvas-confetti";
import Gallery from "./components/Gallery";
import Message from "./components/Message";
import Candle from "./components/Candle";
import music from "./assets/bday_music.mp3";
import "./App.css";

function App() {
  const audioRef = useRef(null);
  const [entered, setEntered] = useState(false);

  const fireConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
    });

    confetti({
      particleCount: 80,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
    });

    confetti({
      particleCount: 80,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
    });
  };

  const handleEnter = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
      audioRef.current.play();
    }

    fireConfetti();
    setEntered(true);
  };

  return (
    <div className="app-container">
      <audio ref={audioRef} loop>
        <source src={music} type="audio/mp3" />
      </audio>

      {!entered ? (
        <div className="enter-screen">
          <h1>🎉 Happy Birthday Mom 🎂</h1>
          <button onClick={handleEnter}>Tap to Enter ❤️</button>
        </div>
      ) : (
        <div className="app">
          <h1>🎂 Make a Wish Mom 🎂</h1>
          <Candle />
          <Message />
          <Gallery />
        </div>
      )}
    </div>
  );
}

export default App;
