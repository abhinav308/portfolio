import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Environment, useGLTF, Html } from '@react-three/drei'
import { Suspense, useRef, useState } from 'react'
import * as THREE from 'three'

function CitySkyline() {
  const groupRef = useRef<THREE.Group>(null!)
  const { mouse } = useThree()

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (groupRef.current) {
      groupRef.current.position.x = mouse.x * 2
      groupRef.current.position.y = mouse.y * 1
      groupRef.current.rotation.y = time * 0.02
    }
  })

  const buildings = []
  for (let i = 0; i < 20; i++) {
    const height = 0.5 + Math.random() * 2
    const width = 0.2 + Math.random() * 0.3
    const x = (i - 10) * 1.5
    buildings.push(
      <mesh key={i} position={[x, -2, -5 - Math.random() * 10]}>
        <boxGeometry args={[width, height, width]} />
        <meshStandardMaterial color={i % 2 === 0 ? "#1e293b" : "#0f172a"} emissive="#0f172a" />
      </mesh>
    )
  }

  return <group ref={groupRef}>{buildings}</group>
}

function SpiderModel() {
  const groupRef = useRef<THREE.Group>(null!)
  const { mouse } = useThree()
  const [hovered, setHovered] = useState(false)
  
  // Load GLTF model
  const { scene } = useGLTF('/spider.glb')
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.5
      groupRef.current.rotation.x = time * 0.3 + mouse.y * 0.2
      groupRef.current.position.x = mouse.x * 0.3
      groupRef.current.position.y = mouse.y * 0.2
    }
  })

  return (
    <group ref={groupRef} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
      <primitive object={scene} scale={2} />
      {hovered && (
        <pointLight color="#facc15" intensity={1} distance={3} position={[0, 0, 0]} />
      )}
    </group>
  )
}

export default function SpiderScene() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
      <Environment preset="night" />
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#dc2626" />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#0ea5e9" />
      <CitySkyline />
      <Suspense fallback={
        <Html center>
          <div className="text-cyan-400 font-bold">
            Loading Spider-Verse...
          </div>
        </Html>
      }>
        <SpiderModel />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </Canvas>
  )
}