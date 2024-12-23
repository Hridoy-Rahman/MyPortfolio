import React from 'react';

const Experience = () => {
    return (
        <div name='experience' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Professional Experiences</p>
                </div>

                <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-gray-800 p-6 rounded-lg'>
                        <h3 className='text-2xl font-semibold text-pink-600'>Software Engineer Intern</h3>
                        <p className='text-sm text-gray-400'>Vivasoft Limited | Sep 2023 – Feb 2024, Remote</p>

                        <div className='mt-4'>
                            <h4 className='text-lg font-medium text-gray-300'>Project: Vivasoft Contact Management (Frontend)</h4>
                            <ul className='list-disc list-inside text-gray-400 mt-2'>
                                <li>Developed responsive, pixel-perfect UIs from Figma designs with custom components.</li>
                                <li>Handled complex forms using React Hook Form and Zod validation.</li>
                                <li>Collaborated with cross-functional teams, contributing to seamless project workflows and team success.</li>
                                <li>Gained hands-on experience in Next.js and TypeScript, enhancing development efficiency and scalability.</li>
                            </ul>
                        </div>

                        <div className='mt-4'>
                            <h5 className='font-medium text-gray-400'>Tech Stack:</h5>
                            <p className='text-gray-300'>Typescript, ReactJs, NextJs, CSS, TailwindCSS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
