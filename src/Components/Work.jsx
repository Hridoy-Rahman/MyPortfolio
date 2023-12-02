import React from 'react';
import { data } from '../data';

const Work = () => {
  const project = data;

  return (
    <div name='works' className='w-full md:h-full text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6'> Check out some of my recent work</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {project.map((item, index) => (
            <div
              key={index}
              className='relative group container h-60 w-full rounded-md overflow-hidden hover:opacity-50 duration-500'
            >
              <div
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  height: '100%',
                }}
                
              ></div>

              <div className='absolute inset-0 text-center pt-4 bg-blue-600 rounded-xl bg-opacity-0 opacity-0 group-hover:opacity-100'>
                <span className='text-2xl rounded-lg px-4 py-3 m-2 mt-4 bg-blue-600 text-white font-bold tracking-wider'>
                  {item.name}
                </span>
                <div className='pt-8 text-center'>
                  <a href={item.github} target='_blank' rel='noopener noreferrer'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-blue-600 text-white font-bold text-lg'>
                      Code
                    </button>
                  </a>
                  <a href={item.live} target='_blank' rel='noopener noreferrer'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-blue-600 text-white font-bold text-lg'>
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
