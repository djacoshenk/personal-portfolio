import about from 'assets/about-me.jpg';

import 'components/AboutSection.css';

export function AboutSection() {
  return (
    <section id='about' className='about-container'>
      <h3 className='about-title'>About</h3>
      <div className='about-main'>
        <div className='about-photo-container'>
          <img src={about} alt='' className='about-photo' />
        </div>
        <div className='about-card'>
          <p className='about-info'>
            Hi, I&apos;m Danny! I&apos;m a Frontend Developer, wannabe surfer,
            father of house plants, and former Civil Engineer with 5 years of
            experience designing mixed-use development projects. I&apos;m
            passionate about learning frontend languages/frameworks and have
            spent the part year developing web applications with TypeScript and
            React. I enjoy the problem sovling challenges of frontend
            development and always seek creative solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
