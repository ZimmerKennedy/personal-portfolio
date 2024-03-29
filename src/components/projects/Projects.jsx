import React, { useState } from "react";
import "./projects.css";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Stage, Environment, Text } from "@react-three/drei";
import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  TextureLoader,
  LinearFilter,
  ClampToEdgeWrapping,
} from "three";
import Laptop from "./Laptop";
import ArtiProject from "./projectsPreviews/ArtiProject";
import OpenShopProject from "./projectsPreviews/OpenShopProject";
import YouNoProject from "./projectsPreviews/YouNoProject";
import PangeaProject from "./projectsPreviews/PangeaProject";

const Projects = () => {
  const artiProjectTexture = useLoader(
    TextureLoader,
    "/projectsImg/artiProject.png"
  );
  artiProjectTexture.magFilter = LinearFilter;
  artiProjectTexture.minFilter = LinearFilter;
  artiProjectTexture.wrapS = ClampToEdgeWrapping;
  artiProjectTexture.wrapT = ClampToEdgeWrapping;
  artiProjectTexture.anisotropy = 500;
  const pangeaProjectTexture = useLoader(
    TextureLoader,
    "/projectsImg/pangeaProject.png"
  );
  pangeaProjectTexture.magFilter = LinearFilter;
  pangeaProjectTexture.minFilter = LinearFilter;
  pangeaProjectTexture.wrapS = ClampToEdgeWrapping;
  pangeaProjectTexture.wrapT = ClampToEdgeWrapping;
  pangeaProjectTexture.anisotropy = 500;
  const youNoProjectTexture = useLoader(
    TextureLoader,
    "/projectsImg/youNoProject.png"
  );
  youNoProjectTexture.magFilter = LinearFilter;
  youNoProjectTexture.minFilter = LinearFilter;
  youNoProjectTexture.anisotropy = 500;
  youNoProjectTexture.wrapS = ClampToEdgeWrapping;
  youNoProjectTexture.wrapT = ClampToEdgeWrapping;
  const openShopProjectTexture = useLoader(
    TextureLoader,
    "/projectsImg/openShopProject.png"
  );
  openShopProjectTexture.magFilter = LinearFilter;
  openShopProjectTexture.minFilter = LinearFilter;
  openShopProjectTexture.wrapS = ClampToEdgeWrapping;
  openShopProjectTexture.wrapT = ClampToEdgeWrapping;
  openShopProjectTexture.anisotropy = 500;

  const [showArti, setShowArti] = useState(false);
  const [showPangea, setsetShowPangea] = useState(false);
  const [showYouNo, setShowYouNo] = useState(false);
  const [showOpenShop, setShowOpenShop] = useState(false);

  const handleArtiClick = () => {
    setShowArti(true);
    console.log(`i worked`);
  };

  const handlePangeaClick = () => {
    setsetShowPangea(true);
    console.log(`i worked`);
  };
  const handleYouNoClick = () => {
    setShowYouNo(true);
    console.log(`i worked`);
  };
  const handleOpenShopClick = () => {
    setShowOpenShop(true);
    console.log(`i worked`);
  };
  const handleClose = () => {
    setShowOpenShop(false);
    setShowYouNo(false);
    setShowArti(false);
    setsetShowPangea(false);
  };
  return (
    <div id="projects-wrapper">
      <div id="left-section-container">
        <section className="left-section">
          <div id="try" className="font3">
            Pro<span id="try1">ject</span>
          </div>
          <Canvas camera={{ position: [1, 0.4, 0], fov: 30 }}>
            <ambientLight intensity={1} />
            <Stage>
              <Laptop
                position={[0, -1.6, 0]}
                scale={[4, 5, 5]}
                onClick={handleOpenShopClick}
              />
              <mesh position={[-5.9, 6, 0]} rotation={[0, 0, 0.16]}>
                <boxGeometry args={[0, 10.5, 19.5]} />
                <meshBasicMaterial map={openShopProjectTexture} />
              </mesh>
              <Environment preset="city" />
              <OrbitControls
                enableZoom={true}
                enablePan={false}
                enableDamping={true}
                dampingFactor={0.1}
                rotateSpeed={0.3}
                target={[0, 0, 0]}
                initialPosition={[0, 0, 50]}
              />
            </Stage>
          </Canvas>
        </section>

        <section className="left-section">
          <Canvas camera={{ position: [1, 0.4, 0], fov: 40 }}>
            <ambientLight intensity={1} />

            <Stage>
              <Laptop
                position={[0, -1.6, 0]}
                scale={[4, 5, 5]}
                onClick={handlePangeaClick}
              />
              <mesh position={[-5.9, 6, 0]} rotation={[0, 0, 0.16]}>
                <boxGeometry args={[0, 10.5, 19.5]} />
                <meshBasicMaterial
                  map={pangeaProjectTexture}
                  magFilter={LinearFilter}
                  minFilter={LinearFilter}
                />
              </mesh>
              <Environment preset="city" />
              <OrbitControls
                enableZoom={true}
                enablePan={false}
                enableDamping={true}
                dampingFactor={0.1}
                rotateSpeed={0.3}
              />
            </Stage>
          </Canvas>
        </section>
      </div>
      <div id="right-section-container">
        <section className="right-section">
          <Canvas camera={{ position: [1, 0.4, 0], fov: 30 }}>
            <ambientLight intensity={1} />
            <Stage>
              <Laptop
                position={[0, -1.6, 0]}
                scale={[4, 5, 5]}
                onClick={handleYouNoClick}
              />
              <mesh position={[-5.9, 6, 0]} rotation={[0, 0, 0.16]}>
                <boxGeometry args={[0, 10.5, 19.5]} />
                <meshBasicMaterial map={youNoProjectTexture} />
              </mesh>
              <Environment preset="city" />
              <OrbitControls
                enableZoom={true}
                enablePan={false}
                enableDamping={true}
                dampingFactor={0.1}
                rotateSpeed={0.3}
                target={[0, 0, 0]}
                initialPosition={[0, 0, 50]}
              />
            </Stage>
          </Canvas>
        </section>
        <section className="right-section">
          <Canvas camera={{ position: [1, 0.4, 0], fov: 30 }}>
            <ambientLight intensity={1} />
            <Stage>
              <Laptop
                position={[0, -1.6, 0]}
                scale={[4, 5, 5]}
                onClick={handleArtiClick}
              />
              <mesh position={[-5.9, 6, 0]} rotation={[0, 0, 0.16]}>
                <boxGeometry args={[0, 10.5, 19.5]} />
                <meshBasicMaterial map={artiProjectTexture} />
              </mesh>
              <Environment preset="city" />
              <OrbitControls
                enableZoom={true}
                enablePan={false}
                enableDamping={true}
                dampingFactor={0.1}
                rotateSpeed={0.3}
                target={[0, 0, 0]}
                initialPosition={[0, 0, 50]}
              />
            </Stage>
          </Canvas>
        </section>
      </div>
      {showArti && (
        <div className="preview">
          <ArtiProject />
          <div className="close-preview" onClick={handleClose}>
            Exit
          </div>
        </div>
      )}
      {showOpenShop && (
        <div className="preview">
          <OpenShopProject />
          <div className="close-preview" onClick={handleClose}>
            Exit
          </div>
        </div>
      )}
      {showPangea && (
        <div className="preview">
          <PangeaProject />
          <div className="close-preview" onClick={handleClose}>
            Exit
          </div>
        </div>
      )}
      {showYouNo && (
        <div className="preview">
          <YouNoProject />
          <div className="close-preview" onClick={handleClose}>
            Exit
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
