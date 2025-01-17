import React from 'react'
import Hero from './components/Hero';
import { Layout } from '../../layout/Layout';
import FaqQA from './components/FaqQA';
import Cta from './components/Cta';

export const FAQ = () => {
    return (
        <>
          <Layout>
            <div className='w-full grid gap-y-[2.5rem] px-[1.5rem]'>
              <Hero />
              <FaqQA />
              <Cta />
            </div>
          </Layout>
        </>
      );
}
