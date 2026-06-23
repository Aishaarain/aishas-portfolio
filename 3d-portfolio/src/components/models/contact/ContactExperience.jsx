import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

import Computer from "./Computer";

const ContactExperience = () => {
  return (
    <Canvas
      dpr={[1, 1.3]}
      frameloop="demand"
      camera={{ position: [0, 3, 7], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <color attach="background" args={["#050816"]} />
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 6, 4]} intensity={2} color="#e0f2fe" />
      <pointLight position={[3, 3, 4]} intensity={1.8} color="#38bdf8" />
      <pointLight position={[-4, 3, 2]} intensity={1.1} color="#8b5cf6" />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[24, 24]} />
        <meshStandardMaterial color="#050816" emissive="#082f49" emissiveIntensity={0.08} />
      </mesh>

      <Suspense fallback={null}>
        <group scale={0.03} position={[0, -1.49, -2]}>
          <Computer />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default ContactExperience;
