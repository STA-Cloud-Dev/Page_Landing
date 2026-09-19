'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

type ServerCloudSceneProps = {
  compact?: boolean;
};

function createServerRack() {
  const group = new THREE.Group();

  const rackMaterial = new THREE.MeshStandardMaterial({
    color: 0x087ead,
    metalness: 0.42,
    roughness: 0.28,
  });
  const faceMaterial = new THREE.MeshStandardMaterial({
    color: 0xf7fcff,
    metalness: 0.2,
    roughness: 0.26,
  });
  const accentMaterial = new THREE.MeshStandardMaterial({
    color: 0x38bdf8,
    emissive: 0x0ea5e9,
    emissiveIntensity: 0.45,
    metalness: 0.12,
    roughness: 0.35,
  });

  const rack = new THREE.Mesh(new THREE.BoxGeometry(2.1, 3.4, 0.82), rackMaterial);
  rack.position.y = 0.08;
  rack.castShadow = true;
  rack.receiveShadow = true;
  group.add(rack);

  for (let index = 0; index < 7; index += 1) {
    const bay = new THREE.Mesh(new THREE.BoxGeometry(1.72, 0.28, 0.08), faceMaterial);
    bay.position.set(0, 1.22 - index * 0.41, 0.47);
    bay.castShadow = true;
    group.add(bay);

    const led = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.11, 0.04), accentMaterial.clone());
    led.position.set(0.68, bay.position.y, 0.54);
    group.add(led);
  }

  const base = new THREE.Mesh(
    new THREE.CylinderGeometry(1.2, 1.45, 0.22, 42),
    new THREE.MeshStandardMaterial({
      color: 0xf0fbff,
      metalness: 0.1,
      roughness: 0.45,
    })
  );
  base.position.y = -1.78;
  base.receiveShadow = true;
  group.add(base);

  return group;
}

function createCloudCluster(x: number, y: number, z: number, scale: number) {
  const cluster = new THREE.Group();
  const material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    emissive: 0xbdefff,
    emissiveIntensity: 0.06,
    transparent: true,
    opacity: 0.98,
    roughness: 0.52,
  });

  const parts = [
    [-0.62, -0.03, 0, 0.48],
    [-0.22, 0.13, 0.02, 0.62],
    [0.28, 0.05, -0.02, 0.54],
    [0.72, -0.04, 0.01, 0.42],
  ] as const;

  for (const [partX, partY, partZ, radius] of parts) {
    const sphere = new THREE.Mesh(new THREE.SphereGeometry(radius, 24, 16), material.clone());
    sphere.position.set(partX, partY, partZ);
    sphere.scale.y = 0.62;
    sphere.castShadow = true;
    sphere.receiveShadow = true;
    cluster.add(sphere);
  }

  cluster.position.set(x, y, z);
  cluster.scale.setScalar(scale);
  return cluster;
}

function createFloatingCrystal(x: number, y: number, z: number, scale: number) {
  const group = new THREE.Group();
  const body = new THREE.Mesh(
    new THREE.OctahedronGeometry(0.32, 0),
    new THREE.MeshStandardMaterial({
      color: 0x7dd3fc,
      emissive: 0x0ea5e9,
      emissiveIntensity: 0.28,
      metalness: 0.18,
      roughness: 0.18,
      transparent: true,
      opacity: 0.86,
    })
  );
  body.castShadow = true;
  group.add(body);

  const halo = new THREE.Mesh(
    new THREE.TorusGeometry(0.42, 0.01, 10, 48),
    new THREE.MeshStandardMaterial({
      color: 0xbae6fd,
      emissive: 0x38bdf8,
      emissiveIntensity: 0.34,
      transparent: true,
      opacity: 0.58,
    })
  );
  halo.rotation.x = Math.PI / 2.4;
  group.add(halo);

  group.position.set(x, y, z);
  group.scale.setScalar(scale);
  return group;
}

function createDataCube(x: number, y: number, z: number, scale: number) {
  const group = new THREE.Group();
  const core = new THREE.Mesh(
    new THREE.BoxGeometry(0.38, 0.38, 0.38),
    new THREE.MeshStandardMaterial({
      color: 0xbdefff,
      emissive: 0x38bdf8,
      emissiveIntensity: 0.22,
      metalness: 0.08,
      roughness: 0.18,
      transparent: true,
      opacity: 0.82,
    })
  );
  core.rotation.set(0.6, 0.4, 0.2);
  group.add(core);

  const frame = new THREE.Mesh(
    new THREE.TorusGeometry(0.36, 0.008, 8, 48),
    new THREE.MeshStandardMaterial({
      color: 0xe0f2fe,
      emissive: 0x7dd3fc,
      emissiveIntensity: 0.2,
      transparent: true,
      opacity: 0.62,
    })
  );
  frame.rotation.x = Math.PI / 2;
  group.add(frame);

  group.position.set(x, y, z);
  group.scale.setScalar(scale);
  return group;
}

function createNetworkBeam(start: THREE.Vector3, end: THREE.Vector3, opacity = 0.42) {
  const geometry = new THREE.BufferGeometry().setFromPoints([start, end]);
  const material = new THREE.LineBasicMaterial({
    color: 0xbae6fd,
    transparent: true,
    opacity,
  });

  return new THREE.Line(geometry, material);
}

export function ServerCloudScene({ compact = false }: ServerCloudSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

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
      container.dataset.lite = 'true';
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(4.55, 2.45, 6.15);
    camera.lookAt(0, 0, 0);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    } catch {
      container.dataset.lite = 'true';
      return;
    }
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.16;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    container.appendChild(renderer.domElement);

    const ambient = new THREE.HemisphereLight(0xf7fcff, 0x0f5a78, 2.0);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xffffff, 3.1);
    keyLight.position.set(3.2, 4.6, 5.2);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const fillLight = new THREE.PointLight(0x7dd3fc, 5.4, 10);
    fillLight.position.set(-2.8, 1.1, 2.2);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0xffffff, 2.8, 8);
    rimLight.position.set(1.8, 2.4, -2.4);
    scene.add(rimLight);

    const rack = createServerRack();
    rack.rotation.y = -0.42;
    rack.rotation.x = 0.04;
    rack.scale.setScalar(compact ? 0.95 : 1.06);
    scene.add(rack);

    const satelliteRacks = [
      createServerRack(),
      createServerRack(),
      createServerRack(),
    ];
    satelliteRacks[0].position.set(-1.62, -0.52, 0.54);
    satelliteRacks[0].scale.setScalar(compact ? 0.36 : 0.68);
    satelliteRacks[0].rotation.set(0.03, -0.18, 0);
    satelliteRacks[1].position.set(1.74, -0.5, 0.42);
    satelliteRacks[1].scale.setScalar(compact ? 0.34 : 0.64);
    satelliteRacks[1].rotation.set(0.03, -0.68, 0);
    satelliteRacks[2].position.set(0.24, -0.78, 1.62);
    satelliteRacks[2].scale.setScalar(compact ? 0.3 : 0.56);
    satelliteRacks[2].rotation.set(0.02, -0.34, 0);
    satelliteRacks.forEach((serverRack) => scene.add(serverRack));
    const satelliteBaseStates = satelliteRacks.map((serverRack) => ({
      y: serverRack.position.y,
      rotationY: serverRack.rotation.y,
    }));

    const networkLines = [
      createNetworkBeam(new THREE.Vector3(0, 0.1, 0.2), new THREE.Vector3(-1.62, -0.38, 0.68), 0.48),
      createNetworkBeam(new THREE.Vector3(0, 0.06, 0.2), new THREE.Vector3(1.74, -0.36, 0.56), 0.48),
      createNetworkBeam(new THREE.Vector3(0, -0.18, 0.42), new THREE.Vector3(0.24, -0.64, 1.42), 0.38),
      createNetworkBeam(new THREE.Vector3(-1.62, -0.38, 0.68), new THREE.Vector3(1.74, -0.36, 0.56), 0.26),
    ];
    networkLines.forEach((line) => scene.add(line));

    const cloudA = createCloudCluster(-1.95, -1.26, 0.58, 0.86);
    const cloudB = createCloudCluster(1.78, -1.06, -0.16, 0.72);
    const cloudC = createCloudCluster(0.2, 1.82, -0.42, 0.52);
    const cloudD = createCloudCluster(-2.34, 0.84, -0.82, 0.46);
    const cloudE = createCloudCluster(2.2, 0.72, 0.68, 0.42);
    const cloudF = createCloudCluster(-0.62, -1.64, 1.08, compact ? 0.58 : 0.74);
    const cloudG = createCloudCluster(1.02, 1.36, 0.86, compact ? 0.38 : 0.48);
    const cloudH = createCloudCluster(-2.78, -0.42, 0.42, compact ? 0.38 : 0.5);
    scene.add(cloudA, cloudB, cloudC, cloudD, cloudE, cloudF, cloudG, cloudH);

    const crystals = [
      createFloatingCrystal(-2.32, 0.18, 1.22, compact ? 0.72 : 0.86),
      createFloatingCrystal(2.26, 0.44, 0.96, compact ? 0.62 : 0.76),
      createFloatingCrystal(0.72, -1.42, 1.5, compact ? 0.56 : 0.68),
    ];
    crystals.forEach((crystal) => scene.add(crystal));
    const crystalBaseY = crystals.map((crystal) => crystal.position.y);

    const dataCubes = [
      createDataCube(-1.28, 1.08, 1.34, compact ? 0.58 : 0.72),
      createDataCube(1.38, 1.02, 1.16, compact ? 0.52 : 0.68),
      createDataCube(-0.42, -0.98, 1.72, compact ? 0.42 : 0.54),
      createDataCube(2.45, -0.38, -0.16, compact ? 0.44 : 0.56),
    ];
    dataCubes.forEach((cube) => scene.add(cube));
    const dataCubeBaseY = dataCubes.map((cube) => cube.position.y);

    const ringMaterial = new THREE.MeshStandardMaterial({
      color: 0x0ea5e9,
      emissive: 0x38bdf8,
      emissiveIntensity: 0.36,
      transparent: true,
      opacity: 0.5,
      roughness: 0.28,
    });
    const ring = new THREE.Mesh(new THREE.TorusGeometry(2.28, 0.012, 12, 128), ringMaterial);
    ring.rotation.x = Math.PI / 2.35;
    ring.rotation.z = 0.28;
    scene.add(ring);

    const outerRing = new THREE.Mesh(new THREE.TorusGeometry(2.86, 0.008, 10, 128), ringMaterial.clone());
    outerRing.rotation.x = Math.PI / 2.12;
    outerRing.rotation.z = -0.22;
    outerRing.material.opacity = 0.3;
    scene.add(outerRing);

    const nodes = Array.from({ length: compact ? 8 : 14 }, (_, index) => {
      const node = new THREE.Mesh(
        new THREE.SphereGeometry(index % 3 === 0 ? 0.055 : 0.04, 16, 12),
        new THREE.MeshStandardMaterial({
          color: index % 2 === 0 ? 0x0284c7 : 0x7dd3fc,
          emissive: 0x38bdf8,
          emissiveIntensity: 0.5,
          roughness: 0.25,
        })
      );
      const angle = (Math.PI * 2 * index) / (compact ? 8 : 14);
      node.position.set(Math.cos(angle) * 2.28, Math.sin(angle) * 0.46, Math.sin(angle) * 1.34);
      scene.add(node);
      return node;
    });

    let isMobileLayout = false;

    const setSize = () => {
      const width = Math.max(container.clientWidth, 320);
      const isMobile = width < 640;
      isMobileLayout = isMobile;
      const height = Math.max(container.clientHeight, compact ? 340 : isMobile ? 430 : 520);
      camera.fov = isMobile ? 60 : 28;
      camera.position.set(isMobile ? 4.0 : 3.68, isMobile ? 1.75 : 2.1, isMobile ? 10.6 : 4.05);
      camera.lookAt(0, isMobile ? 0.35 : 0, 0);
      rack.scale.setScalar(isMobile ? 0.42 : compact ? 0.95 : 1.55);
      rack.position.set(isMobile ? -0.06 : 0, isMobile ? 0.72 : 0, 0);
      satelliteRacks.forEach((serverRack) => {
        serverRack.visible = !isMobile;
      });
      networkLines.forEach((line) => {
        line.visible = !isMobile;
      });
      dataCubes.forEach((cube) => {
        cube.visible = !isMobile;
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.25));
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    const observer = new ResizeObserver(setSize);
    observer.observe(container);
    setSize();

    let frameId = 0;
    let lastFrameTime = 0;
    let isVisible = true;
    const timer = new THREE.Timer();
    timer.connect(document);
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const animate = (timestamp?: DOMHighResTimeStamp) => {
      if (!prefersReducedMotion) {
        frameId = window.requestAnimationFrame(animate);
      }
      if (!isVisible || document.hidden || (timestamp && timestamp - lastFrameTime < 33)) {
        return;
      }
      lastFrameTime = timestamp ?? 0;
      timer.update(timestamp);
      const elapsed = timer.getElapsed();

      rack.rotation.y =
        (isMobileLayout ? -0.08 : -0.42) + Math.sin(elapsed * 0.52) * (isMobileLayout ? 0.03 : 0.09);
      satelliteRacks.forEach((serverRack, index) => {
        serverRack.rotation.y = satelliteBaseStates[index].rotationY + Math.sin(elapsed * 0.42 + index) * 0.035;
        serverRack.position.y = satelliteBaseStates[index].y + Math.sin(elapsed * 0.52 + index) * 0.035;
      });
      ring.rotation.z = elapsed * 0.18;
      outerRing.rotation.z = -elapsed * 0.12;
      cloudA.position.x = -1.95 + Math.sin(elapsed * 0.42) * 0.08;
      cloudB.position.x = 1.78 + Math.cos(elapsed * 0.38) * 0.07;
      cloudC.position.y = 1.82 + Math.sin(elapsed * 0.34) * 0.06;
      cloudD.position.y = 0.84 + Math.cos(elapsed * 0.44) * 0.05;
      cloudE.position.x = 2.2 + Math.sin(elapsed * 0.36) * 0.05;
      cloudF.position.x = -0.62 + Math.cos(elapsed * 0.32) * 0.06;
      cloudG.position.y = 1.36 + Math.sin(elapsed * 0.4) * 0.05;
      cloudH.position.x = -2.78 + Math.sin(elapsed * 0.3) * 0.05;

      crystals.forEach((crystal, index) => {
        crystal.rotation.y = elapsed * (0.38 + index * 0.05);
        crystal.rotation.x = Math.sin(elapsed * 0.48 + index) * 0.16;
        crystal.position.y = crystalBaseY[index] + Math.sin(elapsed * 0.72 + index) * 0.05;
      });

      dataCubes.forEach((cube, index) => {
        cube.rotation.y = elapsed * (0.32 + index * 0.04);
        cube.rotation.x = Math.sin(elapsed * 0.38 + index) * 0.18;
        cube.position.y = dataCubeBaseY[index] + Math.sin(elapsed * 0.6 + index) * 0.05;
      });

      nodes.forEach((node, index) => {
        const angle = elapsed * 0.35 + (Math.PI * 2 * index) / nodes.length;
        node.position.x = Math.cos(angle) * 2.28;
        node.position.z = Math.sin(angle) * 1.34;
        node.position.y = Math.sin(angle * 1.6) * 0.5;
      });

      renderer.render(scene, camera);
    };

    animate();

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { rootMargin: '120px' }
    );
    visibilityObserver.observe(container);

    return () => {
      window.cancelAnimationFrame(frameId);
      visibilityObserver.disconnect();
      observer.disconnect();
      timer.dispose();
      renderer.dispose();
      renderer.domElement.remove();
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
    };
  }, [compact]);

  return (
    <div
      ref={containerRef}
      className={compact ? 'server-cloud-scene server-cloud-scene-compact' : 'server-cloud-scene'}
      aria-hidden="true"
    >
      <div className="mobile-cloud-preview">
        <span className="mobile-rack">
          <span />
          <span />
          <span />
          <span />
          <span />
        </span>
        <span className="mobile-cloud mobile-cloud-one" />
        <span className="mobile-cloud mobile-cloud-two" />
        <span className="mobile-cloud mobile-cloud-three" />
      </div>
    </div>
  );
}
