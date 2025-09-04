import Img from "../../components/Img"
import ProjectList from "../../components/projectslist"
import { About, Body, Container } from "./style"
import { Linkedin, Mail, Phone } from "lucide-react"
import todolist from "../../assets/todolist.png"
import dev from "../../assets/devfin.png"
import movie from "../../assets/Captura de tela 2025-08-27 221540.png"
import avatar from "../../assets/avatarpn.png"
import background from '../../assets/bg.png'
import { email, Finance, github, linked, Movies, ToDoList, whatsapp } from "../../components/links"

const App=()=> {




  return (
    <Body>
     <img className="backgroundab" src={background} alt="" />

      <Container>
        <div className="d1">
      <div  className="s1">
    <h1>Ola, me chamo kevin</h1>
    <p>Desenvolvedor FullStack</p>
    <div>
        <button type="button" onClick={github} className="pj">ver projetos</button>
        <button className="ctt">entrar em contato</button>
    </div>
      </div>
      <div className="s2">
        <div className="circle"><img src={avatar} alt="" /></div>
      </div>
        </div>
      </Container>
      <About>
        <div className="aboutimg">
          <header>
<h1>Sobre mim</h1>
          </header>
<p>Em busca de um emprego e tambem freelances</p>
          
 <h3>plataformas, linguagens e styles com conhecimentos</h3>
          
<Img />
        </div>
        <div className="proj">
<ProjectList onClick={ToDoList} src={todolist} title="to-Do List">app para organizar tarefas</ProjectList>
<ProjectList onClick={Finance} src={dev}  title="DevFintech">app para organizar suas finanças</ProjectList>
<ProjectList onClick={Movies} src={movie}  title="DevMovies">site mostrando destaques do cinema</ProjectList>
       
        </div>
      </About>
<div className="aboutctt">
      <div className="blog">
        <h3>Blog</h3>
<p>
🚀 Bem-vindo ao meu portfólio! <br />
Aqui compartilho meus projetos e minha evolução como desenvolvedor. <br /> <br />
Comecei criando uma To-Do List de forma mais basica usando apenas JS, CSS E HTML, mas pouco tempo depois refiz um novo usando react, avancei para projetos mais complexos como o DevMovies, explorando APIs externas. <br /> <br />
Estou sempre em busca de melhorar minhas habilidades em JavaScript, Node.js e banco de dados, para construir aplicações completas no front e no back-end.</p>
</div>
<div className="contact">
  <div>
<h3>Entre em contato</h3>
  </div>
<div>
<Mail className="email" onClick={email} />
<Linkedin className="linkedin" onClick={linked}/>
<Phone className="whatsapp" onClick={whatsapp}/>
</div>
</div>
      </div>
     
    </Body>
  
  )
}

export default App
