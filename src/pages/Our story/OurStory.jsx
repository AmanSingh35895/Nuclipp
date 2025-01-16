import React from "react";
import { Layout } from "../../layout/Layout";
import Hero from "./components/Hero";
import Story from "./components/Story"; // Ensure this path is correct and the component exists
import CoreValues from "./components/CoreValues";
import ServiceTeaser from "../Home/components/ServiceTeaser";
import SocialProofs from "../Home/components/SocialProofs"
import Cta from "../Home/components/Cta";

export const OurStory = () => {
  return <Layout>
    <div className='w-full grid gap-y-[2.5rem] px-[1.5rem]'>
          <Hero />
          <Story />
          <CoreValues />
          <ServiceTeaser/>
          <SocialProofs />
          <Cta />
        </div>
  </Layout>;
  
};
