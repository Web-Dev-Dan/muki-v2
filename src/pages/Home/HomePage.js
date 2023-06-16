import { useState } from "react";
import Confetti from "../../components/Confetti/Confetti";

function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  function fireConfetti() {
    setTimeout(() => {
      setIsVisible(true);
      Navigator.vibrate(200);
    }, 2);
    setIsVisible(false);
  }

  return (
    <div className="main__page">
      <div className="cont--max">home page</div>
      {/* <button onClick={() => setIsVisible(true)}>Fire</button>
      {isVisible && <Confetti />} */}
      <button onClick={() => fireConfetti()}>Fire</button>
      {isVisible && <Confetti />}
    </div>
  );
}

export default HomePage;
