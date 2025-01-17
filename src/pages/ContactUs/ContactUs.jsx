import React from 'react'
import Hero from './components/Hero';
import { Layout } from '../../layout/Layout';
import GetInTouch from './components/GetInTouch';

export const ContactUs = ()=>{
    return (
        <>
          <Layout>
            <div className='w-full grid gap-y-[2.5rem] px-[1.5rem]'>
              <Hero />
              <GetInTouch />
            </div>
          </Layout>
        </>
      );
}

