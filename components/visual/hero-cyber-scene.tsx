'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface HeroCyberSceneProps {
  compact?: boolean;
}

export function HeroCyberScene({ compact = false }: HeroCyberSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isWebGLReady, setIsWebGLReady] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    setIsWebGLReady(false);

    const deviceMemory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8;
    const saveData =
      (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData ?? false;
    if (
      window.innerWidth < 768 ||
      deviceMemory <= 4 ||
      navigator.hardwareConcurrency <= 4 ||
      saveData ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      container.dataset.webglFailed = 'lite-mode';
      return;
    }

    const probeCanvas = document.createElement('canvas');
    const probeContext = probeCanvas.getContext('webgl2');
    if (!probeContext) {
      container.dataset.webglFailed = 'true';
      return;
    }
    probeContext.getExtension('WEBGL_lose_context')?.loseContext();

    const width = Math.max(container.clientWidth, 1);
    const height = Math.max(container.clientHeight, 1);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x03254c, 0.045);

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 1.2, compact ? 6.5 : 5.8);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'default',
      });
    } catch {
      try {
        renderer = new THREE.WebGLRenderer({
          antialias: false,
          alpha: true,
          powerPreference: 'low-power',
        });
      } catch {
        container.dataset.webglFailed = 'true';
        return;
      }
    }
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.25));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.background = 'transparent';
    container.appendChild(renderer.domElement);

    // Root Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // --- 1. OCEANIC LIGHTING ---
    const ambientLight = new THREE.AmbientLight(0x0077b6, 2.2);
    scene.add(ambientLight);

    const cyanPointLight = new THREE.PointLight(0x00f0ff, 4.2, 14);
    cyanPointLight.position.set(2.5, 3.5, 2.5);
    scene.add(cyanPointLight);

    const skyPointLight = new THREE.PointLight(0x48cae4, 3.5, 12);
    skyPointLight.position.set(-3, -1, 2.5);
    scene.add(skyPointLight);

    const oceanGlowLight = new THREE.PointLight(0x0096c7, 2.8, 10);
    oceanGlowLight.position.set(0, 4, -2);
    scene.add(oceanGlowLight);

    // --- 2. 3D OCEAN SERVER BLADE RACK ---
    const serverGroup = new THREE.Group();

    // Rack Frame (Deep Ocean Metallic Navy)
    const rackGeometry = new THREE.BoxGeometry(2.2, 3.5, 1.2);
    const rackMaterial = new THREE.MeshStandardMaterial({
      color: 0x053359,
      metalness: 0.85,
      roughness: 0.2,
    });
    const rackMesh = new THREE.Mesh(rackGeometry, rackMaterial);
    rackMesh.castShadow = true;
    rackMesh.receiveShadow = true;
    serverGroup.add(rackMesh);

    // Glass Side Panel (Oceanic Cyan Translucent)
    const glassSide = new THREE.Mesh(
      new THREE.BoxGeometry(0.04, 3.4, 1.15),
      new THREE.MeshPhysicalMaterial({
        color: 0x48cae4,
        transparent: true,
        opacity: 0.45,
        roughness: 0.1,
        metalness: 0.15,
        transmission: 0.65,
        ior: 1.5,
      })
    );
    glassSide.position.set(1.12, 0, 0);
    serverGroup.add(glassSide);

    // Server Blades (7 Units)
    const bladeLEDs: THREE.Mesh[] = [];
    const bladeGeometry = new THREE.BoxGeometry(2.0, 0.36, 1.1);
    const bladeMaterial = new THREE.MeshStandardMaterial({
      color: 0x084777,
      metalness: 0.75,
      roughness: 0.25,
    });

    const ledCyanMaterial = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
    const ledFoamMaterial = new THREE.MeshBasicMaterial({ color: 0xcaf0f8 });
    const ledSkyMaterial = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });

    for (let i = 0; i < 7; i++) {
      const blade = new THREE.Mesh(bladeGeometry, bladeMaterial);
      blade.position.set(0, 1.35 - i * 0.45, 0.04);
      blade.castShadow = true;
      serverGroup.add(blade);

      // Front Grill Lines
      const grill = new THREE.Mesh(
        new THREE.BoxGeometry(1.4, 0.22, 0.02),
        new THREE.MeshStandardMaterial({ color: 0x031e36, metalness: 0.9, roughness: 0.4 })
      );
      grill.position.set(-0.2, 1.35 - i * 0.45, 0.6);
      serverGroup.add(grill);

      // LED Indicators (3 per blade)
      for (let j = 0; j < 3; j++) {
        const mat = j === 0 ? ledCyanMaterial : j === 1 ? ledFoamMaterial : ledSkyMaterial;
        const led = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 0.02), mat.clone());
        led.position.set(0.65 + j * 0.1, 1.35 - i * 0.45, 0.61);
        serverGroup.add(led);
        bladeLEDs.push(led);
      }
    }

    // Pedestal Base with Glowing Ocean Rings
    const baseCylinder = new THREE.Mesh(
      new THREE.CylinderGeometry(1.6, 1.8, 0.25, 36),
      new THREE.MeshStandardMaterial({ color: 0x042848, metalness: 0.9, roughness: 0.2 })
    );
    baseCylinder.position.set(0, -1.85, 0);
    serverGroup.add(baseCylinder);

    const baseRing = new THREE.Mesh(
      new THREE.TorusGeometry(1.7, 0.03, 16, 64),
      new THREE.MeshBasicMaterial({ color: 0x00f0ff })
    );
    baseRing.rotation.x = Math.PI / 2;
    baseRing.position.set(0, -1.82, 0);
    serverGroup.add(baseRing);

    rootGroup.add(serverGroup);

    // --- 3. HOLOGRAPHIC OCEAN DATA RINGS & QUANTUM CUBES ---
    const ringGroup = new THREE.Group();
    const ring1 = new THREE.Mesh(
      new THREE.TorusGeometry(2.4, 0.018, 16, 80),
      new THREE.MeshBasicMaterial({ color: 0x48cae4, transparent: true, opacity: 0.7 })
    );
    ring1.rotation.x = Math.PI / 3;
    ringGroup.add(ring1);

    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(2.9, 0.015, 16, 80),
      new THREE.MeshBasicMaterial({ color: 0x90e0ef, transparent: true, opacity: 0.55 })
    );
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = Math.PI / 6;
    ringGroup.add(ring2);

    rootGroup.add(ringGroup);

    // Floating Ocean Quantum Cubes
    const cubeCount = compact ? 5 : 8;
    const floatingCubes: { mesh: THREE.Mesh; speedX: number; speedY: number; offset: number }[] = [];
    const cubeGeom = new THREE.BoxGeometry(0.28, 0.28, 0.28);
    const cubeMat = new THREE.MeshStandardMaterial({
      color: 0x00b4d8,
      emissive: 0x0077b6,
      emissiveIntensity: 0.7,
      transparent: true,
      opacity: 0.88,
      metalness: 0.2,
      roughness: 0.1,
    });

    for (let i = 0; i < cubeCount; i++) {
      const cube = new THREE.Mesh(cubeGeom, cubeMat.clone());
      const angle = (i / cubeCount) * Math.PI * 2;
      const radius = 2.0 + Math.random() * 0.8;
      cube.position.set(
        Math.cos(angle) * radius,
        (Math.random() - 0.5) * 2.5,
        Math.sin(angle) * radius
      );
      rootGroup.add(cube);
      floatingCubes.push({
        mesh: cube,
        speedX: (Math.random() - 0.5) * 0.02,
        speedY: (Math.random() - 0.5) * 0.02,
        offset: Math.random() * Math.PI * 2,
      });
    }

    // --- 4. OCEAN PARTICLE CLOUD FIELD ---
    const particleCount = compact ? 280 : 550;
    const particleGeom = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 12;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }

    particleGeom.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x48cae4,
      size: 0.07,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeom, particleMat);
    scene.add(particles);

    // --- 5. INTERACTION & ANIMATION LOOP ---
    let targetRotationY = 0;
    let targetRotationX = 0;
    let currentRotationY = 0;
    let currentRotationX = 0;

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      let clientX = 0;
      let clientY = 0;
      if ('touches' in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ('clientX' in e) {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      const rect = container.getBoundingClientRect();
      const x = ((clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((clientY - rect.top) / rect.height) * 2 - 1);

      targetRotationY = x * 0.45;
      targetRotationX = -y * 0.25;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });

    let animationFrameId = 0;
    let lastFrameTime = 0;
    let isVisible = true;
    const timer = new THREE.Timer();
    timer.connect(document);

    let hasRenderedFrame = false;
    const handleContextLost = (event: Event) => {
      event.preventDefault();
      hasRenderedFrame = false;
      setIsWebGLReady(false);
    };

    renderer.domElement.addEventListener('webglcontextlost', handleContextLost);

    const animate = (timestamp?: DOMHighResTimeStamp) => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible || document.hidden || (timestamp && timestamp - lastFrameTime < 33)) {
        return;
      }
      lastFrameTime = timestamp ?? 0;
      timer.update(timestamp);
      const elapsedTime = timer.getElapsed();

      // Smooth camera / root parallax
      currentRotationY += (targetRotationY - currentRotationY) * 0.05;
      currentRotationX += (targetRotationX - currentRotationX) * 0.05;

      rootGroup.rotation.y = currentRotationY + Math.sin(elapsedTime * 0.3) * 0.08;
      rootGroup.rotation.x = currentRotationX + Math.cos(elapsedTime * 0.2) * 0.04;

      // Rotate holographic rings
      ring1.rotation.z += 0.008;
      ring2.rotation.z -= 0.006;
      ring2.rotation.y += 0.004;

      // Animate floating cubes
      floatingCubes.forEach((cube) => {
        cube.mesh.rotation.x += 0.015;
        cube.mesh.rotation.y += 0.02;
        cube.mesh.position.y += Math.sin(elapsedTime * 1.5 + cube.offset) * 0.004;
      });

      // Animate LED pulsing randomly
      bladeLEDs.forEach((led, index) => {
        if ((Math.floor(elapsedTime * 10) + index) % 6 === 0) {
          (led.material as THREE.MeshBasicMaterial).color.setHex(0xffffff);
        } else {
          (led.material as THREE.MeshBasicMaterial).color.setHex(
            index % 3 === 0 ? 0x00f0ff : index % 3 === 1 ? 0xcaf0f8 : 0x48cae4
          );
        }
      });

      // Slowly rotate particles
      particles.rotation.y = elapsedTime * 0.025;

      renderer.render(scene, camera);
      if (!hasRenderedFrame) {
        hasRenderedFrame = true;
        setIsWebGLReady(true);
      }
    };

    animate();

    const resizeObserver = new ResizeObserver(() => {
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    });
    resizeObserver.observe(container);

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { rootMargin: '120px' }
    );
    visibilityObserver.observe(container);

    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
      timer.dispose();
      renderer.domElement.removeEventListener('webglcontextlost', handleContextLost);

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      scene.traverse((object) => {
        const renderable = object as THREE.Mesh | THREE.Line;
        if ('geometry' in renderable && renderable.geometry) {
          renderable.geometry.dispose();
        }
        if ('material' in renderable && renderable.material) {
          const materials = Array.isArray(renderable.material) ? renderable.material : [renderable.material];
          materials.forEach((material) => material.dispose());
        }
      });
      renderer.dispose();
      scene.clear();
    };
  }, [compact]);

  return (
    <div
      className="relative h-full w-full select-none overflow-hidden"
      style={{ minHeight: compact ? '360px' : '480px' }}
      aria-label="STACloud 3D Ocean Server Scene"
    >
      <div
        className={`absolute inset-0 z-0 grid place-items-center transition-opacity duration-500 ${isWebGLReady ? 'opacity-0' : 'opacity-100'}`}
        aria-hidden="true"
      >
        <div className="hero-fallback-scene relative h-64 w-64 sm:h-80 sm:w-80">
          <div className="hero-fallback-ring hero-fallback-ring-one absolute inset-5 rounded-full border border-cyan-200/25 [transform:rotateX(62deg)_rotateZ(18deg)]" />
          <div className="hero-fallback-ring hero-fallback-ring-two absolute inset-12 rounded-full border border-sky-300/20 [transform:rotateX(58deg)_rotateZ(-22deg)]" />
          <div className="hero-fallback-rack absolute left-1/2 top-1/2 h-44 w-28 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-cyan-200/35 bg-gradient-to-br from-[#0b5f91] to-[#021426] p-3 shadow-[0_0_55px_rgba(72,202,228,0.28)]">
            {[0, 1, 2, 3, 4].map((item) => (
              <span key={item} className="mb-3 block h-4 rounded bg-cyan-100/80 shadow-[inset_-12px_0_rgba(72,202,228,0.38)]" />
            ))}
          </div>
          <span className="hero-fallback-cube hero-fallback-cube-one absolute left-5 top-20 h-5 w-5 rotate-45 border border-cyan-200/50 bg-sky-400/50" />
          <span className="hero-fallback-cube hero-fallback-cube-two absolute bottom-16 right-4 h-7 w-7 rotate-45 border border-cyan-200/50 bg-cyan-300/40" />
        </div>
      </div>
      <div
        ref={containerRef}
        className={`absolute inset-0 z-10 transition-opacity duration-500 ${isWebGLReady ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
}
