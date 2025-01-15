import { useState } from "react";
import { Layout } from "../../layout/Layout";
import AddOnServices from "./components/AddOnServices";
import Hero from "./components/Hero";
import OurServices from "./components/OurServices";
import PreMonetizedChannels from "./components/PreMonetizedChannels";

export const Pricing = () => {
    const [plan, setPlan] = useState('monthly');

    return (
        <Layout>
            <div className='w-full grid gap-y-[2.5rem] px-[1.5rem]'>
                <Hero plan={plan} setPlan={setPlan}/>
                <OurServices plan={plan}/>
                <PreMonetizedChannels plan={plan}/>
                <AddOnServices plan={plan}/>
            </div>
        </Layout>
    )
}

