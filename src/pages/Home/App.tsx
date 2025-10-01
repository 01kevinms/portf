import Img from "../../components/Img";
import ProjectList from "../../components/projectslist";
import { About, Body, Container } from "./style";
import { Linkedin, Mail, Phone } from "lucide-react";
import todolist from "../../assets/todolist.png";
import dev from "../../assets/devfin.png";
import movie from "../../assets/Captura de tela 2025-08-27 221540.png";
import avatar from "../../assets/avatarpn.png";
import background from '../../assets/bg.png';
import habit from '../../assets/habit.png';
import { email, Finance, github, Habits, linked, Movies, PrevFinance, Prevhabit, PrevMovie, PrevTodolist, ToDoList, whatsapp } from "../../components/links.tsx";
import ContactButton from "../../components/button";
import { useState } from "react";
import { CloseBtn, ModalContent, ModalOverlay } from "./modalstyle";

const App = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <Body>
      <img className="backgroundab" src={background} alt="" />

      <Container>
        <div className="d1">
          <div className="s1">
            <h1>Ola, me chamo Kevin</h1>
            <p>Desenvolvedor FullStack</p>
            <div>
              <button type="button" onClick={github} className="pj">ver projetos</button>
              <button onClick={() => setShowForm(!showForm)} className="ctt">entrar em contato</button>
            </div>
          </div>
          <div className="s2">
            <div className="circle"><img src={avatar} /></div>
          </div>
        </div>
      </Container>

      {showForm && (
        <ModalOverlay onClick={() => setShowForm(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseBtn onClick={() => setShowForm(false)}>X</CloseBtn>
            <ContactButton onSuccess={() => setShowForm(false)} />
          </ModalContent>
        </ModalOverlay>
      )}

      <About>
        <div className="aboutimg">
          <header>
            <h1>Sobre mim</h1>
          </header>
          <p>Em busca de um emprego e freelances.</p>
          <p>Sou uma pessoa que gosta de trabalhar em equipe. <br />
          procuro resolver problemas de forma lógica <br />
          e de fácil entendimento sempre que possível</p>
          <h3>Plataformas, linguagens e styles com conhecimentos</h3>
          <Img />
        </div>

        <div className="proj">
          <ProjectList a={PrevTodolist} onClick={ToDoList} src={todolist} title="To-Do List">app para organizar tarefas</ProjectList>
          <ProjectList a={PrevFinance} onClick={Finance} src={dev} title="DevFintech">app para organizar suas finanças</ProjectList>
          <ProjectList a={PrevMovie} onClick={Movies} src={movie} title="DevMovies">site mostrando destaques do cinema</ProjectList>
          <ProjectList a={Prevhabit} onClick={Habits} src={habit} title="habit tracker">site para gerenciar sua rotina</ProjectList>

        </div>
      </About>

      <div className="aboutctt">
        <div className="blog">
          <h3>Blog</h3>
          <p>
            🚀 Bem-vindo ao meu portfólio!<br />
            Aqui compartilho meus projetos e minha evolução como desenvolvedor. <br /><br />
            Comecei criando uma To-Do List de forma mais básica usando apenas JS, CSS e HTML, mas pouco tempo depois refiz um novo usando React, avancei para projetos mais complexos como o DevMovies, explorando APIs externas. <br /><br />
            Estou sempre em busca de melhorar minhas habilidades em JavaScript, Node.js e banco de dados, para construir aplicações completas no front e no back-end.
          </p>
        </div>

        <div className="contact">
          <div>
            <h3>Entre em contato</h3>
          </div>
          <div>
            <Mail className="email" onClick={email} />
            <Linkedin className="linkedin" onClick={linked} />
            <Phone className="whatsapp" onClick={whatsapp} />
          </div>
        </div>
      </div>
    </Body>
  );
};

export default App;
