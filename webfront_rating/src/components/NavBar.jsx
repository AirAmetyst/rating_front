import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from "../assets/images/icon_logo.svg"
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };
    const handleSetActive = (to) => {
        console.log(to);
    }

    return (
        <div className='w-full flex justify-between items-center h-24 max-w-[1280px] mx-auto px-4 text-[#000000] font-aqum_2'>
            <img src = {logo} alt= "nothing" width={50} height={50} />
            <h1 className='w-full text-3xl font-aqum_2 text-[#000000] select-none '>RATING.</h1>
            <ul className='hidden md:flex select-none '>
                <li className='p-4 rounded-3xl hover:bg-[#C04764] transition-all duration-500'>

                    <Link  to="news"  spy={true} smooth={true} offset={50} duration={500} >
                        НОВОСТИ
                    </Link>


                </li>
                <li className='p-4 rounded-3xl hover:bg-[#C04764] transition-all duration-500'>
                    <Link  to="about" spy={true} smooth={true} offset={50} duration={500}>
                        ОПИСАНИЕ
                    </Link>
                </li>
                <li className='p-4 rounded-3xl hover:bg-[#C04764] transition-all duration-500'>
                    <Link  to="techs" spy={true} smooth={true} offset={50} duration={500}>
                        ТЕХНОЛОГИИ
                    </Link>
                </li>
                <li className='p-4 rounded-3xl hover:bg-[#C04764] transition-all duration-500'>
                    <Link  to="contacts" spy={true} smooth={true} offset={50} duration={500}>
                        КОНТАКТЫ
                    </Link>
                </li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
            </div>
            <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#FFFFFF] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%] font-aqum_2'}>
                <h1 className='w-full text-3xl font-bold text-[#000000] m-4 font-aqum_2'>RATING.</h1>
                <li className='p-4 border-b border-gray-600'>
                    <Link  onClick={handleNav} to="news" spy={true} smooth={true} offset={50} duration={500}>
                        НОВОСТИ
                    </Link>
                </li>
                <li className='p-4 border-b border-gray-600'>
                    <Link onClick={handleNav} to="about" spy={true} smooth={true} offset={50} duration={500}>
                        ОПИСАНИЕ
                    </Link>
                </li>
                <li className='p-4 border-b border-gray-600'>
                    <Link onClick={handleNav} to="techs" spy={true} smooth={true} offset={50} duration={500}>
                        ТЕХНОЛОГИИ
                    </Link>
                </li>
                <li className='p-4'>
                    <Link onClick={handleNav} to="contacts" spy={true} smooth={true} offset={50} duration={500}>
                        КОНТАКТЫ
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;