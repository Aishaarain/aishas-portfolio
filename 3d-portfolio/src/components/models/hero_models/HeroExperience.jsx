import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const DeveloperOrb = () => {
  const groupRef = useRef(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    groupRef.current.rotation.y += delta * 0.35;
    groupRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.6) * 0.08;
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.5}>
        <mesh>
          <icosahedronGeometry args={[1.65, 3]} />
          <meshStandardMaterial
            color="#22d3ee"
            metalness={0.45}
            roughness={0.22}
            emissive="#0891b2"
            emissiveIntensity={0.25}
          />
        </mesh>

        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.25, 0.018, 16, 120]} />
          <meshBasicMaterial color="#67e8f9" transparent opacity={0.55} />
        </mesh>

        <mesh rotation={[0.7, 0.4, 0]}>
          <torusGeometry args={[2.55, 0.014, 16, 120]} />
          <meshBasicMaterial color="#8b5cf6" transparent opacity={0.45} />
        </mesh>

        <mesh rotation={[0.2, 1.1, 0.5]}>
          <torusGeometry args={[2.85, 0.012, 16, 120]} />
          <meshBasicMaterial color="#38bdf8" transparent opacity={0.35} />
        </mesh>
      </Float>
    </group>
  );
};

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Canvas
      dpr={isMobile ? [1, 1] : [1, 1.35]}
      camera={{ position: [0, 0, isMobile ? 7.5 : 6.5], fov: 45 }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      className="h-full w-full"
    >
      <color attach="background" args={["#030712"]} />

      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 5, 6]} intensity={1.4} />
      <pointLight position={[-4, -2, 3]} intensity={1.6} color="#22d3ee" />
      <pointLight position={[3, 2, -2]} intensity={1.1} color="#8b5cf6" />

      <DeveloperOrb />
    </Canvas>
  );
};

export default HeroExperience;