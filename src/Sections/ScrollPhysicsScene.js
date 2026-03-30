import React, { useEffect, useMemo, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";

function BouncyBox({ position, color, trigger }) {
  const body = useRef();

  useEffect(() => {
    if (!trigger || !body.current) {
      return;
    }

    const impulse = {
      x: (Math.random() - 0.5) * 2,
      y: 3.5 + Math.random() * 2,
      z: (Math.random() - 0.5) * 2,
    };
    const torque = {
      x: (Math.random() - 0.5) * 0.75,
      y: (Math.random() - 0.5) * 0.75,
      z: (Math.random() - 0.5) * 0.75,
    };

    body.current.applyImpulse(impulse, true);
    body.current.applyTorqueImpulse(torque, true);
  }, [trigger]);

  return (
    <RigidBody
      ref={body}
      colliders="cuboid"
      mass={2}
      restitution={0.75}
      friction={0.6}
      linearDamping={0.7}
      angularDamping={0.7}
      position={position}
    >
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1.2, 1.2, 1.2]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </RigidBody>
  );
}

function ScrollPhysicsScene({ active = false }) {
  const boxes = useMemo(
    () => [
      { position: [-2, 2.5, 0], color: "#F59E0B" },
      { position: [0, 3.4, 1], color: "#38BDF8" },
      { position: [2, 2.2, -0.5], color: "#F472B6" },
      { position: [-1.3, 4.2, 1.8], color: "#22C55E" },
      { position: [1.6, 3.8, -1.7], color: "#A855F7" },
    ],
    [],
  );

  return (
    <div className="h-[420px] w-full overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/90 shadow-[0_40px_80px_rgba(15,23,42,0.35)]">
      <Canvas shadows camera={{ position: [0, 3, 10], fov: 35 }}>
        <color attach="background" args={["#020617"]} />
        <ambientLight intensity={0.8} />
        <spotLight
          position={[10, 12, 10]}
          angle={0.25}
          intensity={1.2}
          penumbra={0.45}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <Physics gravity={[0, -9.8, 0]}>
          <RigidBody type="fixed" colliders="cuboid" position={[0, -1.25, 0]}>
            <mesh receiveShadow>
              <boxGeometry args={[20, 1.5, 20]} />
              <meshStandardMaterial color="#111827" />
            </mesh>
          </RigidBody>

          {boxes.map((box, index) => (
            <BouncyBox
              key={index}
              position={box.position}
              color={box.color}
              trigger={active}
            />
          ))}
        </Physics>
      </Canvas>
    </div>
  );
}

export default ScrollPhysicsScene;
