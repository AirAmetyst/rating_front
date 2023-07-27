import React from 'react';
import {
    FaAppStore,

    FaTelegram,
    FaVk,

} from 'react-icons/fa';
import {BiLogoPlayStore} from 'react-icons/bi'

const Footer = () => {
    return (
        <div className='max-w-[1920px]  justify-center flex py-16 px-4  text-black'>
            <div>
                <h1 className='w-full text-center text-3xl font-bold text-[#9762DC] font-aqum_2'>RATING.</h1>
                <p className='py-4 font-aqum_2 text-center' >ВЫ МОЖЕТЕ НАЙТИ НАС ЗДЕСЬ</p>
                <div className='flex justify-evenly  my-6'>
                    <a href="https://vk.com/ratingedu">
                        <FaVk size={30} />
                    </a>
                    <a href= "https://t.me/polinaglazovaa">
                        <FaTelegram size={30} />
                    </a>

                    <FaAppStore size={30} />
                    <BiLogoPlayStore size={30}/>
                </div>
                <p className='py-4 font-aqum_2 text-center' >Copyright © Rating 2023  Все права защищены</p>
            </div>

        </div>
    );
};

export default Footer;