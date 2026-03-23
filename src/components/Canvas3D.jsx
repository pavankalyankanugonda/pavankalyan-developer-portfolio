import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, PerspectiveCamera, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShape = ({ args, position, speed, distort, color }) => {
  const mesh = useRef();
  return (
    <Float speed={speed} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={mesh} position={position}>
        <sphereGeometry args={args} />
        <MeshDistortMaterial
          color={color}
          speed={2}
          distort={distort}
          radius={1}
          metalness={0.2}
          roughness={0.1}
          transparent
          opacity={0.15}
        />
      </mesh>
    </Float>
  );
};

const MinimalistParticles = ({ count = 2000, color = "#94a3b8" }) => {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        p[i * 3] = (Math.random() - 0.5) * 50;
        p[i * 3 + 1] = (Math.random() - 0.5) * 50;
        p[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return p;
  }, [count]);

  const ref = useRef();
  useFrame((state) => {
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.05;
  });

  return (
    <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={color}
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
};

export default function Canvas3D() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const updateTheme = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setTheme(isDark ? 'dark' : 'light');
    };
    
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    updateTheme();
    return () => observer.disconnect();
  }, []);

  const isDarkMode = theme === 'dark';
  const bgColor = isDarkMode ? '#000000' : '#F9FAFB';
  const primaryColor = isDarkMode ? '#1A1A1A' : '#E5E7EB';
  const secondaryColor = isDarkMode ? '#0D0D0D' : '#F3F4F6';

  return (
    <div className="fixed inset-0 -z-10 transition-colors duration-700" style={{ backgroundColor: bgColor }}>
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={50} />
        
        <ambientLight intensity={isDarkMode ? 0.6 : 1.2} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color={isDarkMode ? '#ffffff' : '#495057'} />
        
        {/* Floating background shapes */}
        <FloatingShape args={[4, 64, 64]} position={[-8, 4, -5]} speed={1} distort={0.3} color={primaryColor} />
        <FloatingShape args={[3, 64, 64]} position={[8, -5, -8]} speed={1.2} distort={0.4} color={secondaryColor} />
        <FloatingShape args={[2, 64, 64]} position={[0, 8, -10]} speed={0.8} distort={0.2} color={primaryColor} />
        
        <MinimalistParticles count={2000} color={isDarkMode ? "#6C757D" : "#ADB5BD"} />
        
        <fog attach="fog" args={[bgColor, 5, 30]} />
      </Canvas>
    </div>
  );
}
