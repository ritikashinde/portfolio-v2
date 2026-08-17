"use client";

import { useEffect, useRef, useState } from "react";

const ROBOT_SIZE = 32;

const GRAVITY = 0.7;
const JUMP_FORCE = -13;
const MOVE_SPEED = 4.5;

const platforms = [
  { x: 40, y: 90, w: 80 },

  { x: 180, y: 140, w: 80 },
  { x: 320, y: 180, w: 80 },

  { x: 130, y: 230, w: 80 },
  { x: 280, y: 280, w: 80 },

  { x: 450, y: 320, w: 80 },

  { x: 200, y: 360, w: 80 },

  { x: 340, y: 400, w: 80 },

  { x: 500, y: 430, w: 100 },

  { x: 560, y: 390, w: 40 },
];

const goal = {
  x: 560,
  y: 350,
  size: 40,
};

const START_POSITION = {
  x: 60,
  y: 40,
};

export default function RobotGame() {
  const [position, setPosition] = useState(START_POSITION);
  const [won, setWon] = useState(false);

  // Keep game state outside React's render cycle.
  const positionRef = useRef(START_POSITION);
  const velocityYRef = useRef(0);

  const keysRef = useRef({
    left: false,
    right: false,
  });

  const wonRef = useRef(false);

  const resetGame = () => {
    const start = { ...START_POSITION };

    positionRef.current = start;
    velocityYRef.current = 0;
    wonRef.current = false;

    setPosition(start);
    setWon(false);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        keysRef.current.right = true;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        keysRef.current.left = true;
      }

      if (event.code === "Space") {
        event.preventDefault();

        if (wonRef.current) return;

        const currentPosition = positionRef.current;

        const standingOnPlatform = platforms.some(
          (platform) =>
            currentPosition.x + ROBOT_SIZE > platform.x &&
            currentPosition.x < platform.x + platform.w &&
            Math.abs(
              currentPosition.y + ROBOT_SIZE - platform.y
            ) < 8
        );

        if (standingOnPlatform) {
          velocityYRef.current = JUMP_FORCE;
        }
      }

      if (
        event.key.toLowerCase() === "r" &&
        wonRef.current
      ) {
        resetGame();
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        keysRef.current.right = false;
      }

      if (event.key === "ArrowLeft") {
        keysRef.current.left = false;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    let animationFrame: number;

    const gameLoop = () => {
      if (!wonRef.current) {
        const current = positionRef.current;

        let newX = current.x;
        let newY = current.y;

        // --------------------------------
        // HORIZONTAL MOVEMENT
        // --------------------------------

        if (keysRef.current.left) {
          newX -= MOVE_SPEED;
        }

        if (keysRef.current.right) {
          newX += MOVE_SPEED;
        }

        // Keep robot inside game area
        newX = Math.max(
          0,
          Math.min(newX, 650 - ROBOT_SIZE)
        );

        // --------------------------------
        // GRAVITY
        // --------------------------------

        let newVelocityY =
          velocityYRef.current + GRAVITY;

        newY += newVelocityY;

        // --------------------------------
        // PLATFORM COLLISION
        // --------------------------------

        for (const platform of platforms) {
          const landed =
            newX + ROBOT_SIZE > platform.x &&
            newX < platform.x + platform.w &&
            current.y + ROBOT_SIZE <= platform.y &&
            newY + ROBOT_SIZE >= platform.y;

          if (landed) {
            newY = platform.y - ROBOT_SIZE;
            newVelocityY = 0;
          }
        }

        // --------------------------------
        // FALL / RESET
        // --------------------------------

        if (newY > 500) {
          resetGame();

          animationFrame = requestAnimationFrame(gameLoop);
          return;
        }

        // --------------------------------
        // GOAL
        // --------------------------------

        const touchingGoal =
          newX + ROBOT_SIZE > goal.x &&
          newX < goal.x + goal.size &&
          newY + ROBOT_SIZE > goal.y &&
          newY < goal.y + goal.size;

        if (touchingGoal) {
          wonRef.current = true;
          setWon(true);
        }

        // --------------------------------
        // SAVE PHYSICS STATE
        // --------------------------------

        const nextPosition = {
          x: newX,
          y: newY,
        };

        positionRef.current = nextPosition;
        velocityYRef.current = newVelocityY;

        // React only needs to render the latest position.
        setPosition(nextPosition);
      }

      animationFrame = requestAnimationFrame(gameLoop);
    };

    animationFrame = requestAnimationFrame(gameLoop);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="relative h-[500px] w-[650px] max-w-full overflow-hidden rounded-none border border-[#EDE9E0]/[0.14] bg-[#16130F]">

      {/* Controls */}
      <p className="absolute right-4 bottom-4 font-mono text-[11px] tracking-wide text-[#EDE9E0]/50">
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
          className="absolute rounded-full bg-emerald-400/20"
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
          boxShadow:
            "0 0 20px rgba(123,174,43,0.45)",
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

          // Keep the little idle movement,
          // but don't use it for gameplay physics.
          animation:
            "robotFloat 2s ease-in-out infinite",
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

            <h2
              className="text-3xl font-bold"
              style={{ color: "#9E968A" }}
            >
              Mission Complete
            </h2>

            <p className="mt-4 text-zinc-300">
              You helped the robot reach the end.
            </p>

            <p className="mt-6 font-mono text-[11px] tracking-wide !text-[#EDE9E0]/50">
              Press R to play again
            </p>

          </div>
        </div>
      )}
    </div>
  );
}