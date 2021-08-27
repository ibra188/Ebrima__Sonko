import React from 'react';
import {Contact, Testimonials, Skills, About, Projects, Navbar } from './components/index';

export default function App() {
  return(
    <main className="text-gray-400 bg-gray-900 body-font">
    <Navbar />
    <About />
    <Projects />
    <Skills />
    <Testimonials />
    <Contact />
    </main>
    
  );
}

