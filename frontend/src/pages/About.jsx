import React from 'react';
import { AboutHero, AnoutInfo } from './components';

const About = () => (
  <section className='flex flex-col items-center pt-[140px]'>
    <AboutHero />
    <AnoutInfo />
  </section>
);

export default About;