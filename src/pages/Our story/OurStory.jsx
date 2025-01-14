import React from "react";
import { Layout } from "../../layout/Layout";
import Hero from "./components/Hero";
import Story from "./components/Story";
import CoreValues from "./components/CoreValues";


export const OurStory = () => {
  return <Layout>
    <div className='w-full grid gap-y-[2.5rem] px-[1.5rem]'>
          <Hero />
          <Story />
          <CoreValues />
        </div>
  </Layout>;
  
};
