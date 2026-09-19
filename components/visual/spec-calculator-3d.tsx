'use client';

import React, { useState, useRef, useEffect } from 'react';
import * as THREE from 'three';

interface CloudPreset {
  id: string;
  name: string;
  defaultVCore: number;
  defaultRamGB: number;
  defaultDiskGB: number;
  maxVCore: number;
  maxRamGB: number;
  cpuFamily: string;
  location: string;
  description: string;
}

const CLOUD_PRESETS: CloudPreset[] = [
  {
    id: 'custom-enterprise',
    name: 'Cloud Tùy Biến (Max 64 Core / 128GB)',
    defaultVCore: 16,
    defaultRamGB: 32,
    defaultDiskGB: 250,
    maxVCore: 64,
    maxRamGB: 128,
    cpuFamily: 'AMD EPYC / Intel Xeon Scalable',
    location: 'OVH Singapore (10 Gbps Anti-DDoS)',
    description: 'Tùy chỉnh không giới hạn từ nhỏ đến máy chủ Dedicated cực khủng cho doanh nghiệp & cộng đồng lớn.',
  },
  {
    id: 'dev-sg',
    name: 'Gói DEV SG (AMD Milan)',
    defaultVCore: 1,
    defaultRamGB: 1,
    defaultDiskGB: 20,
    maxVCore: 8,
    maxRamGB: 16,
    cpuFamily: 'AMD EPYC Milan 7003',
    location: 'Singapore (OVH Shield)',
    description: 'Tối ưu cho bot Discord, Node.js, Python, test lab và web app nhỏ.',
  },
  {
    id: 'mc-sg',
    name: 'Gói MC SG (Minecraft High Perf)',
    defaultVCore: 4,
    defaultRamGB: 8,
    defaultDiskGB: 60,
    maxVCore: 16,
    maxRamGB: 32,
    cpuFamily: 'AMD EPYC Milan High Clock',
    location: 'Singapore (OVH Shield)',
    description: 'Xung nhịp cao, tối ưu đơn nhân cho máy chủ Minecraft, Palworld, CS2.',
  },
  {
    id: 'sta-epyc',
    name: 'STA-AMD-EPYC (Dedicated Power)',
    defaultVCore: 32,
    defaultRamGB: 64,
    defaultDiskGB: 500,
    maxVCore: 64,
    maxRamGB: 128,
    cpuFamily: 'AMD EPYC Gen 3 / Gen 4',
    location: 'OVH Singapore Datacenter',
    description: 'Workload tải nặng, AI, cơ sở dữ liệu lớn và cụm nhiều game server.',
  },
];

const VCORE_STEPS = [1, 2, 4, 6, 8, 12, 16, 24, 32, 48, 64];
const RAM_STEPS = [1, 2, 4, 6, 8, 12, 16, 24, 32, 48, 64, 96, 128];
const DISK_STEPS = [10, 20, 40, 80, 150, 250, 500, 1000, 2000];

interface SpecCalculator3DProps {
  discordUrl: string;
  zaloUrl: string;
  messengerUrl: string;
}

type HardwareSceneParts = {
  coreTiles: THREE.Mesh[];
  ramSticks: THREE.Mesh[];
  driveModules: THREE.Mesh[];
  cpuPlate: THREE.Mesh;
};

function LiteHardwareVisual({ vCore, ramGB, diskGB }: { vCore: number; ramGB: number; diskGB: number }) {
  const activeRam = Math.min(8, Math.max(1, Math.ceil(ramGB / 16)));
  const activeDrives = diskGB >= 2000 ? 4 : diskGB >= 1000 ? 3 : diskGB >= 250 ? 2 : 1;

  return (
    <div className="relative mx-auto h-64 w-full max-w-sm overflow-hidden rounded-2xl border border-cyan-300/25 bg-[#031a30] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
      <div className="absolute inset-4 rounded-xl border border-cyan-300/20 bg-[#06345a] shadow-[0_20px_35px_rgba(0,0,0,0.28)] [transform:perspective(700px)_rotateX(54deg)]" />
      <div className="absolute left-1/2 top-[47%] grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 grid-cols-8 gap-1 rounded-lg border border-cyan-100/35 bg-[#021426] p-2 shadow-[0_0_35px_rgba(72,202,228,0.3)]">
        {Array.from({ length: 64 }, (_, index) => (
          <span
            key={index}
            className={`rounded-[2px] transition-colors duration-300 ${index < vCore ? 'bg-cyan-100 shadow-[0_0_6px_rgba(144,224,239,0.8)]' : 'bg-slate-800'}`}
          />
        ))}
      </div>
      <div className="absolute left-6 top-14 flex gap-1.5">
        {Array.from({ length: 4 }, (_, index) => (
          <span key={index} className={`h-16 w-2 rounded-sm ${index * 2 < activeRam ? 'bg-sky-300' : 'bg-slate-700'}`} />
        ))}
      </div>
      <div className="absolute right-6 top-14 flex gap-1.5">
        {Array.from({ length: 4 }, (_, index) => (
          <span key={index} className={`h-16 w-2 rounded-sm ${index * 2 + 1 < activeRam ? 'bg-sky-300' : 'bg-slate-700'}`} />
        ))}
      </div>
      <div className="absolute inset-x-12 bottom-7 grid grid-cols-4 gap-2">
        {Array.from({ length: 4 }, (_, index) => (
          <span key={index} className={`h-2 rounded-full ${index < activeDrives ? 'bg-cyan-200 shadow-[0_0_8px_rgba(144,224,239,0.6)]' : 'bg-slate-700'}`} />
        ))}
      </div>
      <span className="absolute left-4 top-4 text-[10px] font-bold uppercase tracking-wider text-sky-200">RAM DIMM</span>
      <span className="absolute right-4 top-4 text-[10px] font-bold uppercase tracking-wider text-sky-200">{vCore}/64 Cores</span>
      <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-wider text-cyan-200">NVMe {diskGB >= 1000 ? `${diskGB / 1000} TB` : `${diskGB} GB`}</span>
    </div>
  );
}

function updateHardwareParts(parts: HardwareSceneParts, config: { vCore: number; ramGB: number; diskGB: number }) {
  const activeRam = Math.min(parts.ramSticks.length, Math.max(1, Math.ceil(config.ramGB / 16)));
  const activeDrives = config.diskGB >= 2000 ? 4 : config.diskGB >= 1000 ? 3 : config.diskGB >= 250 ? 2 : 1;

  parts.coreTiles.forEach((core, index) => {
    const material = core.material as THREE.MeshStandardMaterial;
    const active = index < config.vCore;
    material.color.setHex(active ? 0xcaf0f8 : 0x09243c);
    material.emissive.setHex(active ? 0x00c9ef : 0x000000);
    material.emissiveIntensity = active ? 0.7 : 0;
    core.scale.y = active ? 1.25 : 0.62;
    core.userData.active = active;
  });

  parts.ramSticks.forEach((ram, index) => {
    const material = ram.material as THREE.MeshStandardMaterial;
    const active = (index % 4) * 2 + (index >= 4 ? 1 : 0) < activeRam;
    material.color.setHex(active ? 0x38bdf8 : 0x0b253d);
    material.emissive.setHex(active ? 0x006b9e : 0x000000);
    material.emissiveIntensity = active ? 0.45 : 0;
    ram.userData.active = active;
  });

  parts.driveModules.forEach((drive, index) => {
    const material = drive.material as THREE.MeshStandardMaterial;
    const active = index < activeDrives;
    material.color.setHex(active ? 0x67e8f9 : 0x0b253d);
    material.emissive.setHex(active ? 0x0891b2 : 0x000000);
    material.emissiveIntensity = active ? 0.48 : 0;
    drive.userData.active = active;
  });

  const cpuScale = 0.9 + (config.vCore / 64) * 0.16;
  parts.cpuPlate.scale.set(cpuScale, 1, cpuScale);
}

export function SpecCalculator3D({ discordUrl, zaloUrl, messengerUrl }: SpecCalculator3DProps) {
  const [selectedPresetId, setSelectedPresetId] = useState<string>('custom-enterprise');
  const preset = CLOUD_PRESETS.find((p) => p.id === selectedPresetId) || CLOUD_PRESETS[0];

  const [vCoreIndex, setVCoreIndex] = useState<number>(6); // 16 vCore
  const [ramIndex, setRamIndex] = useState<number>(6); // 32 GB RAM
  const [diskIndex, setDiskIndex] = useState<number>(5); // 250 GB SSD

  const currentVCore = VCORE_STEPS[vCoreIndex] || 16;
  const currentRamGB = RAM_STEPS[ramIndex] || 32;
  const currentDiskGB = DISK_STEPS[diskIndex] || 250;
  const hardwarePartsRef = useRef<HardwareSceneParts | null>(null);
  const hardwareConfigRef = useRef({ vCore: currentVCore, ramGB: currentRamGB, diskGB: currentDiskGB });
  const [hardwareMode, setHardwareMode] = useState<'loading' | 'webgl' | 'lite'>('loading');

  // When preset changes, adjust defaults
  useEffect(() => {
    const vcIdx = VCORE_STEPS.findIndex((v) => v >= preset.defaultVCore);
    const ramIdx = RAM_STEPS.findIndex((r) => r >= preset.defaultRamGB);
    const diskIdx = DISK_STEPS.findIndex((d) => d >= preset.defaultDiskGB);
    setVCoreIndex(vcIdx >= 0 ? vcIdx : 0);
    setRamIndex(ramIdx >= 0 ? ramIdx : 0);
    setDiskIndex(diskIdx >= 0 ? diskIdx : 0);
  }, [selectedPresetId]);

  useEffect(() => {
    hardwareConfigRef.current = { vCore: currentVCore, ramGB: currentRamGB, diskGB: currentDiskGB };
    if (hardwarePartsRef.current) {
      updateHardwareParts(hardwarePartsRef.current, hardwareConfigRef.current);
    }
  }, [currentVCore, currentRamGB, currentDiskGB]);

  // --- 3D Ocean Hardware Engine: motherboard, CPU core matrix, RAM and NVMe ---
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = canvasRef.current;
    if (!container) return;

    const deviceMemory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8;
    const saveData =
      (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData ?? false;
    const useLiteMode =
      window.innerWidth < 768 ||
      deviceMemory <= 4 ||
      navigator.hardwareConcurrency <= 4 ||
      saveData ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (useLiteMode) {
      setHardwareMode('lite');
      return;
    }

    const probeCanvas = document.createElement('canvas');
    const probeContext = probeCanvas.getContext('webgl2');
    if (!probeContext) {
      container.dataset.webglFailed = 'true';
      setHardwareMode('lite');
      return;
    }
    probeContext.getExtension('WEBGL_lose_context')?.loseContext();

    const width = Math.max(container.clientWidth, 1);
    const height = Math.max(container.clientHeight, 1);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(43, width / height, 0.1, 100);
    camera.position.set(0, 3.1, 6.2);
    camera.lookAt(0, 0, 0);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: deviceMemory > 6, alpha: true, powerPreference: 'default' });
    } catch {
      container.dataset.webglFailed = 'true';
      setHardwareMode('lite');
      return;
    }
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.25));
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.background = 'transparent';
    container.appendChild(renderer.domElement);
    setHardwareMode('webgl');

    scene.add(new THREE.HemisphereLight(0xb9f3ff, 0x03172f, 2.4));

    const keyLight = new THREE.DirectionalLight(0xffffff, 3.2);
    keyLight.position.set(3, 5, 4);
    scene.add(keyLight);

    const cyanLight = new THREE.PointLight(0x00d9ff, 5, 12);
    cyanLight.position.set(-2.5, 2.4, 2.8);
    scene.add(cyanLight);

    const hardwareGroup = new THREE.Group();
    hardwareGroup.rotation.x = 0.14;
    scene.add(hardwareGroup);

    const board = new THREE.Mesh(
      new THREE.BoxGeometry(3.9, 0.14, 2.85),
      new THREE.MeshStandardMaterial({ color: 0x06345a, metalness: 0.78, roughness: 0.3 })
    );
    board.receiveShadow = true;
    hardwareGroup.add(board);

    const boardEdge = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.BoxGeometry(3.9, 0.14, 2.85)),
      new THREE.LineBasicMaterial({ color: 0x48cae4, transparent: true, opacity: 0.65 })
    );
    boardEdge.position.y = 0.08;
    hardwareGroup.add(boardEdge);

    const cpuSocket = new THREE.Mesh(
      new THREE.BoxGeometry(1.55, 0.18, 1.55),
      new THREE.MeshStandardMaterial({ color: 0x021a30, metalness: 0.85, roughness: 0.24 })
    );
    cpuSocket.position.y = 0.16;
    hardwareGroup.add(cpuSocket);

    const cpuPlate = new THREE.Mesh(
      new THREE.BoxGeometry(1.22, 0.13, 1.22),
      new THREE.MeshStandardMaterial({
        color: 0x10a9d4,
        emissive: 0x006b9e,
        emissiveIntensity: 0.8,
        metalness: 0.85,
        roughness: 0.2,
      })
    );
    cpuPlate.position.y = 0.31;
    hardwareGroup.add(cpuPlate);

    const coreTiles: THREE.Mesh[] = [];
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0xcaf0f8,
      emissive: 0x00c9ef,
      emissiveIntensity: 0.65,
      metalness: 0.3,
      roughness: 0.2,
    });
    const coreGeometry = new THREE.BoxGeometry(0.1, 0.045, 0.1);
    for (let row = 0; row < 8; row++) {
      for (let column = 0; column < 8; column++) {
        const core = new THREE.Mesh(coreGeometry, coreMaterial.clone());
        core.position.set(-0.42 + column * 0.12, 0.39, -0.42 + row * 0.12);
        hardwareGroup.add(core);
        coreTiles.push(core);
      }
    }

    const ramMaterial = new THREE.MeshStandardMaterial({
      color: 0x087ead,
      emissive: 0x006b9e,
      emissiveIntensity: 0.38,
      metalness: 0.72,
      roughness: 0.24,
    });
    const ramSticks: THREE.Mesh[] = [];
    for (let side = 0; side < 2; side++) {
      for (let index = 0; index < 4; index++) {
        const ramStick = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.32, 0.72), ramMaterial.clone());
        ramStick.position.set(side === 0 ? -1.43 - index * 0.18 : 1.43 + index * 0.18, 0.28, 0.12);
        ramStick.rotation.y = Math.PI / 2;
        hardwareGroup.add(ramStick);
        ramSticks.push(ramStick);
      }
    }

    const driveMaterial = new THREE.MeshStandardMaterial({
      color: 0x0c5f91,
      emissive: 0x004b73,
      emissiveIntensity: 0.45,
      metalness: 0.7,
      roughness: 0.24,
    });
    const driveModules: THREE.Mesh[] = [];
    for (let index = 0; index < 4; index++) {
      const drive = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.08, 0.22), driveMaterial.clone());
      drive.position.set(-1.15 + index * 0.76, 0.22, -1.02);
      hardwareGroup.add(drive);
      driveModules.push(drive);
    }

    const circuitMaterial = new THREE.LineBasicMaterial({ color: 0x48cae4, transparent: true, opacity: 0.7 });
    const circuitLines: THREE.Line[] = [];
    const addCircuit = (from: THREE.Vector3, to: THREE.Vector3) => {
      const geometry = new THREE.BufferGeometry().setFromPoints([from, to]);
      const line = new THREE.Line(geometry, circuitMaterial);
      hardwareGroup.add(line);
      circuitLines.push(line);
    };
    addCircuit(new THREE.Vector3(-0.72, 0.2, 0.2), new THREE.Vector3(-1.45, 0.2, 0.2));
    addCircuit(new THREE.Vector3(0.72, 0.2, 0.2), new THREE.Vector3(1.45, 0.2, 0.2));
    addCircuit(new THREE.Vector3(0, 0.2, -0.64), new THREE.Vector3(0, 0.2, -1.0));
    addCircuit(new THREE.Vector3(-1.25, 0.2, -0.8), new THREE.Vector3(-1.8, 0.2, -1.05));

    const statusRing = new THREE.Mesh(
      new THREE.TorusGeometry(1.15, 0.018, 12, 64),
      new THREE.MeshBasicMaterial({ color: 0x90e0ef, transparent: true, opacity: 0.6 })
    );
    statusRing.rotation.x = Math.PI / 2;
    statusRing.position.y = 0.05;
    hardwareGroup.add(statusRing);

    hardwarePartsRef.current = { coreTiles, ramSticks, driveModules, cpuPlate };
    updateHardwareParts(hardwarePartsRef.current, hardwareConfigRef.current);

    let frameId = 0;
    let lastFrameTime = 0;
    let isVisible = true;
    const timer = new THREE.Timer();
    timer.connect(document);

    const animate = (timestamp?: DOMHighResTimeStamp) => {
      frameId = requestAnimationFrame(animate);
      if (!isVisible || document.hidden || (timestamp && timestamp - lastFrameTime < 33)) {
        return;
      }
      lastFrameTime = timestamp ?? 0;
      timer.update(timestamp);
      const t = timer.getElapsed();
      hardwareGroup.rotation.y = -0.18 + Math.sin(t * 0.35) * 0.12;
      hardwareGroup.rotation.x = 0.14 + Math.sin(t * 0.7) * 0.035;
      statusRing.rotation.z = t * 0.6;
      coreTiles.forEach((core, index) => {
        const material = core.material as THREE.MeshStandardMaterial;
        if (core.userData.active) {
          material.emissiveIntensity = 0.42 + (Math.sin(t * 3.2 - index * 0.28) + 1) * 0.2;
        }
      });
      ramSticks.forEach((ram, index) => {
        ram.position.y = ram.userData.active ? 0.28 + Math.sin(t * 1.2 + index * 0.3) * 0.025 : 0.28;
      });
      driveModules.forEach((drive, index) => {
        if (drive.userData.active) {
          (drive.material as THREE.MeshStandardMaterial).emissiveIntensity =
            0.3 + (Math.sin(t * 2 + index) + 1) * 0.14;
        }
      });
      circuitLines.forEach((line, index) => {
        (line.material as THREE.LineBasicMaterial).opacity = 0.42 + (Math.sin(t * 2.2 + index) + 1) * 0.16;
      });
      renderer.render(scene, camera);
    };

    animate();

    const resizeObserver = new ResizeObserver(() => {
      const nw = Math.max(container.clientWidth, 1);
      const nh = Math.max(container.clientHeight, 1);
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
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
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      cancelAnimationFrame(frameId);
      timer.dispose();
      hardwarePartsRef.current = null;
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
  }, []);

  const quoteMessage = encodeURIComponent(
    `Xin chào STACloud! Tôi cần nhận báo giá cấu hình Cloud theo yêu cầu:\n- Gói/Nhu cầu: ${preset.name}\n- CPU: ${currentVCore} vCore (${preset.cpuFamily})\n- RAM: ${currentRamGB} GB DDR4\n- Lưu trữ: ${currentDiskGB} GB SSD NVMe\n- Vị trí: ${preset.location}\nNhờ Admin tư vấn và báo giá chi tiết giúp tôi nhé!`
  );

  return (
    <div className="overflow-hidden rounded-3xl border border-cyan-300/30 bg-gradient-to-b from-[#063866]/95 via-[#04284d]/95 to-[#021a36]/95 p-5 shadow-[0_24px_70px_rgba(0,119,182,0.35)] backdrop-blur-2xl sm:p-8">
      {/* Header */}
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-400/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-200">
            <span className="h-2 w-2 rounded-full bg-cyan-300 animate-pulse" />
            3D Cloud Hardware Configurator
          </div>
          <h3 className="mt-2 text-2xl font-black text-white sm:text-3xl text-gradient-cyan">
            Tùy Biến Cấu Hình Cloud Theo Nhu Cầu
          </h3>
          <p className="mt-1 text-xs text-sky-100/90 sm:text-sm">
            Hỗ trợ tùy chọn cấu hình cực khủng lên tới <strong className="text-cyan-200 font-bold">64 vCore CPU</strong> và <strong className="text-cyan-200 font-bold">128 GB RAM</strong>.
          </p>
        </div>

        {/* Preset Switcher */}
        <div className="flex flex-wrap gap-2">
          {CLOUD_PRESETS.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelectedPresetId(p.id)}
              className={`rounded-xl px-3.5 py-2 text-xs font-bold transition-all ${
                selectedPresetId === p.id
                  ? 'bg-gradient-to-r from-sky-400 to-cyan-300 text-slate-950 shadow-[0_0_20px_rgba(0,240,255,0.5)]'
                  : 'border border-cyan-400/25 bg-[#073866]/60 text-slate-200 hover:border-cyan-300/50 hover:bg-[#0a4880]'
              }`}
            >
              {p.name.split(' (')[0]}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_1fr_1fr] lg:items-center">
        {/* Sliders Area */}
        <div className="space-y-5">
          {/* CPU Slider (Max 64 vCore) */}
          <div className="rounded-2xl border border-cyan-300/20 bg-[#073660]/85 p-4 shadow-inner">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-200">
                CPU vCore (Max 64 Core)
              </span>
              <span className="rounded-lg bg-cyan-400/20 px-3 py-1 font-mono text-sm font-extrabold text-cyan-200 border border-cyan-300/30">
                {currentVCore} vCore
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={VCORE_STEPS.length - 1}
              step={1}
              value={vCoreIndex}
              onChange={(e) => setVCoreIndex(Number(e.target.value))}
              className="mt-4 h-2.5 w-full cursor-pointer appearance-none rounded-lg bg-slate-900 accent-cyan-300"
            />
            <div className="mt-2 flex justify-between text-[11px] font-semibold text-sky-200/70">
              <span>1 Core</span>
              <span>16 Core</span>
              <span>32 Core</span>
              <span className="text-cyan-300 font-bold">64 Core</span>
            </div>
          </div>

          {/* RAM Slider (Max 128 GB RAM) */}
          <div className="rounded-2xl border border-cyan-300/20 bg-[#073660]/85 p-4 shadow-inner">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-200">
                RAM DDR4/DDR5 (Max 128 GB)
              </span>
              <span className="rounded-lg bg-sky-400/20 px-3 py-1 font-mono text-sm font-extrabold text-sky-100 border border-sky-300/30">
                {currentRamGB} GB RAM
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={RAM_STEPS.length - 1}
              step={1}
              value={ramIndex}
              onChange={(e) => setRamIndex(Number(e.target.value))}
              className="mt-4 h-2.5 w-full cursor-pointer appearance-none rounded-lg bg-slate-900 accent-sky-300"
            />
            <div className="mt-2 flex justify-between text-[11px] font-semibold text-sky-200/70">
              <span>1 GB</span>
              <span>32 GB</span>
              <span>64 GB</span>
              <span className="text-sky-200 font-bold">128 GB</span>
            </div>
          </div>

          {/* Disk Slider (Max 2000 GB NVMe) */}
          <div className="rounded-2xl border border-cyan-300/20 bg-[#073660]/85 p-4 shadow-inner">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-200">
                Ổ Cứng NVMe SSD Tốc Độ Cao
              </span>
              <span className="rounded-lg bg-cyan-400/20 px-3 py-1 font-mono text-sm font-extrabold text-cyan-200 border border-cyan-300/30">
                {currentDiskGB >= 1000 ? `${currentDiskGB / 1000} TB NVMe` : `${currentDiskGB} GB NVMe`}
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={DISK_STEPS.length - 1}
              step={1}
              value={diskIndex}
              onChange={(e) => setDiskIndex(Number(e.target.value))}
              className="mt-4 h-2.5 w-full cursor-pointer appearance-none rounded-lg bg-slate-900 accent-cyan-300"
            />
            <div className="mt-2 flex justify-between text-[11px] font-semibold text-sky-200/70">
              <span>10 GB</span>
              <span>250 GB</span>
              <span>500 GB</span>
              <span className="text-cyan-300 font-bold">2 TB NVMe</span>
            </div>
          </div>

          {/* Quick Specs Metadata */}
          <div className="rounded-2xl border border-cyan-300/15 bg-[#05294a]/80 p-3.5 text-xs text-sky-100 space-y-1.5">
            <div className="flex justify-between">
              <span className="text-sky-300">Vi xử lý:</span>
              <span className="font-bold text-white">{preset.cpuFamily}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sky-300">Cụm máy chủ:</span>
              <span className="font-bold text-white">{preset.location}</span>
            </div>
          </div>
        </div>

        {/* 3D Visual Centerpiece */}
        <div className="relative flex min-w-0 flex-col items-center justify-center">
          <div className="w-full rounded-2xl border border-cyan-300/20 bg-[#021a30]/75 p-3">
            {hardwareMode === 'lite' ? (
              <LiteHardwareVisual vCore={currentVCore} ramGB={currentRamGB} diskGB={currentDiskGB} />
            ) : (
              <div ref={canvasRef} className="h-64 w-full sm:h-72" aria-label="Mô hình bo mạch CPU, RAM và NVMe theo cấu hình đang chọn" />
            )}
            <div className="mt-3 grid grid-cols-3 gap-2 text-center text-[10px] font-bold uppercase tracking-wider">
              <span className="rounded-lg border border-cyan-300/15 bg-cyan-400/10 px-2 py-2 text-cyan-100">CPU {currentVCore}/64 Core</span>
              <span className="rounded-lg border border-sky-300/15 bg-sky-400/10 px-2 py-2 text-sky-100">RAM {currentRamGB} GB</span>
              <span className="rounded-lg border border-cyan-300/15 bg-cyan-400/10 px-2 py-2 text-cyan-100">NVMe {currentDiskGB >= 1000 ? `${currentDiskGB / 1000} TB` : `${currentDiskGB} GB`}</span>
            </div>
          </div>
          <p className="mt-3 text-center text-[11px] font-mono uppercase tracking-widest text-cyan-300">
            Ocean Hardware Engine • Core / DIMM / NVMe Live Preview
          </p>
        </div>

        {/* Quote Request Card (Giá LIÊN HỆ) */}
        <div className="flex flex-col justify-center rounded-2xl border border-cyan-300/35 bg-gradient-to-b from-[#09487c] to-[#042646] p-6 shadow-2xl">
          <p className="text-xs font-bold uppercase tracking-wider text-cyan-200">
            Báo Giá & Ưu Đãi Cấu Hình Này
          </p>

          <div className="mt-3">
            <span className="block text-3xl font-black tracking-wide text-white sm:text-4xl text-gradient-cyan">
              GIÁ: LIÊN HỆ
            </span>
            <span className="mt-1 block text-xs font-medium text-sky-200">
              Báo giá trực tiếp & ưu đãi tốt nhất theo chu kỳ
            </span>
          </div>

          {/* Summary Box */}
          <div className="mt-4 rounded-xl border border-cyan-300/20 bg-black/30 p-3 text-xs leading-relaxed text-sky-100">
            <p className="font-bold text-cyan-200 mb-1">Cấu hình đang chọn:</p>
            <p>• {currentVCore} vCore CPU ({preset.cpuFamily})</p>
            <p>• {currentRamGB} GB RAM DDR4/DDR5</p>
            <p>• {currentDiskGB >= 1000 ? `${currentDiskGB / 1000} TB` : `${currentDiskGB} GB`} SSD NVMe</p>
          </div>

          <div className="mt-6 space-y-2.5">
            <a
              href={`${discordUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyber-primary w-full rounded-xl py-3 text-sm"
            >
              <span>🎫 Nhận Báo Giá Qua Discord</span>
            </a>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={`${zaloUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-xl border border-cyan-300/40 bg-cyan-400/15 py-2.5 text-xs font-bold text-cyan-100 transition hover:bg-cyan-400/25"
              >
                Nhắn Zalo Báo Giá
              </a>
              <a
                href={`${messengerUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-xl border border-sky-300/40 bg-sky-400/15 py-2.5 text-xs font-bold text-sky-100 transition hover:bg-sky-400/25"
              >
                Nhắn Messenger
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
