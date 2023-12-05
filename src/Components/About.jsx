import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-3xl font-bold'>
              <p>Hi, I'm Hridoy Rahman, a Front-End Developer, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p> I've mastered HTML, CSS, and JavaScript, along with dynamic frameworks like ReactJS and NextJS. Crafting responsive designs using Tailwind CSS, Bootstrap, and Daisy UI is my forte. On the back-end, I'm well-versed in Node.js, Express.js, MongoDB, and prioritize security with JSON Web Tokens. Let's collaborate and shape digital experiences, one pixel at a time!</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
