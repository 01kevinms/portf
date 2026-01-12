import styled, { keyframes } from "styled-components";

/* ================= ANIMAÇÕES ================= */

const rotateSlow = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const rotateReverse = keyframes`
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
`;

const scanMove = keyframes`
  0% { transform: translateY(-100%); opacity: 0; }
  30% { opacity: 0.35; }
  100% { transform: translateY(120%); opacity: 0; }
`;

const glowPulse = keyframes`
  0% { opacity: 0.3; }
  50% { opacity: 0.65; }
  100% { opacity: 0.3; }
`;

/* ================= WRAPPER ================= */

export const CarouselWrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 380px;
  padding: 8rem 1.5rem;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  overflow: hidden;
  background: #020617;

  /* ================= GEOMETRIA CYBER ================= */

  &::before {
    content: "";
    position: absolute;
    width: 520px;
    height: 520px;
    top: -15%;
    left: -10%;
    border: 2px solid rgba(96, 165, 250, 0.25);
    transform: rotate(45deg);
    animation: ${rotateSlow} 60s linear infinite;
    box-shadow:
      0 0 80px rgba(96, 165, 250, 0.25),
      inset 0 0 40px rgba(96, 165, 250, 0.15);
    z-index: 0;
  }

  &::after {
    content: "";
    position: absolute;
    width: 420px;
    height: 420px;
    bottom: -12%;
    right: -8%;
    border: 2px solid rgba(168, 85, 247, 0.25);
    transform: rotate(45deg);
    animation: ${rotateReverse} 80s linear infinite;
    box-shadow:
      0 0 90px rgba(168, 85, 247, 0.3),
      inset 0 0 45px rgba(168, 85, 247, 0.15);
    z-index: 0;
  }

  /* ================= GLOW CENTRAL INTENSO ================= */

  .glow {
    position: absolute;
    inset: -30%;
    background:
      radial-gradient(circle at 30% 40%, rgba(96,165,250,0.45), transparent 55%),
      radial-gradient(circle at 70% 60%, rgba(168,85,247,0.35), transparent 60%);
    filter: blur(180px);
    animation: ${glowPulse} 10s ease-in-out infinite;
    z-index: 0;
    pointer-events: none;
  }

  /* ================= SCANLINES ================= */

  .scanlines {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
    z-index: 1;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 120px;
      background: linear-gradient(
        to bottom,
        transparent,
        rgba(96, 165, 250, 0.35),
        transparent
      );
      animation: ${scanMove} 6s linear infinite;
    }
  }

  /* ================= NOISE ================= */

  .noise {
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 1;
  }

  /* ================= SWIPER ================= */

  .swiper {
    width: 100%;
    max-width: 1400px;
    padding-bottom: 5rem;
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column-reverse;
    gap: 10px;
    align-items: center;
  }

  /* ================= NAV ================= */

  .swiper-button-prev,
  .swiper-button-next {
    color: #60a5fa;
    text-shadow: 0 0 14px rgba(96,165,250,0.9);
    transition: transform 0.3s ease;
  }

  .swiper-button-prev:hover,
  .swiper-button-next:hover {
    transform: scale(1.3);
  }

  /* ================= PAGINATION ================= */

  .swiper-pagination-bullet {
    background: #475569;
    opacity: 0.4;
  }

  .swiper-pagination-bullet-active {
    background: #60a5fa;
    opacity: 1;
    box-shadow: 0 0 18px rgba(96,165,250,1);
  }
`;
export const Title = styled.h1`
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 700;
  padding-bottom: 20px;
  line-height: 1.2;
  color: #f8fafc;
`;