import styled, { keyframes } from "styled-components";

/* ================= ANIMAÇÕES ================= */

const gridMove = keyframes`
  0% { background-position: 0 0, 0 0; }
  100% { background-position: 40px 40px, -40px -40px; }
`;

const spotlight = keyframes`
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.35; }
  50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.5; }
  100% { transform: translate(-50%, -50%) scale(1); opacity: 0.35; }
`;

/* ================= CONTAINER ================= */

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  background: #020617;
  box-shadow: 0 40px 90px rgba(0, 0, 0, 0.75);
`;

/* ================= BASE ================= */

export const Base = styled.div`
  position: absolute;
  inset: 0;
  background: #020617;
`;

/* ================= GRID ================= */

export const Grid = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
  background-size: 40px 40px;
  animation: ${gridMove} 40s linear infinite;
  opacity: 0.25;
`;

/* ================= LUZ ================= */

export const Light = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 900px;
  height: 900px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(96, 165, 250, 0.35),
    rgba(2, 6, 23, 0.9) 65%
  );
  animation: ${spotlight} 10s ease-in-out infinite;
  pointer-events: none;
`;

/* ================= VINHETA ================= */

export const Vignette = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at center,
    transparent 40%,
    rgba(2, 6, 23, 0.85)
  );
`;

/* ================= CONTEÚDO ================= */

export const Content = styled.div`
  position: relative;
`;
