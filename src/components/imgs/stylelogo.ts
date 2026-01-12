import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  font-family: Raleway, sans-serif;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
`;

export const LearningCard = styled.div`
  position: relative;
  background: linear-gradient(180deg, #0f172a, #020617);
  border-radius: 1.2rem;
  padding: 2rem 1.5rem 1.8rem;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.55);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 35px 70px rgba(0, 0, 0, 0.7);
  }
`;

export const LevelBadge = styled.div<{ color: string }>`
  position: absolute;
  top: -14px;
  left: 16px;
  padding: 0.3rem 0.8rem;
  border-radius: 99px;
  font-size: 1rem;
  font-weight: 600;
  background: ${({ color }) => color};
  color: #020617;
`;

export const TechItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
  color: #e5e7eb;
  font-size: 0.95rem;
`;

export const TechIcon = styled.img`
  width: 26px;
  height: 26px;
`;
