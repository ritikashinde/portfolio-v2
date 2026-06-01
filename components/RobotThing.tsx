"use client";

import { useEffect, useState } from "react";

const ROBOT_SIZE = 32;
const GRAVITY = 0.7;
const JUMP_FORCE = -13;

const platforms = [
  { x: 40,  y: 90,  w: 80 },   // Start

  { x: 180, y: 140, w: 80 },
  { x: 320, y: 180, w: 80 },

  { x: 130, y: 230, w: 80 },
  { x: 280, y: 280, w: 80 },

  { x: 450, y: 320, w: 80 },

  { x: 200, y: 360, w: 80 },

  { x: 340, y: 400, w: 80 },

  { x: 500, y: 430, w: 100 }, // final route

  { x: 560, y: 390, w: 40 },  // goal support
];

const goal = {
  x: 560,
  y: 350,
  size: 40,
};

export default function RobotGame() {
  const [position, setPosition] = useState({
    x: 60,
    y: 40,
  });

  const [velocityY, setVelocityY] = useState(0);

  const [keys, setKeys] = useState({
    left: false,
    right: false,
  });

  const [won, setWon] = useState(false);

  const resetGame = () => {
    setPosition({
      x: 60,
      y: 40,
    });

    setVelocityY(0);
    setWon(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (won) {
        if (e.key.toLowerCase() === "r") {
          resetGame();
        }
        return;
      }

      if (e.key === "ArrowRight") {
        setKeys((prev) => ({ ...prev, right: true }));
      }

      if (e.key === "ArrowLeft") {
        setKeys((prev) => ({ ...prev, left: true }));
      }

      if (e.code === "Space") {
        const standingOnPlatform = platforms.some(
          (platform) =>
            position.x + ROBOT_SIZE > platform.x &&
            position.x < platform.x + platform.w &&
            Math.abs(position.y + ROBOT_SIZE - platform.y) < 10
        );

        if (standingOnPlatform) {
          setVelocityY(JUMP_FORCE);
        }
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setKeys((prev) => ({ ...prev, right: false }));
      }

      if (e.key === "ArrowLeft") {
        setKeys((prev) => ({ ...prev, left: false }));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [position, won]);

  useEffect(() => {
    if (won) return;

    const interval = setInterval(() => {
      setPosition((prev) => {
        let newX = prev.x;
        let newY = prev.y;

        const moveSpeed = velocityY !== 0 ? 3 : 5;

if (keys.left) newX -= moveSpeed;
if (keys.right) newX += moveSpeed;

        newX = Math.max(0, Math.min(newX, 620));

        let newVelocity = velocityY + GRAVITY;
        newY += newVelocity;

        for (const platform of platforms) {
          const landedOnPlatform =
            newX + ROBOT_SIZE > platform.x &&
            newX < platform.x + platform.w &&
            prev.y + ROBOT_SIZE <= platform.y &&
            newY + ROBOT_SIZE >= platform.y;

          if (landedOnPlatform) {
            newY = platform.y - ROBOT_SIZE;
            newVelocity = 0;
          }
        }

        if (newY > 500) {
          resetGame();
          return prev;
        }

        const touchingGoal =
          newX + ROBOT_SIZE > goal.x &&
          newX < goal.x + goal.size &&
          newY + ROBOT_SIZE > goal.y &&
          newY < goal.y + goal.size;

        if (touchingGoal) {
          setWon(true);
        }

        setVelocityY(newVelocity);

        return {
          x: newX,
          y: newY,
        };
      });
    }, 16);

    return () => clearInterval(interval);
  }, [keys, velocityY, won]);

  return (
    <div className="relative h-[500px] w-[650px] overflow-hidden rounded-3xl border border-zinc-800 bg-black/30">

      {/* Controls */}
      <p className="absolute right-4 top-4 text-xs text-zinc-500">
        ← → Move • Space Jump
      </p>

      {/* Start Label */}
      <div
        className="absolute text-xs tracking-[0.3em] text-zinc-500"
        style={{
          left: "55px",
          top: "45px",
        }}
      >
        START
      </div>

      {/* Platforms */}
      {platforms.map((platform, index) => (
        <div
          key={index}
          className="absolute rounded-full #7BAE2B bg-emerald-400/20"
          style={{
            left: platform.x,
            top: platform.y,
            width: platform.w,
            height: 4,
          }}
        />
      ))}

      {/* Goal Tile */}
<div
  className="absolute rounded-xl border border-[#7BAE2B] bg-[#7BAE2B]/10"
  style={{
    left: goal.x,
    top: goal.y,
    width: goal.size,
    height: goal.size,
    boxShadow: "0 0 20px rgba(123,174,43,0.45)",
  }}

      />

      {/* Robot */}
<div
  className="absolute flex items-center justify-center rounded-md border border-[#7BAE2B] bg-[#16231B]"
  style={{
    left: position.x,
    top: position.y,
    width: ROBOT_SIZE,
    height: ROBOT_SIZE,
    animation: "robotFloat 2s ease-in-out infinite",
  }}
>
  <div className="flex gap-1">
    <div className="h-1.5 w-1.5 rounded-full bg-[#D8E1D3]" />
    <div className="h-1.5 w-1.5 rounded-full bg-[#D8E1D3]" />
  </div>
</div>

      {/* Win Screen */}
      {won && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/85 backdrop-blur-sm">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-violet-400">
              Mission Complete
            </h2>

            <p className="mt-4 text-zinc-300">
              You helped the robot reach the end.
            </p>

            <p className="mt-2 text-zinc-400">
              Now scroll down to explore my journey ↓
            </p>

            <p className="mt-6 text-sm text-zinc-500">
              Press R to play again
            </p>
          </div>
        </div>
      )}
    </div>
  );
}