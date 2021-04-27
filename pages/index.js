import React from 'react';
import Head from 'next/head';
// Components
import Intro from '@components/Intro';
import About from '@components/About';
import Experiences from '@components/Experiences.js';
import Education from '@components/Education.js';

const index = () => (
  <>
  <Head>
    <title>Portfolio</title>
  </Head>
    <Intro />
    <About />
    <Experiences />
    <Education />
  </>
);

export default index;
