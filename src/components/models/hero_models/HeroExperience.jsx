import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { MathUtils } from "three";
import { Model } from "./Sci-fi_computer_room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";

// Memoized AnimatedModel reduces extra re-renders
const AnimatedModel = React.memo(({ isMobile }) => {
  const groupRef = useRef();

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.PI;  // Set initial rotation
    }
  }, []);

  useFrame((state, delta) => {
    const targetRotation = -Math.PI / 20;
    if (groupRef.current) {
      // Lower the multiplier slightly to reduce the per-frame computation load
      groupRef.current.rotation.y = MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotation,
        delta * .3
      );
    }
  });

  return (
    <group ref={groupRef} scale={isMobile ? 0.8 : 2.4} position={[2, -0.5, 2]}>
      <Model />
    </group>
  );
});

// Memoize OrbitControls component to avoid unnecessary re-renders
const MemoizedOrbitControls = React.memo((props) => {
  return <OrbitControls {...props} />;
});

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  
  // Set lower device pixel ratio for mobile devices for performance gains
  const canvasDpr = isMobile ? [1, 1] : [1, 1.5];

  return (
    <Canvas
      dpr={canvasDpr}
      camera={{ position: [0, 0, 15], fov: 45 }}
    >
      <ambientLight intensity={0.2} color="#1a1a40" />

      <MemoizedOrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={0}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <React.Suspense fallback={null}>
        <HeroLights />
        {!isMobile && <Particles count={50} />}
        <AnimatedModel isMobile={isMobile} />
      </React.Suspense>
    </Canvas>
  );
};

export default HeroExperience;
