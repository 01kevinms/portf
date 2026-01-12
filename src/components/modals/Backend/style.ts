import styled, { keyframes } from "styled-components";

/* animações */
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const scaleIn = keyframes`
  from { transform: scale(.92) translateY(10px); opacity: 0; }
  to { transform: scale(1) translateY(0); opacity: 1; }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(2, 6, 23, 0.75);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  animation: ${fadeIn} 0.25s ease;
`;

export const Modal = styled.div`
  position: relative;
  width: 90%;
  max-width: 420px;
  padding: 2.2rem;
  border-radius: 16px;
  background: linear-gradient(
    180deg,
    rgba(15,23,42,.95),
    rgba(2,6,23,.95)
  );
  color: #e5e7eb;
  animation: ${scaleIn} 0.35s cubic-bezier(.16,1,.3,1);

  box-shadow:
    0 0 60px rgba(96,165,250,.25),
    inset 0 0 0 1px rgba(148,163,184,.12);

  h2 {
    margin-top: .6rem;
    font-size: 1.5rem;
    color: #93c5fd;
  }

  p {
    margin: .8rem 0 1.2rem;
    line-height: 1.6;
    color: #cbd5f5;
  }

  ul {
    list-style: none;
    padding: 0;
    margin-bottom: 1.6rem;

    li {
      font-size: .95rem;
      margin-bottom: .4rem;
      color: #e2e8f0;
    }
  }

  button {
    width: 100%;
    padding: .8rem;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    font-weight: 600;
    background: linear-gradient(
      90deg,
      #60a5fa,
      #38bdf8
    );
    color: #020617;
    transition: transform .2s ease, box-shadow .2s ease;

  transition: 
    background 0.2s ease,
    color 0.2s ease,
    transform 0.15s ease;

  &:hover {
    background: rgba(96, 165, 250, 0.15);
    color: #e5e7eb;
    transform: scale(1.05);
  }
  }

  .badge {
    display: inline-block;
    padding: .25rem .6rem;
    font-size: .85rem;
    border-radius: 999px;
    background: rgba(96,165,250,.15);
    color: #93c5fd;
    box-shadow: inset 0 0 0 1px rgba(96,165,250,.35);
  }
  .badge.backend {
  background: rgba(34,197,94,.15);
  color: #86efac;
  box-shadow: inset 0 0 0 1px rgba(34,197,94,.35);
}

`;
