import React from 'react';
import { ParticleBackground } from './components/ParticleBackground';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="bg-cyber-black min-h-screen">
      <ParticleBackground />
      <Header />
      <main className="relative">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}

export default App;