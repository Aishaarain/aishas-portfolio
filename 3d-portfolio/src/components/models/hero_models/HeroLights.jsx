const HeroLights = () => (
  <>
    <directionalLight position={[3, 5, 5]} intensity={2.1} color="#dffbff" />
    <pointLight position={[4, 3, 5]} intensity={3.2} color="#22d3ee" distance={12} />
    <pointLight position={[-4, 2, 2]} intensity={2.1} color="#8b5cf6" distance={10} />
    <pointLight position={[0, 4, -4]} intensity={1.4} color="#38bdf8" distance={10} />
    <rectAreaLight width={5} height={3} intensity={2} color="#22d3ee" position={[0, 4, 3]} rotation={[-Math.PI / 4, 0, 0]} />
  </>
);

export default HeroLights;
