"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import type { Object3D } from "three";
import { PerformanceMonitor } from "@react-three/drei";
import { Bloom, EffectComposer, ToneMapping } from "@react-three/postprocessing";
import { ToneMappingMode } from "postprocessing";
import type { MotionValue } from "framer-motion";
import Brain from "./Brain";
import CameraRig from "./CameraRig";
import Network from "./Network";
import Projector from "./Projector";
import Warehouse from "./Warehouse";
import { BG } from "./world";

export type SceneProps = {
  beat: MotionValue<number>;
  /** false while the story is off screen — the render loop stops. */
  active: boolean;
  reduced: boolean;
  onReady: () => void;
};

/**
 * The story's 3D stage. Everything in it is procedural (no model files), so the
 * only download is three.js itself and the Packiko mark used as a wall sign.
 */
export default function Scene({ beat, active, reduced, onReady }: SceneProps) {
  // Phones and tablets start light: no bloom pass (and its 4× multisampled
  // buffers) and a lower pixel ratio. Waiting for the PerformanceMonitor to
  // notice meant the first seconds stuttered on exactly the devices that can
  // least afford it. Desktops get bloom and full DPR until they can't keep up.
  const [lite] = useState(() => window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 1024);
  const [hq, setHq] = useState(!lite);
  const [dpr, setDpr] = useState<[number, number]>(lite ? [1, 1.5] : [1, 1.75]);

  return (
    <Canvas
      frameloop={active ? "always" : "never"}
      dpr={dpr}
      camera={{ fov: 35, near: 0.5, far: 30000, position: [40, 30, 50] }}
      gl={{ antialias: true, powerPreference: "high-performance", stencil: false }}
      onCreated={() => requestAnimationFrame(onReady)}
    >
      <color attach="background" args={[BG]} />
      <fog attach="fog" args={[BG, 50, 220]} />
      <PerformanceMonitor
        onDecline={() => {
          setHq(false);
          setDpr([1, 1]);
        }}
      />

      {/* a well-lit floor: sky fill, a warm key from above, a cool rim */}
      <hemisphereLight args={["#b9d4f2", "#1b2533", 1.35]} />
      <ambientLight intensity={0.35} color="#c8d8ea" />
      <directionalLight position={[22, 48, 30]} intensity={1.9} color="#fff1dc" />
      <directionalLight position={[-40, 22, -12]} intensity={0.5} color="#7fd3dd" />
      {/* warm work lights over the storage aisles and the pack line */}
      <pointLight position={[-14, 8, -10]} intensity={180} distance={40} decay={1.6} color="#ffe0b8" />
      <pointLight position={[-12, 7, 3]} intensity={150} distance={34} decay={1.7} color="#ffd2a0" />
      <pointLight position={[8, 7, 3]} intensity={150} distance={34} decay={1.7} color="#ffd2a0" />

      <CameraRig beat={beat} reduced={reduced} />
      {/* the ground under everything, warehouse and map alike */}
      <mesh rotation-x={-Math.PI / 2} position-y={-0.11}>
        <planeGeometry args={[20000, 20000]} />
        <meshStandardMaterial color="#05080d" roughness={1} />
      </mesh>
      <Suspense fallback={null}>
        <Warehouse beat={beat} reduced={reduced} />
      </Suspense>
      <Brain beat={beat} reduced={reduced} />
      <Network beat={beat} reduced={reduced} />
      {/* last: projects label anchors after everything has moved this frame */}
      <Projector />
      <Precompile />

      {hq ? (
        <EffectComposer multisampling={4}>
          <Bloom mipmapBlur intensity={0.9} luminanceThreshold={1.1} luminanceSmoothing={0.25} />
          <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
        </EffectComposer>
      ) : null}
    </Canvas>
  );
}

/**
 * Compiles every shader while the scene fades in. three.js otherwise compiles a
 * material the first frame it is visible, so the brain and the map (hidden
 * until their chapters) compiled ~20 programs mid-scroll: a visible hitch on
 * phones each time. `compile` skips hidden objects, so everything is shown for
 * the synchronous traversal and put back straight after.
 */
function Precompile() {
  const gl = useThree((s) => s.gl);
  const scene = useThree((s) => s.scene);
  const camera = useThree((s) => s.camera);
  useEffect(() => {
    const hidden: Object3D[] = [];
    scene.traverse((o) => {
      if (!o.visible) {
        hidden.push(o);
        o.visible = true;
      }
    });
    // async where the GPU can link in parallel; the traversal itself is sync
    gl.compileAsync(scene, camera).catch(() => {});
    hidden.forEach((o) => (o.visible = false));
  }, [gl, scene, camera]);
  return null;
}
