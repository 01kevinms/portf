import { useState } from "react";
import { Container, Header, Title, Cards, Card, CardTitle, CardText, Button } from "./style";
import { BackModal } from "../../modals/Backend/Backmodal";
import { FrontModal } from "../../modals/Frontend/Frontmodal";
import { FullModal } from "../../modals/fullstack/full";

function Services() {
  const[modal, setModal] = useState(false);
  const[selectedModal, setSelectedModal] = useState<"front" | "back" | "full" | null>(null);

  function openModal(modalType:"front" | "back" | "full") {
    setSelectedModal(modalType);
    setModal(true);
  }
  function closeModal() {
    setModal(false);
    setSelectedModal(null);
  }
  return (
    <Container>
      <Header>
        <Title>Serviços que ofereço</Title>
      </Header>

      <Cards>

                 {/* FRONT-END */}
        <Card>
          <CardTitle>Front-end</CardTitle>
          <CardText>
            Interfaces modernas, responsivas e focadas em experiência do usuário.
          </CardText>
          <Button onClick={()=>openModal("front")}>Saiba mais</Button>
        </Card>
        
                  {/* BACK-END */}
        <Card>
          <CardTitle>Back-end</CardTitle>
          <CardText>
            APIs seguras, escaláveis e bem estruturadas.
          </CardText>
          <Button onClick={()=>openModal("back")}>Saiba mais</Button>
        </Card>
       
                  {/* FULL STACK */}
        <Card>
          <CardTitle>Full Stack</CardTitle>
          <CardText>
            Desenvolvimento completo do produto, do design à infraestrutura.
          </CardText>
          <Button onClick={()=>openModal("full")}>Saiba mais</Button>
        </Card>
      </Cards>

        {modal && selectedModal === "full" && (
          <div>
            <FullModal isOpen={modal} onClose={closeModal}/>
          </div>
        )}

       {modal && selectedModal === "back" && (
          <div>
            <BackModal isOpen={modal} onClose={closeModal}/>
          </div>
        )}

      {modal && selectedModal === "front" && (
          <div>
            <FrontModal isOpen={modal} onClose={closeModal}/>
          </div>
        )}

    </Container>
  );
}

export default Services;
