"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  phase: number;
  isRobot: boolean;
};

export default function DissolveCanvas({
  onReady,
}: {
  onReady?: () => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = 280;
    const height = 280;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.scale(dpr, dpr);

    const image = new Image();
    image.src = "/robot.jpeg";

    let frame = 0;
    let time = 0;
    let cancelled = false;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    image.onload = () => {
      if (cancelled) return;

      const sourceSize = 220;

      const sourceCanvas = document.createElement("canvas");
      sourceCanvas.width = sourceSize;
      sourceCanvas.height = sourceSize;

      const sourceCtx = sourceCanvas.getContext("2d");

      if (!sourceCtx) return;

      sourceCtx.clearRect(0, 0, sourceSize, sourceSize);

      const scale = Math.min(
        sourceSize / image.width,
        sourceSize / image.height
      );

      const drawWidth = image.width * scale;
      const drawHeight = image.height * scale;

      const drawX = (sourceSize - drawWidth) / 2;
      const drawY = (sourceSize - drawHeight) / 2;

      sourceCtx.drawImage(image, drawX, drawY, drawWidth, drawHeight);

      const imageData = sourceCtx.getImageData(0, 0, sourceSize, sourceSize);
      const pixels = imageData.data;

      const sampleCorner = (cx: number, cy: number) => {
        const i = (cy * sourceSize + cx) * 4;
        return { r: pixels[i], g: pixels[i + 1], b: pixels[i + 2] };
      };

      const corners = [
        sampleCorner(4, 4),
        sampleCorner(sourceSize - 5, 4),
        sampleCorner(4, sourceSize - 5),
        sampleCorner(sourceSize - 5, sourceSize - 5),
      ];

      const bg = {
        r: corners.reduce((s, c) => s + c.r, 0) / corners.length,
        g: corners.reduce((s, c) => s + c.g, 0) / corners.length,
        b: corners.reduce((s, c) => s + c.b, 0) / corners.length,
      };

      const COLOR_DISTANCE_THRESHOLD = 42;

      const particles: Particle[] = [];

      const sampleStep = 3;

      for (let y = 0; y < sourceSize; y += sampleStep) {
        for (let x = 0; x < sourceSize; x += sampleStep) {
          const index = (y * sourceSize + x) * 4;

          const r = pixels[index];
          const g = pixels[index + 1];
          const b = pixels[index + 2];

          const colorDistance = Math.sqrt(
            (r - bg.r) ** 2 + (g - bg.g) ** 2 + (b - bg.b) ** 2
          );

          const visible = colorDistance > COLOR_DISTANCE_THRESHOLD;

          if (!visible) continue;

          const targetX = (x / sourceSize) * width;
          const targetY = (y / sourceSize) * height;

          particles.push({
            x: Math.random() * width,
            y: Math.random() * height,

            targetX,
            targetY,

            vx: 0,
            vy: 0,

            radius: Math.random() * 0.8 + 0.65,
            alpha: Math.random() * 0.3 + 0.55,
            phase: Math.random() * Math.PI * 2,

            isRobot: true,
          });
        }
      }

      for (let i = 0; i < 55; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,

          targetX: 0,
          targetY: 0,

          vx: (Math.random() - 0.5) * 0.12,
          vy: (Math.random() - 0.5) * 0.12,

          radius: Math.random() * 0.65 + 0.35,
          alpha: Math.random() * 0.18 + 0.06,
          phase: Math.random() * Math.PI * 2,

          isRobot: false,
        });
      }

      onReady?.();

      const draw = () => {
        if (cancelled) return;

        time += reducedMotion ? 0 : 0.012;

        ctx.clearRect(0, 0, width, height);

        particles.forEach((particle) => {
          if (particle.isRobot) {
            const dx = particle.targetX - particle.x;
            const dy = particle.targetY - particle.y;

            particle.vx += dx * 0.0018;
            particle.vy += dy * 0.0018;

            particle.vx *= 0.92;
            particle.vy *= 0.92;

            if (!reducedMotion) {
              particle.x += particle.vx + Math.sin(time + particle.phase) * 0.025;
              particle.y += particle.vy + Math.cos(time * 0.8 + particle.phase) * 0.025;
            } else {
              particle.x += particle.vx;
              particle.y += particle.vy;
            }
          } else {
            if (!reducedMotion) {
              particle.x += particle.vx + Math.sin(time + particle.phase) * 0.02;
              particle.y += particle.vy + Math.cos(time * 0.7 + particle.phase) * 0.02;
            } else {
              particle.x += particle.vx;
              particle.y += particle.vy;
            }

            if (particle.x < -5) particle.x = width + 5;
            if (particle.x > width + 5) particle.x = -5;

            if (particle.y < -5) particle.y = height + 5;
            if (particle.y > height + 5) particle.y = -5;
          }

          let alpha = particle.alpha;

          if (particle.isRobot && !reducedMotion) {
            const distance = Math.sqrt(
              Math.pow(particle.targetX - particle.x, 2) +
                Math.pow(particle.targetY - particle.y, 2)
            );

            if (distance < 8) {
              alpha += Math.sin(time * 1.2 + particle.phase) * 0.06;
            }
          }

          const rust = Math.sin(time * 0.6 + particle.phase) > 0.96;

          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);

          ctx.fillStyle = rust
            ? `rgba(124,74,45,${Math.max(0.1, alpha)})`
            : `rgba(22,19,15,${Math.max(0.08, alpha)})`;

          ctx.fill();
        });

        frame = requestAnimationFrame(draw);
      };

      draw();
    };

    image.onerror = () => {
      console.warn("DissolveCanvas: Could not load /robot.jpeg");
      onReady?.();
    };

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
    };
  }, [onReady]);

  return (
    <canvas
      ref={canvasRef}
      className="block w-[280px] h-[280px]"
      aria-hidden="true"
    />
  );
}