import { useState, useEffect } from "react";
import "../pages/hero/hero.css";

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

function randomChar() {
  return characters[Math.floor(Math.random() * characters.length)];
}

export default function HackerText({ words, speed = 40, pause = 3000, className = "" }) {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const word = words[wordIndex];

    const interval = setInterval(() => {
      let newText = "";

      for (let i = 0; i < word.length; i++) {
        if (i < progress) {
          newText += word[i];
        } else {
          newText += randomChar();
        }
      }

      setDisplayText(newText);
      setProgress((prev) => prev + 1);
    }, speed);

    if (progress > word.length) {
      clearInterval(interval);

      setTimeout(() => {
        setProgress(0);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, pause);
    }

    return () => clearInterval(interval);
  }, [progress, wordIndex, words, speed, pause]);

  return <span className={className}>{displayText}</span>;
}