import type { ReactNode } from "react";
import {
  CardWrapper,
  Background,
  Glow,
  Glow2,
  Noise,
  Content,
  Portal,
} from "./style";

interface AnimatedCardProps {
  children: ReactNode;
}

export function AnimatedCard({ children }: AnimatedCardProps) {
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    e.currentTarget.style.setProperty("--x", `${x}px`);
    e.currentTarget.style.setProperty("--y", `${y}px`);
  }

  return (
    <CardWrapper onMouseMove={handleMouseMove}>
      <Portal />
      <Background />
      <Glow />
      <Glow2 />
      <Noise />
      <Content>{children}</Content>
    </CardWrapper>
  );
}
