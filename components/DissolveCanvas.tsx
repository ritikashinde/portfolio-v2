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

      sourceCtx.drawImage(
        image,
        drawX,
        drawY,
        drawWidth,
        drawHeight
      );

      const imageData = sourceCtx.getImageData(
        0,
        0,
        sourceSize,
        sourceSize
      );

      const pixels = imageData.data;

      const particles: Particle[] = [];

      /*
       * PARTICLE EXTRACTION
       *
       * We intentionally ignore the outer edges of the image.
       * This prevents background structures / borders from
       * becoming part of the robot.
       */

      const sampleStep = 2;

      const EDGE_MARGIN = 28;

      const COLOR_DISTANCE_THRESHOLD = 48;

      for (
        let y = EDGE_MARGIN;
        y < sourceSize - EDGE_MARGIN;
        y += sampleStep
      ) {
        for (
          let x = EDGE_MARGIN;
          x < sourceSize - EDGE_MARGIN;
          x += sampleStep
        ) {
          const index = (y * sourceSize + x) * 4;

          const r = pixels[index];
          const g = pixels[index + 1];
          const b = pixels[index + 2];

          /*
           * Estimate brightness.
           * The robot is darker than most of the background.
           */
          const brightness = (r + g + b) / 3;

          /*
           * Ignore very bright background pixels.
           */
          if (brightness > 205) continue;

          /*
           * Compare the pixel with a warm/light background.
           * This keeps the robot while rejecting subtle
           * background texture.
           */
          const bgR = 225;
          const bgG = 222;
          const bgB = 212;

          const colorDistance = Math.sqrt(
            (r - bgR) ** 2 +
              (g - bgG) ** 2 +
              (b - bgB) ** 2
          );

          if (colorDistance < COLOR_DISTANCE_THRESHOLD) {
            continue;
          }

          /*
           * Convert source coordinates into canvas coordinates.
           */
          const targetX =
            (x / sourceSize) * width;

          const targetY =
            (y / sourceSize) * height;

          particles.push({
            x: Math.random() * width,
            y: Math.random() * height,

            targetX,
            targetY,

            vx: 0,
            vy: 0,

            radius: Math.random() * 0.65 + 0.55,

            alpha: Math.random() * 0.22 + 0.62,

            phase: Math.random() * Math.PI * 2,

            isRobot: true,
          });
        }
      }

      /*
       * Ambient particles.
       * These stay separate from the robot silhouette.
       */
      for (let i = 0; i < 45; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,

          targetX: 0,
          targetY: 0,

          vx: (Math.random() - 0.5) * 0.08,
          vy: (Math.random() - 0.5) * 0.08,

          radius: Math.random() * 0.55 + 0.3,

          alpha: Math.random() * 0.15 + 0.04,

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

            /*
             * Soft spring attraction.
             */
            particle.vx += dx * 0.0018;
            particle.vy += dy * 0.0018;

            /*
             * Damping.
             */
            particle.vx *= 0.92;
            particle.vy *= 0.92;

            if (!reducedMotion) {
              /*
               * Very subtle organic movement.
               */
              particle.x +=
                particle.vx +
                Math.sin(time + particle.phase) * 0.018;

              particle.y +=
                particle.vy +
                Math.cos(time * 0.8 + particle.phase) * 0.018;
            } else {
              particle.x += particle.vx;
              particle.y += particle.vy;
            }
          } else {
            if (!reducedMotion) {
              particle.x +=
                particle.vx +
                Math.sin(time + particle.phase) * 0.015;

              particle.y +=
                particle.vy +
                Math.cos(time * 0.7 + particle.phase) * 0.015;
            } else {
              particle.x += particle.vx;
              particle.y += particle.vy;
            }

            /*
             * Wrap ambient particles.
             */
            if (particle.x < -5) particle.x = width + 5;
            if (particle.x > width + 5) particle.x = -5;

            if (particle.y < -5) particle.y = height + 5;
            if (particle.y > height + 5) particle.y = -5;
          }

          let alpha = particle.alpha;

          /*
           * Slight shimmer when particles settle
           * into the robot.
           */
          if (particle.isRobot && !reducedMotion) {
            const distance = Math.sqrt(
              (particle.targetX - particle.x) ** 2 +
                (particle.targetY - particle.y) ** 2
            );

            if (distance < 8) {
              alpha +=
                Math.sin(time * 1.2 + particle.phase) * 0.045;
            }
          }

          /*
           * Very occasional rust particle.
           */
          const rust =
            Math.sin(time * 0.6 + particle.phase) > 0.985;

          ctx.beginPath();

          ctx.arc(
            particle.x,
            particle.y,
            particle.radius,
            0,
            Math.PI * 2
          );

          ctx.fillStyle = rust
            ? `rgba(124,74,45,${Math.max(0.12, alpha)})`
            : `rgba(22,19,15,${Math.max(0.12, alpha)})`;

          ctx.fill();
        });

        frame = requestAnimationFrame(draw);
      };

      draw();
    };

    image.onerror = () => {
      console.warn(
        "DissolveCanvas: Could not load /robot.jpeg"
      );

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