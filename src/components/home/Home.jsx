import React, { useState, useEffect } from 'react';
import { OrbitControls, Stage, Environment, Text } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Desk from './Desk';
import './home.css';

const Home = () => {
  const words = ["Code.", "Create.", "Innovate.", "Zimmer Kennedy"];
  const [wordIndex, setWordIndex] = useState(0);
  const [matchedWords, setMatchedWords] = useState([]);

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
      <section id="desk-section">
        <Canvas camera={{ position: [0, 0.5, 1], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 5, 5]} intensity={1} />
          <Stage>
            <Desk />
            <Environment preset="city" />
            <OrbitControls enablePan={false} enableZoom={false}/>
          </Stage>
          {matchedWords.includes("Code.") && (
          <Text
          position={[-1.98, 1.85, -0.5]}
          rotation={[0, 0.2, 0]}
          fontSize={0.1}
          color="#ca9558"
          anchorX="center"
          anchorY="middle"
          textAlign="left"
        >
            Code.
          </Text>
        )}
        {matchedWords.includes("Create.") && (
          <Text
          position={[-1.95, 1.75, -0.5]}
          rotation={[0, 0.2, 0]}
          fontSize={0.1}
          color="#ca9558"
          anchorX="center"
          anchorY="middle"
          textAlign="left"
          >
            Create.
          </Text>
        )}
        {matchedWords.includes("Innovate.") && (
          <Text
          position={[-1.90, 1.65, -0.5]}
          rotation={[0, 0.2, 0]}
          fontSize={0.1}
          color="#ca9558"
          anchorX="center"
          anchorY="middle"
          textAlign="left"
          >
            Innovate.
          </Text>
        )}
          <Text
            position={[0, 1, 0]}
            fontSize={0.5}
            color="#ca9558"
            anchorX="center"
            anchorY="middle"
            textAlign="center"
          >
            {words[wordIndex]}
          </Text>
        </Canvas>
      </section>
    </div>
  );
};

export default Home;

