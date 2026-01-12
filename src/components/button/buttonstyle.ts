import styled, { keyframes } from "styled-components";

const glow = keyframes`
  0% { box-shadow: 0 0 12px rgba(96,165,250,.3); }
  50% { box-shadow: 0 0 28px rgba(96,165,250,.8); }
  100% { box-shadow: 0 0 12px rgba(96,165,250,.3); }
`;

export const Container = styled.div`
  width: 100%;
  z-index: 99;

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  input,
  textarea {
    background: rgba(2, 6, 23, 0.95);
    border: 1px solid rgba(148, 163, 184, 0.15);
    border-radius: 10px;
    padding: 0.9rem;
    font-size: 1rem;
    color: #e5e7eb;
    outline: none;

    transition: border .25s ease, box-shadow .25s ease;

    &:focus {
      border-color: #60a5fa;
      box-shadow: 0 0 18px rgba(96,165,250,.5);
    }
  }

  textarea {
    min-height: 120px;
    resize: none;
  }

  button {
    margin-top: .5rem;
    padding: .9rem;
    border-radius: 12px;
    border: none;
    font-weight: 600;
    cursor: pointer;

    background: linear-gradient(90deg, #60a5fa, #38bdf8);
    color: #020617;

    animation: ${glow} 4s infinite;
    transition: transform .2s ease, box-shadow .2s ease;

    &:hover {
      transform: translateY(-2px);
    }

    &:disabled {
      opacity: .6;
      cursor: not-allowed;
      animation: none;
    }
  }
`;

/* ================= TOAST ================= */

export const Toast = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  padding: 14px 18px;
  border-radius: 12px;
  font-size: .95rem;
  color: #020617;
  font-weight: 600;
  z-index: 99;

  background: #60a5fa;
  box-shadow: 0 0 24px rgba(96,165,250,.6);

  &[data-status="error"] {
    background: #ef4444;
    box-shadow: 0 0 24px rgba(239,68,68,.6);
    color: #fff;
  }

  &[data-status="loading"] {
    background: #38bdf8;
  }
`;
