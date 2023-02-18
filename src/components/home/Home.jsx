import React, { useState, useEffect } from "react";
import "./home.css";
import codingGif from "../../codingGIF.gif"
function Home() {
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["Software Engineer","Full-Stack Developer", "Web App Developer", "Front-End Developer","Back-End Developer"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setWordIndex((wordIndex) => (wordIndex + 1) % words.length);
    }, 1500);

    return () => clearInterval(intervalId);
  }, [words.length]);

  return (
    <>
      <div className="contents">
        <div className="left-side-container">
            <div class="left-side-content-wrapper">
          <div className="left-side-content-items">I Have not failed.</div>
          <div className="left-side-content-items">
            I've just found 10,000 ways that won't work.
          </div>
          <div className="left-side-content-items">-Thomas Edison</div>
          </div>
        </div>
        <div className="middle-container">
          <div className="middle-content-items font3">Zimmer Kennedy</div>
          <div className="middle-content-items font3">{words[wordIndex]}</div>
          <div className="logo">  
          <img src={codingGif}alt="example GIF"  />       
      </div>
        </div>
        <div className="right-side-container">
        <div class="right-side-content-wrapper">
          <div className="right-side-content-items">
            Creating Solutions
          </div>
          <div className="right-side-content-items">
            One Code at a Time
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;