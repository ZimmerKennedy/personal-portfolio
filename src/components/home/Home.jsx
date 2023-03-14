import React, { useState, useEffect } from "react";
import { OrbitControls, Stage, Environment, Text } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader, LinearFilter } from "three";
import linkedInLogo from "/miscImg/linkedInLogo.png";
import githubLogo from "/miscImg/githubLogo.png";
import Desk from "./Desk";
import "./home.css";

const Home = () => {
  const words = ["Code.", "Create.", "Innovate.", "Zimmer Kennedy"];
  const [isLoading, setIsLoading] = useState(true);
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

  const linkedInLogoTexture = useLoader(TextureLoader, linkedInLogo);
  const githubLogoTexture = useLoader(TextureLoader, githubLogo);
  githubLogoTexture.magFilter = LinearFilter;
  githubLogoTexture.minFilter = LinearFilter;


  return (
    <div id="home-container">
      <section id="desk-section">
        <Canvas camera={{ position: [0, 0.4, 1], fov: 50 }}>
          <ambientLight intensity={1} />
          <pointLight position={[10, 10, 10]} intensity={5} color="#aaa" />
          <pointLight position={[-10, -10, -10]} intensity={5} color="#aaa" />
          <pointLight position={[0, 10, 0]} intensity={5} color="#aaa" />
          <Stage>
            <Desk />
            <Environment preset="warehouse" />
            <OrbitControls enablePan={false} enableZoom={false} />

            
          </Stage>

          {matchedWords.includes("Code.") && (
            <Text
              position={[-1.98, 1.85, -0.5]}
              rotation={[0, 0.2, 0]}
              fontSize={0.1}
              color="#aaa"
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
              color="#aaa"
              anchorX="center"
              anchorY="middle"
              textAlign="left"
            >
              Create.
            </Text>
          )}
          {matchedWords.includes("Innovate.") && (
            <Text
              position={[-1.9, 1.65, -0.5]}
              rotation={[0, 0.2, 0]}
              fontSize={0.1}
              color="#aaa"
              anchorX="center"
              anchorY="middle"
              textAlign="left"
            >
              Innovate.
            </Text>
          )}
          {matchedWords.includes("Zimmer Kennedy") && (
            <Text
              position={[0, 1.3, 0]}
              fontSize={0.2}
              color="#ff5277"
              anchorX="center"
              anchorY="middle"
              textAlign="left"
            >
              Full-Stack Developer
            </Text>
          )}
          <Text
            position={[0, 1, 0]}
            fontSize={0.5}
            color="#ff5277"
            anchorX="center"
            anchorY="middle"
            textAlign="center"
            ontFamily="'Inter Tight', 'Roboto Mono', 'Tourney', sans-serif"
          >
            {words[wordIndex]}
          </Text>

          <group
            onClick={(e) => {
              window.open(
                "https://www.linkedin.com/in/zimmerkennedy/",
                "_blank"
              );
            }}
            onPointerOver={(e) => {
              setHover(true);
            }}
            onPointerOut={(e) => {
              setHover(false);
            }}
          >
            <mesh position={[0.3, 1.85, -0.85]}>
              <planeGeometry args={[0.2, 0.2]} />
              <meshBasicMaterial map={linkedInLogoTexture} />
            </mesh>
          </group>
          <group
            onClick={(e) => {
              window.open("https://github.com/ZimmerKennedy", "_blank");
            }}
            onPointerOver={(e) => {
              setHover(true);
            }}
            onPointerOut={(e) => {
              setHover(false);
            }}
          >
            <mesh position={[0.3, 1.55, -0.85]}>
              <planeGeometry args={[0.2, 0.2]} />
              <meshBasicMaterial map={githubLogoTexture} />
            </mesh>
          </group>
        </Canvas>
      </section>
    </div>
  );
};

export default Home;
