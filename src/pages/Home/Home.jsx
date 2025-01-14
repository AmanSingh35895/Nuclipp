import React from 'react';
import { Layout } from '../../layout/Layout';
import Hero from './components/Hero';
import Cta from './components/Cta';
import ServiceTeaser from './components/ServiceTeaser';
import SocialProofs from './components/SocialProofs';
import ProblemStatement from './components/ProblemStatement';
import NuclippInNumbers from './components/NuclippInNumbers';

export const Home = () => {
  return (
    <>
      <Layout>
        <div className='w-full grid gap-y-[2.5rem] px-[1.5rem]'>
          <Hero />
          <ProblemStatement />
          <NuclippInNumbers />
          <ServiceTeaser />
          <SocialProofs />
          <Cta />
        </div>
      </Layout>
    </>
  );
}
