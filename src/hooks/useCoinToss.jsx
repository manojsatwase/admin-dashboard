import { useState } from "react";

export const useCoinToss = () => {
    const [angle, setAngle] = useState(0);
    const Posibility_FiftyPercent = 0.5;
  
    const flipCoin = () => {
      if (Math.random() > Posibility_FiftyPercent) {
        // Represents a 50% chance of this outcome
        setAngle((prev) => prev + 180); // Heads
      }
      setAngle((prev) => prev + 360); // Tails
      // Represents the remaining 50% chance of this outcome
    };
  
    return { angle, flipCoin };
  };