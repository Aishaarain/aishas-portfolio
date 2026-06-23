import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Particles = ({ count = 50 }) => {
  const mesh = useRef();

  const { positions, speeds } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 9;
      positions[i * 3 + 1] = Math.random() * 8 + 3;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 9;
      speeds[i] = 0.002 + Math.random() * 0.0015;
    }

    return { positions, speeds };
  }, [count]);

  useFrame(() => {
    if (!mesh.current) return;
    const pos = mesh.current.geometry.attributes.position.array;

    for (let i = 0; i < count; i++) {
      const yIndex = i * 3 + 1;
      pos[yIndex] -= speeds[i];
      if (pos[yIndex] < -2.4) pos[yIndex] = Math.random() * 7 + 3;
    }

    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={mesh} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.055}
        color="#7dd3fc"
        transparent
        opacity={0.45}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

export default Particles;
