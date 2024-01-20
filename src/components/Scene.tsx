import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Avatar } from "./Avatar";

export const Scene: React.FC = () => {
  return (
    <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
      <SceneContent />
    </Canvas>
  );
};

export const SceneContent = () => {
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={1.5} />

      <group position={[0, -1, 0]}>
        <Avatar />
      </group>
    </>
  );
};
