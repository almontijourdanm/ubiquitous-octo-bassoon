'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations, Environment, ContactShadows } from '@react-three/drei';
import { Suspense, useEffect, useRef } from 'react';
import * as THREE from 'three';

function Model({ url }: { url: string }) {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF(url);
  const { actions, mixer } = useAnimations(animations, group);

  useEffect(() => {
    // Create procedural texture for surface detail
    const createNoiseTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 512;
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;
      
      // Create noise pattern
      const imageData = ctx.createImageData(512, 512);
      for (let i = 0; i < imageData.data.length; i += 4) {
        const noise = Math.random() * 100 + 155;
        imageData.data[i] = noise;
        imageData.data[i + 1] = noise;
        imageData.data[i + 2] = noise;
        imageData.data[i + 3] = 255;
      }
      ctx.putImageData(imageData, 0, 0);
      
      const texture = new THREE.CanvasTexture(canvas);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(2, 2);
      return texture;
    };

    // Create brushed metal texture
    const createBrushedTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 512;
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;
      
      // Create brushed metal effect
      ctx.fillStyle = '#888888';
      ctx.fillRect(0, 0, 512, 512);
      
      for (let i = 0; i < 512; i++) {
        const alpha = Math.random() * 0.3 + 0.1;
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.lineWidth = Math.random() * 2 + 1;
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(512, i + Math.random() * 4 - 2);
        ctx.stroke();
      }
      
      const texture = new THREE.CanvasTexture(canvas);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      return texture;
    };

    const noiseTexture = createNoiseTexture();
    const brushedTexture = createBrushedTexture();

    // Clone the scene to avoid modifying the cached version
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        
        // Enhance materials to make them glow with textures
        if (mesh.material) {
          const material = mesh.material as THREE.MeshStandardMaterial;
          
          // Make red materials emit bright light with texture
          if (material.color && (material.color.r > 0.5)) {
            material.emissive = new THREE.Color(0xff0000);
            material.emissiveIntensity = 0.9;
            material.metalness = 0.95;
            material.roughness = 0.15;
            
            // Add subtle texture to red parts
            if (noiseTexture) {
              material.roughnessMap = noiseTexture;
            }
            
            // Add environmental reflections
            material.envMapIntensity = 1.5;
          }
          
          // Make black materials more reflective with brushed texture
          if (material.color && (material.color.r < 0.2 && material.color.g < 0.2 && material.color.b < 0.2)) {
            material.metalness = 1;
            material.roughness = 0.2;
            material.emissive = new THREE.Color(0x330000);
            material.emissiveIntensity = 0.3;
            
            // Add brushed metal texture to dark parts
            if (brushedTexture) {
              material.roughnessMap = brushedTexture;
              material.metalnessMap = brushedTexture;
            }
            
            // Enhanced reflections for metal
            material.envMapIntensity = 2.0;
            
            // Add normal map for depth
            if (noiseTexture) {
              material.normalMap = noiseTexture;
              material.normalScale = new THREE.Vector2(0.3, 0.3);
            }
          }
          
          material.needsUpdate = true;
        }
      }
    });

    // Play all animations if they exist
    if (actions && Object.keys(actions).length > 0) {
      Object.values(actions).forEach((action) => {
        if (action) {
          action.reset().play();
        }
      });
      console.log('Playing animations:', Object.keys(actions));
    } else {
      console.log('No animations found in the model');
    }
  }, [actions, scene]);

  // Keep animations running smoothly
  useFrame((state, delta) => {
    if (mixer) {
      mixer.update(delta);
    }
  });

  return (
    <group ref={group}>
      {/* Internal bright lights to make the tesseract glow from inside */}
      {/* <pointLight position={[0, 0, 0]} intensity={3} color="#ff0000" distance={5} />
      <pointLight position={[1, 1, 1]} intensity={2} color="#ff3333" distance={4} />
      <pointLight position={[-1, -1, -1]} intensity={2} color="#ff3333" distance={4} />
      <pointLight position={[1, -1, 0]} intensity={1.5} color="#ff6666" distance={3} />
      <pointLight position={[-1, 1, 0]} intensity={1.5} color="#ff6666" distance={3} /> */}
      
      <primitive object={scene} scale={1.8} />
    </group>
  );
}

function Loader() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-600"></div>
    </div>
  );
}

export default function Model3D({ modelPath }: { modelPath: string }) {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0, 8], fov: 45 }}
      className="h-full w-full"
      gl={{ 
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.5,
      }}
    >
      <Suspense fallback={null}>
        {/* Enhanced Lighting for glowing interior */}
        <ambientLight intensity={0.3} />
        
        {/* Key lights for dramatic effect */}
        {/* <directionalLight position={[10, 10, 5]} intensity={0.8} color="#ffffff" castShadow />
        <directionalLight position={[-10, -10, -5]} intensity={0.6} color="#ff3333" /> */}
        
        {/* Rim lighting for edge glow */}
        {/* <spotLight position={[5, 0, 0]} angle={0.5} penumbra={1} intensity={1.2} color="#ff0000" />
        <spotLight position={[-5, 0, 0]} angle={0.5} penumbra={1} intensity={1.2} color="#ff0000" />
        <spotLight position={[0, 5, 0]} angle={0.5} penumbra={1} intensity={1} color="#ff3333" />
        <spotLight position={[0, -5, 0]} angle={0.5} penumbra={1} intensity={1} color="#ff3333" /> */}
        
        {/* HDR Environment for realistic reflections */}
        <Environment preset="night" environmentIntensity={0.4} />
        
        <Model url={modelPath} />
        
        {/* Subtle ground shadow */}
        <ContactShadows 
          position={[0, -3, 0]} 
          opacity={0.7} 
          scale={10} 
          blur={2.5} 
          far={4}
          color="#ff0000"
        />
      </Suspense>
      
      <OrbitControls 
        enableZoom={false}
        autoRotate 
        autoRotateSpeed={1.5}
      />
    </Canvas>
  );
}
