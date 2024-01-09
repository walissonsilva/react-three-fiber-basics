import { Canvas } from "@react-three/fiber";

export const Scene = () => {
  return (
    <Canvas>
      <mesh>
        <torusKnotGeometry />
        <meshNormalMaterial />
      </mesh>
    </Canvas>
  );
};
