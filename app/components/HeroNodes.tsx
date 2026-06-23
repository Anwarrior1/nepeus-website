"use client";

import { useEffect, useRef } from "react";

type NodePoint = {
  x: number;
  y: number;
  homeX: number;
  homeY: number;
  vx: number;
  vy: number;
  radius: number;
  depth: number;
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export function HeroNodes() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let pixelRatio = 1;
    let isCompact = false;
    let points: NodePoint[] = [];
    const pointer = { x: 0, y: 0, active: false };
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const createPoints = () => {
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      const area = width * height;
      isCompact = area < 250000;
      pixelRatio = Math.min(window.devicePixelRatio || 1, isCompact ? 1.5 : 2);

      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      // Fewer points on small screens for smoother mobile performance.
      const density = isCompact ? 18000 : 13000;
      const minCount = isCompact ? 26 : 42;
      const maxCount = isCompact ? 60 : 96;
      const count = clamp(Math.floor(area / density), minCount, maxCount);
      points = Array.from({ length: count }, () => {
        const x = Math.random() * width;
        const y = Math.random() * height;

        return {
          x,
          y,
          homeX: x,
          homeY: y,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          radius: isCompact ? 1.8 + Math.random() * 3 : 1.3 + Math.random() * 2.8,
          depth: 0.45 + Math.random() * 0.75
        };
      });
    };

    const movePointer = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();
      pointer.x = event.clientX - bounds.left;
      pointer.y = event.clientY - bounds.top;
      pointer.active =
        pointer.x >= 0 &&
        pointer.x <= bounds.width &&
        pointer.y >= 0 &&
        pointer.y <= bounds.height;
    };

    const hidePointer = () => {
      pointer.active = false;
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      const glow = context.createRadialGradient(
        pointer.active ? pointer.x : width * 0.5,
        pointer.active ? pointer.y : height * 0.46,
        0,
        pointer.active ? pointer.x : width * 0.5,
        pointer.active ? pointer.y : height * 0.46,
        pointer.active ? 330 : 520
      );
      glow.addColorStop(0, pointer.active ? "rgba(0,0,0,0.09)" : "rgba(0,0,0,0.045)");
      glow.addColorStop(0.42, "rgba(255,255,255,0.38)");
      glow.addColorStop(1, "rgba(255,255,255,0)");
      context.fillStyle = glow;
      context.fillRect(0, 0, width, height);

      for (const point of points) {
        const homeDx = point.homeX - point.x;
        const homeDy = point.homeY - point.y;
        point.vx += homeDx * 0.0009;
        point.vy += homeDy * 0.0009;

        if (pointer.active) {
          const dx = pointer.x - point.x;
          const dy = pointer.y - point.y;
          const distance = Math.hypot(dx, dy) || 1;
          const reach = 230;

          if (distance < reach) {
            const force = (1 - distance / reach) * 0.055 * point.depth;
            point.vx += (dx / distance) * force;
            point.vy += (dy / distance) * force;
          }
        }

        point.vx *= 0.93;
        point.vy *= 0.93;
        point.x += point.vx;
        point.y += point.vy;

        if (point.x < -40 || point.x > width + 40) point.vx *= -1;
        if (point.y < -40 || point.y > height + 40) point.vy *= -1;
      }

      for (let i = 0; i < points.length; i += 1) {
        for (let j = i + 1; j < points.length; j += 1) {
          const a = points[i];
          const b = points[j];
          const distance = Math.hypot(a.x - b.x, a.y - b.y);
          const maxDistance = 154;

          if (distance < maxDistance) {
            const pointerBoost =
              pointer.active &&
              Math.hypot((a.x + b.x) / 2 - pointer.x, (a.y + b.y) / 2 - pointer.y) < 230
                ? 0.12
                : 0;
            const alpha = (1 - distance / maxDistance) * (isCompact ? 0.26 : 0.17) + pointerBoost;
            context.strokeStyle = `rgba(8,8,10,${alpha})`;
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.stroke();
          }
        }
      }

      for (const point of points) {
        const pointerDistance = pointer.active
          ? Math.hypot(point.x - pointer.x, point.y - pointer.y)
          : 9999;
        const active = pointerDistance < 190;

        context.beginPath();
        context.fillStyle = active ? "rgba(0,0,0,0.94)" : (isCompact ? "rgba(0,0,0,0.58)" : "rgba(0,0,0,0.44)");
        context.arc(point.x, point.y, active ? point.radius + 1.4 : point.radius, 0, Math.PI * 2);
        context.fill();

        if (active) {
          context.beginPath();
          context.strokeStyle = "rgba(0,0,0,0.12)";
          context.arc(point.x, point.y, point.radius + 7, 0, Math.PI * 2);
          context.stroke();
        }
      }

      if (pointer.active) {
        context.beginPath();
        context.strokeStyle = "rgba(0,0,0,0.16)";
        context.arc(pointer.x, pointer.y, 58, 0, Math.PI * 2);
        context.stroke();
      }

      if (!reducedMotion) {
        animationFrame = window.requestAnimationFrame(draw);
      }
    };

    createPoints();
    draw();

    window.addEventListener("resize", createPoints);
    if (!reducedMotion) {
      window.addEventListener("pointermove", movePointer);
      window.addEventListener("pointerleave", hidePointer);
    }

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", createPoints);
      if (!reducedMotion) {
        window.removeEventListener("pointermove", movePointer);
        window.removeEventListener("pointerleave", hidePointer);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="hero-nodes-canvas absolute inset-0 h-full w-full"
    />
  );
}
