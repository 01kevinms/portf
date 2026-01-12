import {
  Container,
  LearningCard,
  TechItem,
  TechIcon,
  LevelBadge,
} from "./stylelogo";
import tail from '../../assets/TailwindCSS.png';
import react from '../../assets/React.png';
import next from '../../assets/next.png'; 
import nest from '../../assets/nest.png'; 
import node from '../../assets/Node.js.png'; 
import types from '../../assets/TypeScript.png';
import mongo from '../../assets/MongoDB.png'; 
import sql from '../../assets/MySQL.png'; 
import docker from '../../assets/docker.png'; 
const learningData = [
  {
    level: "Frontend",
    color: "#facc15",
    techs: [
      { name: "Tailwind", icon: tail },
      { name: "React", icon: react },
      { name: "Next.js", icon: next },
    ],
  },
  {
    level: "Backend",
    color: "#60a5fa",
    techs: [
      { name: "Nest.js", icon: nest },
      { name: "Node.js", icon: node },
      { name: "TypeScript", icon: types },
    ],
  },
  {
    level: "Banco dados/DevOps",
    color: "#22c55e",
    techs: [
      { name: "mySQL", icon: sql },
      { name: "mongoDb", icon: mongo },
      { name: "docker", icon: docker },
    ],
  },
];

export default function Img() {
  return (
    <Container>
      {learningData.map((group) => (
        <LearningCard key={group.level}>
          <LevelBadge color={group.color}>
            {group.level}
          </LevelBadge>

          {group.techs.map((tech) => (
            <TechItem key={tech.name}>
              <TechIcon src={tech.icon} alt={tech.name} />
              <span>{tech.name}</span>
            </TechItem>
          ))}
        </LearningCard>
      ))}
    </Container>
  );
}
