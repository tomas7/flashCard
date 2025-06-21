"use client";

import { useState } from "react";
import styles from "./page.module.css";
  import words from "../data/words.json";

export default function FlipCard() {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const currentWord = words[index];

  const handleNext = () => {
    setFlipped(false); // reset to front side
    setTimeout(() => {
      
      setIndex((prev) => (prev + 1) % words.length); // loop around
    }, 400);
  };

  return (
    <div className={styles.container}>
      <div
        className={`${styles.card} ${flipped ? styles.flipped : ""}`}
        onClick={() => setFlipped(!flipped)}
      >
        <div className={styles.inner}>
          <div className={styles.front}>
            <h2>{currentWord.english}</h2>
          </div>
          <div className={styles.back}>
            <h1>{currentWord.danish}</h1>
          </div>
        </div>
      <button className={styles.nextBtn} onClick={handleNext}>
        Next
      </button>
      </div>
    </div>
  );
}
