import styled from "styled-components";

export const FooterWrapper = styled.footer`
  margin-top: auto;
  padding: 1.6rem 1rem;
  background: linear-gradient(
    180deg,
    rgba(2, 6, 23, 0.95),
    rgba(15, 23, 42, 0.95)
  );
  border-top: 1px solid rgba(148, 163, 184, 0.15);
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;

  color: #94a3b8;
  font-size: 0.9rem;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const ContactButton = styled.button`
  padding: 0.6rem 1.4rem;
  border-radius: 999px;
  border: none;
  cursor: pointer;

  font-weight: 600;
  background: linear-gradient(90deg, #60a5fa, #38bdf8);
  color: #020617;

  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 24px rgba(96, 165, 250, 0.6);
  }
`;
