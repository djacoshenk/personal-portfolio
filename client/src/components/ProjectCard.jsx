import React from 'react';

function ProjectCard({ title, desc, tech }) {
  return (
    <section className='work-project'>
      <h3>{title}</h3>
      <p>{desc}</p>
      <a href='#home'>
        <i className='fas fa-eye'></i>Live Version
      </a>
      <a href='#home'>
        <i className='fab fa-github'></i>View Code
      </a>
      <div className='work-project-tech'>
        {tech.map((tech) => {
          return <i className={`fab fa-${tech}`}></i>;
        })}
      </div>
    </section>
  );
}

export default ProjectCard;
