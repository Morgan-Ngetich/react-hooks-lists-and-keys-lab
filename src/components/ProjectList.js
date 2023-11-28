import React from "react";
import ProjectItem from "./ProjectItem";


// function ProjectItem({ name, about, technologies }) { //Destructuring from <ProjectItem /> => 
//   //  console.log(technologies)
//   return (
//     <div className="project-item">
//       <h3>{name}</h3>
//       <p>{about}</p>
//       <div className="technologies">
//         {technologies.map((technology, index) => (
//           <span key={index}>{technology}</span>
//         ))}
//       </div>
//     </div>
//   );
// }


function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div  id="project-list">        
        {projects.map((project) => (
          <ProjectItem key={project.id}  {...project} />
        ))}        
      </div>
    </div>
    
  );
}

export default ProjectList;
