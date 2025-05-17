import React from "react";
import { Link } from "react-router-dom";
import { Panel } from "./components"

const Project = () => {
  const projects = [
    { name: "word-adder", path: "/" },
    { name: "swap-clothes", path: "/contact" },
  ];

  return (
    <div className="projects">
        {projects.map(({ name, path }) => (
            <Panel title={name}/>
        ))}
    </div>
  );
};

export default Project;
