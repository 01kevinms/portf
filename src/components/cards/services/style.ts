import styled, { keyframes } from "styled-components";

/* ================= ANIMAÇÕES ================= */

const gridMove = keyframes`
  0% {
    background-position: 0 0, 0 0;
  }
  100% {
    background-position: 60px 60px, -60px -60px;
  }
`;

const scanline = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0.05;
  }
  50% {
    opacity: 0.12;
  }
  100% {
    transform: translateY(100%);
    opacity: 0.05;
  }
`;

const pulseGlow = keyframes`
  0%, 100% {
    opacity: 0.25;
  }
  50% {
    opacity: 0.45;
  }
`;

/* ================= CONTAINER ================= */

export const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  padding: 6rem 2rem;
  overflow: hidden;
  background-color: #020617;

  /* Cyber grid */
  background-image:
    linear-gradient(rgba(96,165,250,0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(96,165,250,0.08) 1px, transparent 1px);
  background-size: 60px 60px;
  animation: ${gridMove} 35s linear infinite;

  /* Neon glow */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at 30% 20%,
      rgba(96,165,250,0.35),
      transparent 60%
    ),
    radial-gradient(
      circle at 70% 80%,
      rgba(34,197,94,0.25),
      transparent 60%
    );
    filter: blur(120px);
    animation: ${pulseGlow} 8s ease-in-out infinite;
    pointer-events: none;
  }

  /* Scanline effect */
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 120px;
    background: linear-gradient(
      to bottom,
      transparent,
      rgba(255,255,255,0.08),
      transparent
    );
    animation: ${scanline} 6s linear infinite;
    pointer-events: none;
  }
`;

/* ================= HEADER ================= */

export const Header = styled.header`
  text-align: center;
  max-width: 720px;
`;

export const Title = styled.h1`
  font-size: clamp(2.2rem, 4vw, 3rem);
  font-weight: 800;
  color: #ffffffff;
  letter-spacing: -0.03em;
`;

/* ================= GRID ================= */

export const Cards = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1100px;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

/* ================= CARD ================= */

export const Card = styled.article`
  background:#ffff;
  border-radius: 1.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);
  transition: all 0.35s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(96, 165, 250, 0.5);
    box-shadow: 0 40px 90px rgba(0, 0, 0, 1);
  }
`;

/* ================= TEXTOS ================= */

export const CardTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #000000ff;
  margin-bottom: 0.8rem;
`;

export const CardText = styled.p`
  font-size: 1.5rem;
  line-height: 1.6;
  color: #000000ff;
`;

export const Button = styled.button`
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  font-family: poppins;
  color: #ffffff;
  background-color: #3b82f6;
  border: none;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2563eb;
  }
`;