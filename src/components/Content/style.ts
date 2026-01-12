import styled, { keyframes } from "styled-components";

/* ================= ANIMAÇÕES ================= */

export const gradientMove = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const float = keyframes`
  0% { transform: translateY(0px); opacity: 0.35; }
  50% { transform: translateY(-16px); opacity: 0.6; }
  100% { transform: translateY(0px); opacity: 0.35; }
`;
const rotatePortal = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`;

const pulsePortal = keyframes`
  0%   { opacity: .4; }
  50%  { opacity: .9; }
  100% { opacity: .4; }
`;

/* ================= CARD ================= */

export const CardWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 28px;

  --x: 50%;
  --y: 50%;

  box-shadow:
    0 0 120px rgba(96,165,250,.35),
    inset 0 0 0 1px rgba(96,165,250,.25);
`;

export const Portal = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;

  background:
    radial-gradient(
      400px circle at var(--x) var(--y),
      rgba(96,165,250,.45),
      transparent 60%
    );

  &::before {
    content: "";
    position: absolute;
    inset: 20%;
    border-radius: 50%;

    background:
      conic-gradient(
        from 0deg,
        transparent,
        rgba(96,165,250,.8),
        rgba(168,85,247,.8),
        transparent
      );

    filter: blur(1px);
    animation: ${rotatePortal} 18s linear infinite;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 30%;
    border-radius: 50%;

    background: radial-gradient(
      circle,
      rgba(96,165,250,.6),
      transparent 65%
    );

    filter: blur(40px);
    animation: ${pulsePortal} 6s ease-in-out infinite;
  }
`;

/* ================= BACKGROUND ================= */
export const Background = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    #020617,
    #020617f2,
    #020617
  );
`;


export const Glow = styled.div`
  position: absolute;
  width: 480px;
  height: 480px;
  background: radial-gradient(
    circle,
    rgba(59,130,246,.35),
    transparent 60%
  );
  top: -20%;
  left: -20%;
  filter: blur(140px);
  animation: float 8s ease-in-out infinite;
`;

export const Glow2 = styled(Glow)`
  top: auto;
  bottom: -25%;
  left: auto;
  right: -25%;
  background: radial-gradient(
    circle,
    rgba(168,85,247,.35),
    transparent 60%
  );
  animation-delay: 4s;
`;

export const Noise = styled.div`
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E");
  pointer-events: none;
`;

/* ================= CONTEÚDO ================= */
export const Content = styled.div`
  position: relative;
  z-index: 1;
  padding: 3.5rem 3rem;
  text-align: center;
  color: white;
`;
