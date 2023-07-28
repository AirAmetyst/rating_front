import React from 'react';
import Typed from 'react-typed';
import {Link} from "react-scroll";

const Hero = () => {
    return (
        <div>
            <div className='max-w-[1280px]  w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#000000] sm:text-2xl  select-none p-2 font-aqum_2'>
                    РАСКРОЙ СВОЙ ТАЛАНТ
                </p>
                <h1 className='md:text-9xl select-none  sm:text-6xl text-5xl  md:py-6 font-aqum_2 text-[#9762DC]'>
                    RATING.
                </h1>
                <div className='flex justify-center select-none text-xs sm:text-3xl  items-center'>
                    <p className='md:text-5xl  py-4 whitespace-nowrap font-aqum_2 text-[#000000]'>
                        Умное портфолио для
                    </p>
                    <Typed
                        className='md:text-5xl   md:pl-4, text-[#000000] pl-2 font-aqum_2 '
                        strings={['школьников', 'студентов', 'учителей']}
                        typeSpeed={120}
                        backSpeed={140}
                        loop
                    />
                </div>
                <p className='md:text-2xl text-xl font-aqum_2 text-gray-400 select-none '>Единое цифровое пространство для ваших достижений</p>
                <button className='bg-[#9762DC] w-[200px] rounded-md font-aqum_2 my-6 mx-auto py-3 text-white hover:bg-[#C04764] transition-all duration-500 ' onClick= {console.log("click")}>
                    <Link  to="contacts" spy={true} smooth={true} offset={50} duration={500}>
                        Принять участие в тестировании
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default Hero;