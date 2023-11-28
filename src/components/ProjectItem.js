import React from "react";

function ProjectItem({ name, about, technologies }) { //Destructuring from <ProjectItem /> => 
  //  console.log(technologies)
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologies.map((technology, index) => (
          <span key={index}>{technology}</span>
        ))}
      </div>
    </div>
  );
}


export default ProjectItem;
