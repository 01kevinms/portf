import styled, { keyframes } from "styled-components";


const pulse = keyframes`
  0%   { opacity: 0.3; transform: scaleX(0.9); }
  50%  { opacity: 1;   transform: scaleX(1); }
  100% { opacity: 0.3; transform: scaleX(0.9); }
`;

const scan = keyframes`
  0%   { transform: translateX(-60%); opacity: 0; }
  30%  { opacity: 1; }
  70%  { opacity: 1; }
  100% { transform: translateX(60%); opacity: 0; }
`;

export const Container = styled.main`
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  position: relative;
  background: #020617;
`;

export const Separate = styled.div`
  position: relative;
  width: 100%;
  height: 140px;
  display: block;
  overflow: hidden;
  pointer-events: none;
  /* fundo atmosférico */
  background: linear-gradient(
    180deg,
    transparent,
    rgba(3, 10, 41, 0.83),
    transparent
  );

  /* ================= LINHA ================= */

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 15%;
    width: 65%;
    height: 1px;
    transform: translate(-50%, -50%);
    background: linear-gradient(
      90deg,
      transparent,
      rgba(96,165,250,0.9),
      transparent
    );
    box-shadow:
      0 0 12px rgba(96,165,250,0.9),
      0 0 32px rgba(96,165,250,0.35);
    animation: ${pulse} 4s ease-in-out infinite;
  }

  /* ================= SCAN ================= */

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    
    width: 140px;
    height: 2px;
    transform: translate(-50%, -50%);
    background: linear-gradient(
      90deg,
      transparent,
      #60a5fa,
      transparent
    );
    filter: blur(0.5px);
    animation: ${scan} 3.5s linear infinite;
  }

`;

export const FloatingButton = styled.button`
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 99;

  padding: 1.2rem 1.4rem;
  border-radius: 999px;
  border: none;
  cursor: pointer;

  font-size: 1rem;
  font-weight: 600;
  font-family: poppins;
  color: #020617;

  background: linear-gradient(135deg, #60a5fa, #38bdf8);

  box-shadow:
    0 0 30px rgba(96,165,250,.55),
    0 0 80px rgba(56,189,248,.35);

  transition: transform .25s ease, box-shadow .25s ease;

  &:hover {
    transform: translateY(-3px) scale(1.03);
    box-shadow:
      0 0 40px rgba(96,165,250,.8),
      0 0 100px rgba(56,189,248,.5);
  }
`;

export const CardsWrapper = styled.div`
  position: relative;
  margin-bottom: -80px;
`;
