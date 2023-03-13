import React, { useState, useEffect } from "react";
import "./home.css";

const Home = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [matchedWords, setMatchedWords] = useState([]);

  const words = [
    "Code.",
    "Create.",
    "Innovate.",
    "Zimmer Kennedy",
  ];

  useEffect(() => {
    let intervalId;

    if (wordIndex < words.length) {
      intervalId = setInterval(() => {
        setWordIndex(wordIndex + 1);
      }, 1500);
    }

    if (wordIndex === words.indexOf("Zimmer Kennedy")) {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [wordIndex, words]);

  useEffect(() => {
    if (
      words[wordIndex] !== undefined &&
      !matchedWords.includes(words[wordIndex])
    ) {
      setMatchedWords([...matchedWords, words[wordIndex]]);
    }
  }, [wordIndex, words, matchedWords]);

  return (
    <div id="home-container">
      <section id="left-section">
        {matchedWords.includes("Code.") && (
          <div className="top-section-home ">Code.</div>
        )}
        {matchedWords.includes("Create.") && (
          <div className="top-section-home ">Create.</div>
        )}
        {matchedWords.includes("Innovate.") && (
          <div className="top-section-home ">Innovate.</div>
        )}
      </section> 
      <section id="right-section">
        {matchedWords.includes("Zimmer Kennedy") && (
          <div className="right-section-title">Full-Stack Developer</div>
        )}
        <div className="right-section-words font3">
          {words[wordIndex]}
        </div>
      </section>
    </div>
  );
};

export default Home;

