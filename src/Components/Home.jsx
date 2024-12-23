import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-pink-600'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ffff]'>Hridoy Rahman</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I am a Front-End focused Full Stack Developer</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>
                    I'm a front-end developer specializing in building exceptional digital experiences. Currently, I'm focused on
                    building responsive full-stack web applications.
                </p>
                <div>
                    <button >
                        <a href="https://drive.google.com/file/d/1Sb7HtpZggZ0UiDExfZlic-nIPd5uJyVH/view?usp=sharing" className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>Download CV
                        
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3 ' />
                        </span></a>
                        
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
