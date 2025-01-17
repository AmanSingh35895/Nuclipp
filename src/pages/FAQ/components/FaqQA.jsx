import React, { useState } from 'react'
import { generalFaq } from './FaqData'

const QAComponent = ({ title, data }) => {
    const [activeIndexes, setActiveIndexes] = useState([]); // Track the currently open question

    const toggleAnswer = (index) => {
        if (activeIndexes.includes(index)) {
            // If the question is already active, remove it from the activeIndexes
            setActiveIndexes(activeIndexes.filter((i) => i !== index));
          } else {
            // Otherwise, add it to the activeIndexes
            setActiveIndexes([...activeIndexes, index]);
          }
    };

    return (
        <div className="px-6 py-4 w-[60%] flex flex-col items-center">
            <h2 className="text-2xl font-bold text-[#FF7171] mb-6 w-full">{title}</h2>
            <div className="space-y-6 flex flex-col items-center w-full">
                {data.map((item, index) => (
                    <div key={index} className='w-full'>
                        <div className='flex justify-between w-full items-center'>
                            <span className="text-lg font-medium text-[#101828]">
                                {item.question}
                            </span>

                            <span onClick={() => toggleAnswer(index)} >{activeIndexes.includes(index) ? <img src='assets/images/hide.png' alt='hide' className='h-[1.5rem]'/> : <img src='assets/images/show.png' alt='hide' className='h-[1.5rem]'/>}</span>
                        </div>


                        <p className="text-[#667085] mt-2 w-full">{activeIndexes.includes(index) ? item.answer : ''}</p>

                    </div>
                ))}
            </div>
        </div>
    )
}

const FaqQA = () => {
    return (
        <div className='flex flex-col items-start ml-[20%] gap-y-16'>
            <QAComponent title="General FAQs:" data={generalFaq} />
            <QAComponent title="Services FAQs:" data={generalFaq} />
            <QAComponent title="Technical FAQs:" data={generalFaq} />
            <QAComponent title="Support FAQs:" data={generalFaq} />
        </div>
    )
}

export default FaqQA