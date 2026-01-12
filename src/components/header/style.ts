import styled, { keyframes } from "styled-components";

/* ================= ANIMAÇÕES ================= */

const gradientMove = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const float = keyframes`
  0% { transform: translateY(0px); opacity: 0.4; }
  50% { transform: translateY(-20px); opacity: 0.7; }
  100% { transform: translateY(0px); opacity: 0.4; }
`;

/* ================= CONTAINER ================= */

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  padding: 4rem 1rem;
`;

/* ================= CARD ================= */

export const Card = styled.div`
  position: relative;
  width: 100%;
  max-width: 720px;
  padding: 3rem 2rem;
  border-radius: 1.2rem;
  color: white;
  background: #020617;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
`;

/* ================= BACKGROUND ANIMADO ================= */

export const AnimatedBg = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
`;

export const Gradient = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(270deg, #020617, #0f172a, #020617);
  background-size: 400% 400%;
  animation: ${gradientMove} 14s ease infinite;
`;

export const Glow = styled.div`
  position: absolute;
  width: 420px;
  height: 420px;
  background: radial-gradient(
    circle,
    rgba(59, 130, 246, 0.35),
    transparent 60%
  );
  top: -10%;
  left: -10%;
  filter: blur(120px);
  animation: ${float} 8s ease-in-out infinite;
`;

export const Glow2 = styled(Glow)`
  top: auto;
  bottom: -15%;
  left: auto;
  right: -10%;
  background: radial-gradient(
    circle,
    rgba(34, 197, 94, 0.35),
    transparent 60%
  );
  animation-delay: 3s;
`;

/* ================= CONTEÚDO ================= */

export const Content = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
`;

export const Avatar = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  padding: 5px;
  background: linear-gradient(135deg, #2563eb, #22c55e);
  margin: 0 auto 1.2rem;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    background: #000;
  }
`;

export const Name = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  font-family: poppins;
`;

export const Role = styled.p`
  margin-top: 0.4rem;
  font-size: 1.1rem;
  color: #cbd5f5;
`;

export const Socials = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;

  a {
    color: white;
    font-size: 1.3rem;
    opacity: 0.8;
    transition: 0.2s;

    &:hover {
      opacity: 1;
      transform: translateY(-2px);
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

/* ================= BOTÃO ================= */
export const Button = styled.button<{ $primary?: boolean }>`
  padding: 0.8rem 1.6rem;
  border-radius: 0.6rem;
  font-weight: 500;
  font-family: poppins;
  cursor: pointer;
  border: none;

  background: ${({ $primary }) =>
    $primary ? "#22c55e" : "#2563eb"};

  color: white;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  transition: 0.2s;

  &:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }
`;

