import { useState } from 'react';
import {
  SiCircleci,
  SiCss3,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiNetlify,
  SiNpm,
  SiReact,
  SiRedux,
  SiSass,
  SiSentry,
  SiTypescript,
} from 'react-icons/si';

import 'components/WorkSection.css';

const LOGOS = [
  {
    icon: SiHtml5,
    color: '#ffb86c',
    title: 'HTML',
  },
  {
    icon: SiCss3,
    color: '#8be9fd',
    title: 'CSS',
  },
  {
    icon: SiSass,
    color: '#ff79c6',
    title: 'Sass',
  },
  {
    icon: SiJavascript,
    color: '#f1fa8c',
    title: 'JavaScript',
  },
  {
    icon: SiJest,
    color: '#ff5555',
    title: 'Jest',
  },
  {
    icon: SiReact,
    color: '#8be9fd',
    title: 'React',
  },
  {
    icon: SiRedux,
    color: '#bd93f9',
    title: 'Redux',
  },
  {
    icon: SiTypescript,
    color: '#8be9fd',
    title: 'TypeScript',
  },
  {
    icon: SiFirebase,
    color: '#ffb86c',
    title: 'Firebase',
  },
  {
    icon: SiNpm,
    color: '#ff5555',
    title: 'NPM',
  },
  {
    icon: SiGit,
    color: '#ff5555',
    title: 'Git',
  },
  {
    icon: SiGithub,
    color: '#f8f8f2',
    title: 'GitHub',
  },
  {
    icon: SiNetlify,
    color: '#8be9fd',
    title: 'Netlify',
  },
  {
    icon: SiSentry,
    color: '#bd93f9',
    title: 'Sentry',
  },
  {
    icon: SiCircleci,
    color: '#f8f8f2',
    title: 'CircleCi',
  },
];

const PROJECTS = [
  {
    title: 'Plan Check',
    info: `Plan Check is a web application that provides plan check services to developers and engineers. The project was started after I spent a few years in the civil engineering industry and noticed many problems with the process of obtaining design approval from government agencies. I decided to create a user dashboard to aid with project tracking across multiple agencies and implement features to help with communication between the project applicant and reviewer.`,
    live_path: '#',
    code_path: '#',
  },
  {
    title: 'Wunderlist',
    info: `Wunderlist started initially as challenge for myself to see if I could consume REST APIs and display the returned data in the UI. After achieving this, I started adding new features, such as paginated results with Intersection Observer API, an autocomplete search bar with Downshift, and user authenticated sign up/sign in forms with Firebase. This project eventually became the foundation for which I would teach myself modern frontend tech, such as TypeScript, Redux, Jest, React Testing Library, and Cypress.`,
    live_path: 'https://wunderlist.me/',
    code_path: 'https://github.com/djacoshenk/wunderlist',
  },
];

export function WorkSection() {
  const [logoIsActive, setLogoIsActive] = useState(-1);

  return (
    <section id='work' className='work-container'>
      <h3 className='work-title'>Work</h3>
      <div className='work-main'>
        <div className='work-tech-container'>
          <h4 className='work-tech-heading'>Technology I Use</h4>
          <div className='work-tech-logos'>
            {LOGOS.map((logo, index) => (
              <div key={index} className='work-tech'>
                <logo.icon
                  className='work-tech-logo'
                  size={64}
                  color={logo.color}
                  onClick={() => setLogoIsActive(index)}
                  onMouseEnter={() => setLogoIsActive(index)}
                  onMouseLeave={() => setLogoIsActive(-1)}
                />

                <p className='work-tech-title'>
                  {index === logoIsActive && logo.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className='work-projects-container'>
          <h4 className='work-projects-heading'>My Projects</h4>
          <div className='work-projects'>
            {PROJECTS.map((proj, index) => {
              return (
                <div key={index} className='work-project-card'>
                  <h4 className='work-project-title'>{proj.title}</h4>
                  <p className='work-project-info'>{proj.info}</p>
                  <div className='work-links'>
                    <div className='work-link-container'>
                      <a
                        href={proj.live_path}
                        target='_blank'
                        rel='noreferrer'
                        className='work-link'
                      >
                        View Live
                      </a>
                    </div>
                    <div className='work-link-container'>
                      <a
                        href={proj.code_path}
                        target='_blank'
                        rel='noreferrer'
                        className='work-link'
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
