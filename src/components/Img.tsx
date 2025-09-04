import tail from '../assets/TailwindCSS.png';
import react from '../assets/React.png';
import node from '../assets/Node.js.png'; 
import types from '../assets/TypeScript.png';
import mongo from '../assets/MongoDB.png'; 
import sql from '../assets/MySQL.png'; 
import git from '../assets/GitHub.png';  // Adjust the path as needed
import { Container, Imgs } from './stylelogo';

const Img = () => {
    return (
        <Container>
        <div className='char'>
            <div>
        <Imgs src={tail} alt="" />
        <p>tailwind</p>
            </div>
            <div>
        <Imgs src={react} alt="" />
         <p>React</p>
            </div>
            <div>
        <Imgs src={node} alt="" />
         <p>Node.js</p>
            </div>
            <div>
        <Imgs src={mongo} alt="" />
         <p>MongoDB</p>
            </div>
            <div>
        <Imgs src={git} alt="" />
         <p>github</p>
            </div>
        </div>
        <div className='learning'>
            <h2>Estudando no momento</h2>
            <p className='beginner'>iniciante</p>
            <ul>

        <li>
        <Imgs src={types} alt="" />
        <p>typescript</p>
        </li>

        <li>
        <Imgs src={sql} alt="" />
        <p>Mysql</p>
        </li>
            </ul>
        </div>
        </Container>
    );
}
export default Img