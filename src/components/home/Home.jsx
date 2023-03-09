import React, { useState, useEffect } from "react";
import "./home.css";

const Home = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [matchedWords, setMatchedWords] = useState([]);

  const words = [
    "Creative",
    "Software Engineer",
    "Full-Stack Developer",
    "Web App Developer",
    "Front-End Developer",
    "Back-End Developer",
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
      {matchedWords.includes("Creative") && (
          <div className="top-section-contents">Creative</div>
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
          {matchedWords.includes("Web App Developer") && (
          <div className="bottom-section-contents ">Web App Developer</div>
        )}
        {matchedWords.includes("Front-End Developer") && (
          <div className="bottom-section-contents ">Front-End Developer</div>
        )}
        {matchedWords.includes("Back-End Developer") && (
          <div className="bottom-section-contents ">Back-End Developer</div>
        )}
      </section>
    </div>
  );
};

export default Home;