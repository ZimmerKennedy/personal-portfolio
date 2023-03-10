import React, { useState, useEffect } from "react";
import "./home.css";

const Home = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [matchedWords, setMatchedWords] = useState([]);

  const words = [
    "Fitness Enthusiast",
    "Software Engineer",
    "Full-Stack Developer",
    "Code.",
    "Create.",
    "Innovate.",
    "Zimmer Kennedy"
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
    if (words[wordIndex] !== undefined && !matchedWords.includes(words[wordIndex])) {
      setMatchedWords([...matchedWords, words[wordIndex]]);
    }
  }, [wordIndex, words, matchedWords]);

  return (
    <div id="home-container">
      <section id="top-section">
      {matchedWords.includes("Fitness Enthusiast") && (
          <div className="top-section-contents">Fitness Enthusiast</div>
        )}
        {matchedWords.includes("Software Engineer") && (
          <div className="top-section-contents">Software Engineer</div>
        )}
        {matchedWords.includes("Full-Stack Developer") && (
          <div className="top-section-contents">Full-Stack Developer</div>
        )}
      </section>
      <section id="middle-section">
        <div className="middle-section-content-words font3">{words[wordIndex]}</div>
      </section>
      <section id="bottom-section">
          {matchedWords.includes("Code.") && (
          <div className="bottom-section-contents ">Code.</div>
        )}
        {matchedWords.includes("Create.") && (
          <div className="bottom-section-contents ">Create.</div>
        )}
        {matchedWords.includes("Innovate.") && (
          <div className="bottom-section-contents ">Innovate.</div>
        )}
      </section>
    </div>
  );
};

export default Home;