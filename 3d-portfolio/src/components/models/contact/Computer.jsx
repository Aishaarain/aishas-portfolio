import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export function Computer(props) {
  const { nodes, materials } = useGLTF("/models/computer-optimized-transformed.glb");

  useEffect(() => {
    const accentColors = ["#38bdf8", "#8b5cf6", "#a5b4fc"];

    Object.values(materials).forEach((material, i) => {
      if (!material?.emissive) return;
      material.emissive.set(accentColors[i % accentColors.length]);
      material.emissiveIntensity = 0.45;
      material.toneMapped = false;
      material.roughness = 0.45;
    });
  }, [materials]);

  return (
    <group {...props} dispose={null}>
      <group position={[-4.005, 67.549, 58.539]}>
        <mesh geometry={nodes.Cube000_ComputerDesk_0001_1.geometry} material={materials["ComputerDesk.001"]} />
        <mesh geometry={nodes.Cube000_ComputerDesk_0001_2.geometry} material={materials["FloppyDisk.001"]} />
      </group>
    </group>
  );
}

useGLTF.preload("/models/computer-optimized-transformed.glb");

export default Computer;
