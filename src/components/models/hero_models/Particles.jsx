import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Particles = ({ count = 200 }) => {
  const mesh = useRef();

  // Initialize falling particle data.
  // Each particle has a starting position, falling speed, and a flash property.
  const particlesData = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 10,
          Math.random() * 10 + 5, // start high above the scene
          (Math.random() - 0.5) * 10,
        ],
        speed: 0.005 + Math.random() * 0.001,
        flash: 0, // initial flash brightness (0 means no extra shine)
      });
    }
    return temp;
  }, [count]);

  // Create a Float32Array to hold the particles' positions.
  const positions = useMemo(() => {
    const posArray = new Float32Array(count * 3);
    particlesData.forEach((p, i) => {
      posArray[i * 3] = p.position[0];
      posArray[i * 3 + 1] = p.position[1];
      posArray[i * 3 + 2] = p.position[2];
    });
    return posArray;
  }, [particlesData, count]);

  // Create a Float32Array for vertex colors.
  // We use purple as base with low brightness.
  const colors = useMemo(() => {
    const colArray = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Base purple: normalized RGB (0.5, 0, 0.5) with a dim brightness of 0.1.
      const baseBrightness = 0.1;
      colArray[i * 3] = 0.5 * baseBrightness;
      colArray[i * 3 + 1] = 0 * baseBrightness;
      colArray[i * 3 + 2] = 0.5 * baseBrightness;
    }
    return colArray;
  }, [count]);

  // Update positions and colors on every frame.
  useFrame((state, delta) => {
    const positionsAttr = mesh.current.geometry.attributes.position.array;
    const colorsAttr = mesh.current.geometry.attributes.color.array;
    for (let i = 0; i < count; i++) {
      // Update the falling position.
      let y = positionsAttr[i * 3 + 1];
      y -= particlesData[i].speed;
      if (y < -2) {
        y = Math.random() * 10 + 5; // reset to a high position if off-screen
      }
      particlesData[i].position[1] = y;
      positionsAttr[i * 3] = particlesData[i].position[0];
      positionsAttr[i * 3 + 1] = particlesData[i].position[1];
      positionsAttr[i * 3 + 2] = particlesData[i].position[2];

      // Random flash shine effect:
      // With ~5% chance each frame, assign a random flash intensity (between 0.5 and 1)
      // Otherwise, let the flash value decay.
      if (Math.random() < 0.05) {
        particlesData[i].flash = 0.5 + Math.random() * 0.5;
      } else {
        particlesData[i].flash = Math.max(0, particlesData[i].flash - delta * 3);
      }
      // Combine a low baseline brightness (0.1) with the flash effect.
      const brightness = 0.1 + particlesData[i].flash;

      // Update the particle's color using the purple base scaled by the brightness.
      colorsAttr[i * 3] = 0.5 * brightness;
      colorsAttr[i * 3 + 1] = 0 * brightness;
      colorsAttr[i * 3 + 2] = 0.5 * brightness;
    }
    mesh.current.geometry.attributes.position.needsUpdate = true;
    mesh.current.geometry.attributes.color.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        vertexColors
        size={0.05}
        transparent
        opacity={1}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export default Particles;
