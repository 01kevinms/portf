import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  padding: 6rem 2rem;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 1100px;
  background: linear-gradient(180deg, #020617, #020617dd);
  border-radius: 1.5rem;
  padding: 4rem;
  box-shadow: 0 40px 90px rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.05);

  @media (max-width: 768px) {
    padding: 2.5rem 1.5rem;
  }
`;

export const Header = styled.div`
  max-width: 720px;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  font-family: poppins;
  line-height: 1.2;
  color: #f8fafc;
`;

export const Highlight = styled.span`
  color: #60a5fa;
`;

export const Subtitle = styled.p`
  margin-top: 1rem;
  font-size: 1.1rem;
  font-family: Raleway, sans-serif;
  color: #cbd5f5;
  line-height: 1.6;
`;

export const Content = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
`;
export const Knowledge = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  width: fit-content;
  margin-top: 1.5rem;
  font-size: 1rem;
  font-family: Raleway, sans-serif;
  color: #cbd5f5;
  
`;

export const KnowledgeBadge = styled.div<{ color: string }>`
  position: relative;
  left: 140px;
  width: 2px;
  height: 2px;
  padding: 0.3rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
  background: ${({ color }) => color};
  color: #020617;
`;  
