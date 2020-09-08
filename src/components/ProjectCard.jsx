import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import shortid from 'shortid';

export default function ProjectCard({ title, desc, tech }) {
  return (
    <section className='work-project'>
      <h3>{title}</h3>
      <p>{desc}</p>
      <a href='#home'>
        <FontAwesomeIcon icon={faEye} />
        Live Version
      </a>
      <a href='#home'>
        <FontAwesomeIcon icon={faGithub} />
        View Code
      </a>
      <div className='work-project-tech'>
        {tech.map((tech) => {
          return <FontAwesomeIcon icon={tech} key={shortid.generate()} />;
        })}
      </div>
    </section>
  );
}
