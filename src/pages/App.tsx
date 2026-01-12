import ProgressCard from "../components/cards/Progress/Progress";
import Projects from "../components/cards/projects/Projects";
import Services from "../components/cards/services/Services";
import Header from "../components/header/Header";
import { AnimatedCard } from "../components/Content/AnimatedCard";
import { CardsWrapper, Container, FloatingButton, Separate } from "./style/style";
import { ScrollReveal } from "../components/Content/ScrollReveal";
import { useState } from "react";
import { ContactModal } from "../components/modals/contact/contatc";
import { Footer } from "../components/footer/Footer";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <FloatingButton onClick={() => setIsOpen(true)}>
        Contato
      </FloatingButton>

      {isOpen && <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />}

      <ScrollReveal>
        <CardsWrapper>
          <AnimatedCard>
            <Header />
          </AnimatedCard>
        </CardsWrapper>
        <Separate />
      </ScrollReveal>

      <ScrollReveal>
        <CardsWrapper>
          <ProgressCard />
        </CardsWrapper>
        <Separate />
      </ScrollReveal>

      <ScrollReveal>
        <CardsWrapper>
          <Services />
        </CardsWrapper>
        <Separate />
      </ScrollReveal>

      <ScrollReveal>
        <Projects />
      </ScrollReveal>

      <Footer/>
    </Container>
  );
}

