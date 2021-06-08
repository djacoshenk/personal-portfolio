import { AboutSection } from 'components/AboutSection';
import { ContactSection } from 'components/ContactSection';
import { HeroSection } from 'components/HeroSection';
import { NavBar } from 'components/NavBar';
import { WorkSection } from 'components/WorkSection';

import 'components/App.css';

export function App() {
  return (
    <>
      <NavBar />
      <main className='main-container'>
        <HeroSection />
        <WorkSection />
        <AboutSection />
        <ContactSection />
      </main>
    </>
  );
}
