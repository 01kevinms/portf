import Img from "../../imgs/Img";
import ProgressBackground from "./background";
import {
  Container,
  Card,
  Header,
  Title,
  Highlight,
  Subtitle,
  Content,
} from "./style";

function ProgressCard() {
  
  return (
    <ProgressBackground>

    <Container>
      <Card>
        <Header>
          <Title>
            Meu progresso em Tecnologias <Highlight>Conhecimentos</Highlight>
          </Title>

          <Subtitle>
            Tecnologias que estou aprendendo e aprimorando continuamente
          </Subtitle>

         
        </Header>

        <Content>
          <Img />
        </Content>
      </Card>
    </Container>
    </ProgressBackground>
  );
}

export default ProgressCard;
