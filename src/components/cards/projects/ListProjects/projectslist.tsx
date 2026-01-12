import type React from "react";
import { Boxlist } from "./style";

type ProjectListProps = {
  children: React.ReactNode;
  title: string;
  src: string;
  onClick: () => void;
  a: () => void;
};

const ProjectList = ({ children, title, src, onClick, a }: ProjectListProps) => {
  return (
  <Boxlist>
  <div className="image">
    <img src={src} alt={title} />
  </div>

  <div className="content">
    <h2>{title}</h2>
    <p>{children}</p>

    <div className="actions">
      <button className="secondary" onClick={a}>Preview</button>
      <button className="primary" onClick={onClick}>Código</button>
    </div>
  </div>
</Boxlist>

  );
};

export default ProjectList;
