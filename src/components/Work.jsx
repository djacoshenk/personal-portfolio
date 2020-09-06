import React from 'react';
import shortid from 'shortid';
import ProjectCard from './ProjectCard';
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons';

export default function Work() {
  const projects = [
    {
      title: 'WePlanCheck',
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
      dignissimos debitis, dolorum illo iure consectetur repellat eos
      provident pariatur molestias excepturi velit sed! Nemo nihil
      praesentium, illum quidem dolores accusamus sapiente, officia dolore
      laborum accusantium explicabo quas tempore, vel alias.`,
      tech: [faHtml5, faCss3Alt, faJs, faReact],
    },
    {
      title: 'Wunderlist',
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
      dignissimos debitis, dolorum illo iure consectetur repellat eos
      provident pariatur molestias excepturi velit sed! Nemo nihil
      praesentium, illum quidem dolores accusamus sapiente, officia dolore
      laborum accusantium explicabo quas tempore, vel alias.`,
      tech: [faHtml5, faCss3Alt, faJs, faReact],
    },
    {
      title: 'Fishbowl',
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
      dignissimos debitis, dolorum illo iure consectetur repellat eos
      provident pariatur molestias excepturi velit sed! Nemo nihil
      praesentium, illum quidem dolores accusamus sapiente, officia dolore
      laborum accusantium explicabo quas tempore, vel alias.`,
      tech: [faHtml5, faCss3Alt, faJs, faReact],
    },
  ];

  return (
    <article className='work-container' id='work'>
      {projects.map((proj) => {
        return (
          <ProjectCard
            key={shortid.generate()}
            title={proj.title}
            desc={proj.desc}
            tech={proj.tech}
          />
        );
      })}
    </article>
  );
}
