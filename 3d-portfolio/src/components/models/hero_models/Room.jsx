import { useMemo, useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export function Room(props) {
  const { nodes } = useGLTF("/models/optimized-room.glb");
  const groupRef = useRef();
  const matcapTexture = useTexture("/images/textures/mat1.png");

  const materials = useMemo(
    () => ({
      curtain: new THREE.MeshStandardMaterial({
        color: "#7c3aed",
        emissive: "#3b0764",
        emissiveIntensity: 0.18,
        roughness: 0.48,
      }),
      body: new THREE.MeshStandardMaterial({
        map: matcapTexture,
        color: "#dbeafe",
        emissive: "#172554",
        emissiveIntensity: 0.08,
        roughness: 0.42,
      }),
      table: new THREE.MeshStandardMaterial({
        color: "#111827",
        emissive: "#020617",
        emissiveIntensity: 0.08,
        roughness: 0.55,
      }),
      accent: new THREE.MeshStandardMaterial({
        color: "#e5faff",
        emissive: "#164e63",
        emissiveIntensity: 0.18,
        roughness: 0.35,
      }),
      pillow: new THREE.MeshStandardMaterial({
        color: "#6d28d9",
        emissive: "#581c87",
        emissiveIntensity: 0.18,
        roughness: 0.52,
      }),
      chair: new THREE.MeshStandardMaterial({
        color: "#020617",
        emissive: "#082f49",
        emissiveIntensity: 0.1,
        roughness: 0.4,
      }),
      screen: new THREE.MeshStandardMaterial({
        color: "#020617",
        emissive: "#22d3ee",
        emissiveIntensity: 1.05,
        toneMapped: false,
      }),
    }),
    [matcapTexture]
  );

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh geometry={nodes._________6_blinn1_0.geometry} material={materials.curtain} />
      <mesh geometry={nodes.body1_blinn1_0.geometry} material={materials.body} />
      <mesh geometry={nodes.cabin_blinn1_0.geometry} material={materials.table} />
      <mesh geometry={nodes.chair_body_blinn1_0.geometry} material={materials.chair} />
      <mesh geometry={nodes.comp_blinn1_0.geometry} material={materials.accent} />
      <mesh geometry={nodes.emis_lambert1_0.geometry} material={materials.screen} />
      <mesh geometry={nodes.keyboard_blinn1_0.geometry} material={materials.accent} />
      <mesh geometry={nodes.miuse_blinn1_0.geometry} material={materials.accent} />
      <mesh geometry={nodes.monitor2_blinn1_0.geometry} material={materials.accent} />
      <mesh geometry={nodes.monitor3_blinn1_0.geometry} material={materials.accent} />
      <mesh geometry={nodes.pillows_blinn1_0.geometry} material={materials.pillow} />
      <mesh geometry={nodes.table_blinn1_0.geometry} material={materials.table} />
      <mesh geometry={nodes.window_blinn1_0.geometry} material={materials.accent} />
    </group>
  );
}

useGLTF.preload("/models/optimized-room.glb");
