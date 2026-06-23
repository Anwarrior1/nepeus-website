"use client";

import { type CSSProperties, useEffect, useRef } from "react";
import * as THREE from "three";

type NodeConfig = {
  label: string;
  orbitRadius: number;
  phase: number;
  y: number;
  zScale: number;
  scale: number;
};

const nodeConfigs: NodeConfig[] = [
  {
    label: "Manual Task",
    orbitRadius: 3.45,
    phase: 0.02,
    y: 0.08,
    zScale: 1.0,
    scale: 0.62
  },
  {
    label: "System Update",
    orbitRadius: 3.35,
    phase: 1.08,
    y: -0.02,
    zScale: 0.95,
    scale: 0.58
  },
  {
    label: "Report",
    orbitRadius: 2.75,
    phase: 2.38,
    y: 0.64,
    zScale: 0.82,
    scale: 0.52
  },
  {
    label: "Alert",
    orbitRadius: 2.82,
    phase: 3.62,
    y: -0.58,
    zScale: 0.84,
    scale: 0.5
  },
  {
    label: "Action",
    orbitRadius: 3.12,
    phase: 4.76,
    y: -0.34,
    zScale: 0.9,
    scale: 0.62
  }
];

function createNodeLabelSprite(title: string) {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const context = canvas.getContext("2d");

  if (!context) {
    return new THREE.Sprite(new THREE.SpriteMaterial());
  }

  const words = title.split(" ");
  const lines = words.length > 1 ? words : [title];
  const lineHeight = 58;
  const firstLineY = 256 - ((lines.length - 1) * lineHeight) / 2;

  context.textAlign = "center";
  context.textBaseline = "middle";
  context.shadowColor = "rgba(255,255,255,0.95)";
  context.shadowBlur = 18;
  context.fillStyle = "rgba(8, 9, 11, 0.9)";
  context.font = "800 48px Inter, system-ui, sans-serif";

  lines.forEach((line, index) => {
    context.fillText(line, 256, firstLineY + index * lineHeight);
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;

  const material = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    opacity: 0.92,
    depthTest: false,
    depthWrite: false
  });

  const sprite = new THREE.Sprite(material);
  sprite.scale.set(1.18, 1.18, 1);
  sprite.renderOrder = 4;
  return sprite;
}

function createCoreLabelSprite() {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const context = canvas.getContext("2d");

  if (!context) {
    return new THREE.Sprite(new THREE.SpriteMaterial());
  }

  context.textAlign = "center";
  context.textBaseline = "middle";
  context.shadowColor = "rgba(255,255,255,0.42)";
  context.shadowBlur = 12;
  context.fillStyle = "rgba(255,255,255,0.92)";
  context.font = "800 48px Inter, system-ui, sans-serif";
  context.fillText("AI", 256, 230);
  context.font = "700 34px Inter, system-ui, sans-serif";
  context.fillText("Agent", 256, 286);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;

  const material = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    opacity: 0.88,
    depthWrite: false
  });

  const sprite = new THREE.Sprite(material);
  sprite.scale.set(1.2, 1.2, 1);
  sprite.renderOrder = 5;
  return sprite;
}

export function Automation3DScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const compactRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
    camera.position.set(0, 0.3, 8.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: window.devicePixelRatio < 2,
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    const root = new THREE.Group();
    scene.add(root);

    const ambient = new THREE.AmbientLight(0xffffff, 2.4);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xffffff, 3);
    keyLight.position.set(-2.8, 4.5, 6);
    scene.add(keyLight);

    const rimLight = new THREE.PointLight(0xffffff, 18, 18);
    rimLight.position.set(3.5, -2.8, 3.8);
    scene.add(rimLight);

    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x070708,
      metalness: 0.82,
      roughness: 0.18,
      clearcoat: 1,
      clearcoatRoughness: 0.06,
      transmission: 0.08,
      thickness: 0.8
    });

    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xf7f9fb,
      metalness: 0.08,
      roughness: 0.05,
      transparent: true,
      opacity: 0.58,
      transmission: 0.52,
      thickness: 1.6,
      clearcoat: 1,
      clearcoatRoughness: 0.02,
      ior: 1.24
    });

    const nodeMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xe8edf3,
      metalness: 0.24,
      roughness: 0.13,
      clearcoat: 1,
      clearcoatRoughness: 0.04
    });

    const core = new THREE.Mesh(new THREE.SphereGeometry(0.72, 64, 64), coreMaterial);
    core.name = "AI Agent Core";
    root.add(core);

    const coreLabel = createCoreLabelSprite();
    coreLabel.position.set(0, 0, 0.76);
    root.add(coreLabel);

    const coreHalo = new THREE.Mesh(new THREE.TorusGeometry(1.02, 0.018, 16, 160), glassMaterial);
    coreHalo.rotation.x = Math.PI / 2.6;
    root.add(coreHalo);

    const orbitHalo = new THREE.Mesh(new THREE.TorusGeometry(2.8, 0.01, 12, 220), glassMaterial);
    orbitHalo.rotation.x = Math.PI / 2.1;
    orbitHalo.rotation.z = -0.22;
    root.add(orbitHalo);

    const nodeGroup = new THREE.Group();
    root.add(nodeGroup);

    const nodes = nodeConfigs.map((config) => {
      const group = new THREE.Group();

      const sphere = new THREE.Mesh(
        new THREE.SphereGeometry(config.scale, 42, 42),
        nodeMaterial
      );
      group.add(sphere);

      const shell = new THREE.Mesh(
        new THREE.SphereGeometry(config.scale * 1.22, 42, 42),
        glassMaterial
      );
      group.add(shell);

      const label = createNodeLabelSprite(config.label);
      label.position.set(0, 0, config.scale * 0.94);
      label.scale.setScalar(config.scale * 1.55);
      group.add(label);

      nodeGroup.add(group);
      return { group, sphere, shell, label };
    });

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x111113,
      transparent: true,
      opacity: 0.18
    });

    const pulseMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.9
    });

    const lineSegments: {
      line: THREE.Line<THREE.BufferGeometry, THREE.LineBasicMaterial>;
      nodeIndex: number;
    }[] = [];
    const pulses: {
      mesh: THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial>;
      start: THREE.Vector3;
      nodeIndex: number;
      offset: number;
    }[] = [];

    nodeConfigs.forEach((_, index) => {
      const start = new THREE.Vector3(0, 0, 0);
      const geometry = new THREE.BufferGeometry().setFromPoints([start, start]);
      const line = new THREE.Line(geometry, lineMaterial);
      root.add(line);
      lineSegments.push({ line, nodeIndex: index });

      const pulse = new THREE.Mesh(new THREE.SphereGeometry(0.055, 18, 18), pulseMaterial.clone());
      root.add(pulse);
      pulses.push({ mesh: pulse, start, nodeIndex: index, offset: index / nodeConfigs.length });
    });

    const tinyMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xf5f7fa,
      metalness: 0.18,
      roughness: 0.18,
      clearcoat: 1,
      clearcoatRoughness: 0.08
    });

    const smallParticles = Array.from({ length: window.innerWidth < 700 ? 24 : 48 }, (_, index) => {
      const angle = (index / 48) * Math.PI * 2;
      const radius = 3.2 + Math.sin(index * 1.9) * 0.65;
      const mesh = new THREE.Mesh(new THREE.SphereGeometry(0.025 + (index % 4) * 0.008, 12, 12), tinyMaterial);
      mesh.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle * 1.2) * 1.8,
        Math.sin(angle) * 0.95
      );
      root.add(mesh);
      return { mesh, angle, radius };
    });

    const pointer = { x: 0, y: 0 };
    const drag = { active: false, lastX: 0 };
    const orbit = { angle: 0, velocity: 0 };
    const origin = new THREE.Vector3(0, 0, 0);
    let width = 0;
    let height = 0;
    let animationFrame = 0;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      width = Math.max(rect.width, 1);
      height = Math.max(rect.height, 1);
      const isCompact = width < 700;
      compactRef.current = isCompact;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isCompact ? 2 : 1.8));
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.position.set(0, isCompact ? 0.25 : 0.25, isCompact ? 11.8 : 9.8);
      root.position.y = isCompact ? 1.05 : 1.05;
      root.scale.setScalar(isCompact ? 0.58 : 0.82);
      camera.updateProjectionMatrix();

      const labelScale = isCompact ? 1.9 : 1.55;
      nodes.forEach((node) => {
        node.label.scale.setScalar(nodeConfigs[nodes.indexOf(node)].scale * labelScale);
      });
      coreLabel.scale.setScalar(isCompact ? 1.5 : 1.2);
      coreLabel.material.opacity = isCompact ? 0.96 : 0.88;
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      pointer.y = -((event.clientY - rect.top) / rect.height - 0.5) * 2;

      if (drag.active) {
        const deltaX = event.clientX - drag.lastX;
        drag.lastX = event.clientX;
        orbit.angle += deltaX * 0.006;
        orbit.velocity = THREE.MathUtils.clamp(deltaX * 0.0035, -0.08, 0.08);
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      drag.active = true;
      drag.lastX = event.clientX;
      container.classList.add("is-grabbing");
      if (container.setPointerCapture) {
        container.setPointerCapture(event.pointerId);
      }
    };

    const handlePointerUp = (event: PointerEvent) => {
      drag.active = false;
      container.classList.remove("is-grabbing");
      if (container.releasePointerCapture && container.hasPointerCapture?.(event.pointerId)) {
        container.releasePointerCapture(event.pointerId);
      }
    };

    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      root.rotation.y += ((pointer.x * 0.16) - root.rotation.y) * 0.035;
      root.rotation.x += ((pointer.y * 0.08) - root.rotation.x) * 0.035;

      core.rotation.y = elapsed * 0.38;
      core.rotation.x = Math.sin(elapsed * 0.42) * 0.08;
      coreLabel.position.z = 0.77 + Math.sin(elapsed * 0.8) * 0.015;
      coreHalo.rotation.z = elapsed * 0.18;
      orbitHalo.rotation.z = -0.22 + elapsed * 0.07;

      orbit.angle += orbit.velocity;
      orbit.velocity *= drag.active ? 0.86 : 0.94;

      nodes.forEach((node, index) => {
        const config = nodeConfigs[index];
        const orbitAngle = elapsed * 0.16 + orbit.angle + config.phase;
        const depth = (Math.sin(orbitAngle) + 1) / 2;
        const orbitScale = 0.84 + depth * 0.24;

        node.group.position.set(
          Math.cos(orbitAngle) * config.orbitRadius,
          config.y + Math.sin(elapsed * 0.9 + index * 1.4) * 0.08,
          Math.sin(orbitAngle) * config.zScale
        );
        node.group.scale.setScalar(orbitScale);
        node.sphere.rotation.y = elapsed * (0.22 + index * 0.02);
        node.shell.rotation.y = -elapsed * 0.12;
        node.label.material.opacity = compactRef.current ? 0.92 : 0.88 + depth * 0.1;
      });

      pulses.forEach((pulse) => {
        const progress = (elapsed * 0.18 + pulse.offset) % 1;
        const end = nodes[pulse.nodeIndex].group.position;
        pulse.mesh.position.lerpVectors(pulse.start, end, progress);
        pulse.mesh.scale.setScalar(0.8 + Math.sin(progress * Math.PI) * 0.65);
        pulse.mesh.material.opacity = 0.18 + Math.sin(progress * Math.PI) * 0.62;
      });

      smallParticles.forEach((particle, index) => {
        const angle = particle.angle + elapsed * (0.035 + (index % 5) * 0.002);
        particle.mesh.position.x = Math.cos(angle) * particle.radius;
        particle.mesh.position.z = Math.sin(angle) * 0.95;
      });

      lineSegments.forEach(({ line, nodeIndex }, index) => {
        line.geometry.setFromPoints([origin, nodes[nodeIndex].group.position]);
        line.material.opacity = 0.12 + Math.sin(elapsed * 1.2 + index) * 0.035;
      });

      renderer.render(scene, camera);
      animationFrame = window.requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener("resize", resize);
    container.addEventListener("pointermove", handlePointerMove);
    container.addEventListener("pointerdown", handlePointerDown);
    container.addEventListener("pointerup", handlePointerUp);
    container.addEventListener("pointercancel", handlePointerUp);
    container.addEventListener("lostpointercapture", handlePointerUp);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      container.removeEventListener("pointermove", handlePointerMove);
      container.removeEventListener("pointerdown", handlePointerDown);
      container.removeEventListener("pointerup", handlePointerUp);
      container.removeEventListener("pointercancel", handlePointerUp);
      container.removeEventListener("lostpointercapture", handlePointerUp);

      root.traverse((child) => {
        if (child instanceof THREE.Mesh || child instanceof THREE.Line || child instanceof THREE.Sprite) {
          child.geometry?.dispose();
          if (Array.isArray(child.material)) {
            child.material.forEach((material) => material.dispose());
          } else {
            child.material?.dispose();
          }
        }
      });
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <section className="automation-3d-section scroll-reveal-section" aria-labelledby="automation-3d-title">
      <div ref={containerRef} className="automation-3d-canvas" aria-hidden="true" />
      <div className="automation-3d-copy section-reveal-content">
        <h2 id="automation-3d-title" className="reveal-item" style={{ "--reveal-delay": "80ms" } as CSSProperties}>
          One AI core connecting the work your team repeats.
        </h2>
        <p className="reveal-item" style={{ "--reveal-delay": "152ms" } as CSSProperties}>
          Manual tasks flow into an intelligent agent, then move outward as system updates, reports, alerts, and completed actions.
        </p>
      </div>
    </section>
  );
}
