import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`;

const scaleIn = keyframes`
  from { transform: scale(.92) translateY(10px); opacity: 0 }
  to { transform: scale(1) translateY(0); opacity: 1 }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(2, 6, 23, 0.6);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: ${fadeIn} .25s ease;
`;

export const Modal = styled.div`
  position: relative;
  width: 92%;
  max-width: 440px;
  padding: 2.2rem;
  border-radius: 18px;

  background: linear-gradient(
    180deg,
    rgba(15,23,42,.96),
    rgba(2,6,23,.96)
  );

  color: #e5e7eb;
  animation: ${scaleIn} .35s cubic-bezier(.16,1,.3,1);

  box-shadow:
    0 0 60px rgba(96,165,250,.35),
    inset 0 0 0 1px rgba(148,163,184,.12);

  h2 {
    margin-bottom: .4rem;
    color: #93c5fd;
  }

  p {
    margin-bottom: 1.4rem;
    font-size: .95rem;
    color: #cbd5f5;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  background: transparent;
  border: none;
  font-size: 1.2rem;
  color: #94a3b8;
  cursor: pointer;

  &:hover {
    color: #e5e7eb;
  }
`;
