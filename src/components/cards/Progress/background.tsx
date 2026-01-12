import {
  Wrapper,
  Base,
  Grid,
  Light,
  Vignette,
  Content,
} from "./styleBackground";

export default function ProgressBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Wrapper>
      <Base />
      <Grid />
      <Light />
      <Vignette />
      <Content>{children}</Content>
    </Wrapper>
  );
}
