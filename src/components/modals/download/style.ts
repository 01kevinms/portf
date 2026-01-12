import styled, { keyframes } from "styled-components";

/* ================= ANIMAÇÕES ================= */

const fade = keyframes`
  from { opacity: 0 }
  to   { opacity: 1 }
`;

const scale = keyframes`
  from { transform: scale(.95) translateY(12px); opacity: 0 }
  to   { transform: scale(1) translateY(0); opacity: 1 }
`;

/* ================= OVERLAY ================= */

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(2,6,23,.75);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  animation: ${fade} .25s ease;
`;

/* ================= MODAL ================= */

export const Modal = styled.div`
  position: relative;
  width: 90%;
  max-width: 900px;

  min-height: 420px;
  max-height: 85vh;

  padding: 2.5rem;
  border-radius: 20px;

  display: flex;
  flex-direction: column;

  background: linear-gradient(
    180deg,
    rgba(15,23,42,.98),
    rgba(2,6,23,.98)
  );

  animation: ${scale} .35s cubic-bezier(.16,1,.3,1);

  box-shadow:
    0 0 80px rgba(96,165,250,.35),
    inset 0 0 0 1px rgba(148,163,184,.15);

`;

/* ================= CLOSE ================= */

export const CloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;

  width: 34px;
  height: 34px;

  border-radius: 50%;
  border: none;
  background: rgba(15,23,42,.85);

  font-size: 1.2rem;
  color: #94a3b8;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background .2s ease, color .2s ease;

  &:hover {
    background: rgba(30,41,59,.9);
    color: #e5e7eb;
  }
`;

/* ================= HEADER ================= */

export const HeaderArea = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  padding-top: .5rem;
`;

export const Title = styled.h2`
  color: #93c5fd;
  font-size: 1.6rem;
`;

/* ================= CONTENT ================= */

export const ContentArea = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 .5rem 1rem;
`;

/* ================= GRID ================= */

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.8rem;
  align-content: start;
`;

/* ================= CARD ================= */

export const Card = styled.div`
  background: rgba(15,23,42,.85);
  border-radius: 16px;
  padding: 1.4rem;
  text-align: center;

  box-shadow:
    inset 0 0 0 1px rgba(96,165,250,.25),
    0 0 30px rgba(96,165,250,.15);

  transition: transform .3s ease, box-shadow .3s ease;

  &:hover {
    transform: translateY(-6px) scale(1.03);
    box-shadow:
      0 0 50px rgba(96,165,250,.45);
  }

  h3 {
    margin: .8rem 0;
    color: #e5e7eb;
    font-size: 1.05rem;
  }
`;

/* ================= PREVIEW ================= */

export const Preview = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(0,0,0,.6);
`;

/* ================= DOWNLOAD ================= */

export const DownloadBtn = styled.a`
  display: inline-block;
  margin-top: .6rem;
  padding: .6rem 1.4rem;

  border-radius: 999px;
  font-weight: 600;

  background: linear-gradient(90deg, #60a5fa, #38bdf8);
  color: #020617;
  text-decoration: none;

  transition: box-shadow .25s ease, transform .25s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 0 26px rgba(96,165,250,.6);
  }
`;
