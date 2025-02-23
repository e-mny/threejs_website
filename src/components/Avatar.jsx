import { ContactShadows, OrbitControls } from "@react-three/drei";
import { Model } from "./Model";
import { Canvas } from "@react-three/fiber";
import React, { useState, useEffect } from "react";

export const Avatar = () => {
  const animationsList = ["Typing", "StopWalking", "Dancing"]; // Ensure your FBX contains these animations
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const currentAnimation = "StopWalking"; // Set your desired animation

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Canvas shadows camera={{ position: [2, 2, 4], fov: 23 }}>
      <OrbitControls
        autoRotate={false}
        enableZoom={false}
        enablePan={false}
        autoRotateSpeed={4}
      />
      {/* Lighting setup */}
      <ambientLight intensity={1} />
      <directionalLight
        intensity={1}
        position={[5, 5, 5]}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        castShadow
      />
      <pointLight position={[-5, 5, 5]} intensity={0.5} />
      <group position-y={-1}>
        <ContactShadows
          opacity={0.42}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
        />
        <Model
          animation={currentAnimation}
          mouseX={mousePosition.x}
          mouseY={mousePosition.y}
        />
      </group>
    </Canvas>
  );
};
