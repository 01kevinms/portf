import { Boxlist } from "./list"
import type React from "react";

type ProjectListProps = {
  children: React.ReactNode;
  title: string
  src: string;
  onClick: (()=>void);
};

const ProjectList = ({ children, title, src, onClick}: ProjectListProps) => {

  return (
    <Boxlist>
 

      <div className="all">
      <div className="img">
      <img src={src} alt="" />
      </div>
      <div className="foot">
    <h2>{title}</h2>
    <p>{children}</p>
    <div className="btt">
    <a href={src} target="_blank" rel="noopener noreferrer">Prev</a>
<button onClick={onClick}>Codigo</button>
    </div>
      </div>
      </div>

    </Boxlist>
  
  )
}

export default ProjectList
