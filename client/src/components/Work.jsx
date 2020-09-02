import React from 'react';
import shortid from 'shortid';
import ProjectCard from './ProjectCard';

function Work() {
  const projects = [
    {
      title: 'Project 1',
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
      dignissimos debitis, dolorum illo iure consectetur repellat eos
      provident pariatur molestias excepturi velit sed! Nemo nihil
      praesentium, illum quidem dolores accusamus sapiente, officia dolore
      laborum accusantium explicabo quas tempore, vel alias.`,
      tech: ['html5', 'css3-alt', 'js', 'react'],
    },
    {
      title: 'Project 2',
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
      dignissimos debitis, dolorum illo iure consectetur repellat eos
      provident pariatur molestias excepturi velit sed! Nemo nihil
      praesentium, illum quidem dolores accusamus sapiente, officia dolore
      laborum accusantium explicabo quas tempore, vel alias.`,
      tech: ['html5', 'css3-alt', 'js', 'react'],
    },
    {
      title: 'Project 3',
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
      dignissimos debitis, dolorum illo iure consectetur repellat eos
      provident pariatur molestias excepturi velit sed! Nemo nihil
      praesentium, illum quidem dolores accusamus sapiente, officia dolore
      laborum accusantium explicabo quas tempore, vel alias.`,
      tech: ['html5', 'css3-alt', 'js', 'react'],
    },
  ];

  return (
    <article className='work-container' id='work'>
      <h2 className='work-container-title'>Work</h2>
      <section className='work-project-container'>
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
      </section>
    </article>
  );
}

export default Work;
