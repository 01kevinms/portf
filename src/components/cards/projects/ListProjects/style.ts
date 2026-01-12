import styled from "styled-components";



/* ================= CARD ================= */

export const Boxlist = styled.article`
  /* ================= SIZE ================= */
  width: 100%;
  max-width: 980px;
  min-height: 480px;

  /* ================= BASE ================= */
  position: relative;
  display: flex;
  border-radius: 22px;
  overflow: hidden;

  background: linear-gradient(
    180deg,
    rgba(15, 23, 42, 0.95),
    rgba(2, 6, 23, 0.94)
  );

  border: 1px solid rgba(96, 165, 250, 0.22);
  backdrop-filter: blur(14px);

  box-shadow:
    0 30px 60px rgba(0, 0, 0, 0.55),
    inset 0 0 0 1px rgba(255, 255, 255, 0.02);

  transform-style: preserve-3d;
  transition: all 0.5s ease;

  /* ================= GLOW INTERNO ================= */

  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(96, 165, 250, 0.15),
      transparent
    );
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
  }

  /* ================= NOISE ================= */

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 1;
  }

  /* ================= HOVER ================= */

  &:hover {

    box-shadow:
      0 70px 140px rgba(0, 0, 0, 0.85),
      0 0 55px rgba(96, 165, 250, 0.35);

    border-color: rgba(96, 165, 250, 0.45);
  }

  &:hover::before {
    opacity: 1;
  }

  /* ================= IMAGE ================= */

  .image {
    width: 48%;
    position: relative;
    overflow: hidden;
    z-index: 2;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.8s ease;
      transform: translateZ(50px);
    }

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(
        to right,
        rgba(2, 6, 23, 0.15),
        rgba(2, 6, 23, 0.95)
      );
    }
  }

  &:hover .image img {
    transform: scale(1.12) translateZ(80px);
  }

  /* ================= CONTENT ================= */

  .content {
    width: 52%;
    padding: 2.6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.3rem;
    z-index: 2;
    font-size: 2rem;
    font-family: Raleway, sans-serif;
  }

  h2 {
    font-size: 2rem;
    font-weight: 800;
    color: #f8fafc;
    letter-spacing: -0.02em;
  }

  p {
    font-size: 1.05rem;
    line-height: 1.75;
    color: #cbd5f5;
    max-width: 92%;
  }

  /* ================= ACTIONS ================= */

  .actions {
    display: flex;
    gap: 1.2rem;
    margin-top: 1.6rem;
  }

  button {
    min-width: 160px;
    padding: 0.95rem 1.6rem;
    border-radius: 0.9rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    border: none;
  }

  button.primary {
    background: linear-gradient(135deg, #3b82f6, #2563eb);
    color: white;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 0 30px rgba(59, 130, 246, 0.7);
    }
  }

  button.secondary {
    background: transparent;
    border: 1px solid rgba(96, 165, 250, 0.45);
    color: #60a5fa;

    &:hover {
      background: rgba(96, 165, 250, 0.15);
    }
  }

  /* ================= RESPONSIVE ================= */

  @media (max-width: 900px) {
    flex-direction: column;

    .image {
      width: 100%;
      height: 260px;

      &::after {
        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.1),
          rgba(2, 6, 23, 0.95)
        );
      }
    }

    .content {
      width: 100%;
      padding: 2.2rem;
    }

    h2 {
      font-size: 1.6rem;
    }
  }
`;
