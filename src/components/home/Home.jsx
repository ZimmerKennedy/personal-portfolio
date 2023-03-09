//  import React, { useState, useEffect } from "react";
//  import "./home.css";

//  const Home = () => {
//     const [wordIndex, setWordIndex] = useState(0);
//     const words = [
//       "Creative",
//       "Software Engineer",
//       "Full-Stack Developer",
//       "Web App Developer",
//       "Front-End Developer",
//       "Back-End Developer",
//       "Zimmer Kennedy"
//     ];
  
//     useEffect(() => {
//       let intervalId;
      
//       if (wordIndex < words.length) {
//         intervalId = setInterval(() => {
//           setWordIndex(wordIndex + 1);
//         }, 1500);
//       }
    
//       if (wordIndex === words.indexOf("Zimmer Kennedy")) {
//         clearInterval(intervalId);
//       }
      
//       return () => clearInterval(intervalId);
//     }, [wordIndex, words]);
    
//     const RenderCreative = words[wordIndex] === "Creative" || wordIndex > words.length;
//     const RenderSoftwareEngineer = words[wordIndex] === "Software Engineer" || wordIndex >= words.length;
//     const RenderFullStackDeveloper = words[wordIndex] === "Full-Stack Developer" || wordIndex >= words.length;
//     const RenderWebAppDeveloper = words[wordIndex] === "Web App Developer" || wordIndex >= words.length;
//     const RenderFrontEndDeveloper = words[wordIndex] === "Front-End Developer" || wordIndex >= words.length;
//     const RenderBackEndDeveloper = words[wordIndex] === "Back-End Developer" || wordIndex >= words.length;
 
//    return (
//      <div id="home-container">
//       <section id="top-section"> 
//       {RenderSoftwareEngineer && (
//               <div className="top-section-contents font3">
//                Software Engineer
//                </div>
//              )}
//         {RenderFullStackDeveloper &&(
//             <div className="top-section-contents font3">
//               Full-Stack Developer
//             </div>
//         )}
//         {RenderWebAppDeveloper &&(
//             <div className="top-section-contents font3">
//               Web App Developer
//             </div>
//         )}
//       </section>
//       <section id="middle-section">
//       {RenderFrontEndDeveloper &&(
//             <div className="middle-section-contents font3">
//               Front-End Developer
//             </div>
//         )}
//       <div className="middle-section-content-words font3">{words[wordIndex]}</div>
//       {RenderBackEndDeveloper &&(
//             <div className="middle-section-contents font3">
//               Back-End Developer
//             </div>
//         )}
//       </section>
//       <section id="bottom-section">
//       {/* {RenderFullStackDeveloper &&(
//             <div className="bottom-section-contents font3">
//               Full-Stack Developer
//             </div>
//         )}
//         {RenderFullStackDeveloper &&(
//             <div className="bottom-section-contents font3">
//               Full-Stack Developer
//             </div>
//         )}
//         {RenderFullStackDeveloper &&(
//             <div className="bottom-section-contents font3">
//               Full-Stack Developer
//             </div>
//         )} */}
//       </section>
//      </div>
//    )
//  }
 
//  export default Home

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