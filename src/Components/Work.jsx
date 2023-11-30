import React from 'react';
import { data } from "../data";


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

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

        
          {project.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover'
              }}
              className="shadow-lg shadow-[#040c16] group container h-60 w-full rounded-md 
              flex justify-center text-center items-center mx-auto content-div hover:scale-110 duration-500"
            >

              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font bold text-red-600 tracking-wider ">
                  {item.name}
                </span>
                <div className="pt-8 text-center ">
                  
                  <a href={item.github} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-blue-600 text-white font-bold text-lg"
                    >
                      Code
                    </button>
                  </a>
                  <a href={item.live} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-blue-600 text-white  font-bold text-lg"
                    >
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