import React from 'react';
import { render } from '@react-email/render';
//import {Resend}  from 'resend';
import { Email } from '../components/emails/EmailForm.jsx';


const Newsletter = () => {

    //const resend = new Resend('re_9CK5pMRT_6ghuyyFzMn3d89pwQAaNpP9k');





    return (
        <div id = "contacts" className='w-full py-16 text-white px-4 bg-[#C04764] font-aqum_2'>
            <div className='max-w-[1920px]  grid lg:grid-cols-2'>
                <div className=' my-4 '>
                    <h1 className='2xl:w-[800px] lg:w-[500px] md:text-2xl sm:text-xl text-xl font-bold px-8 py-2 text-left w-[400px] sm:w-[700px] '>
                         У Вас есть предложения или Вы просто хотите как можно быстрее получить доступ к Rating?
                    </h1>
                    <p className= " w-[400px] sm:w-[500px] py-4 px-8">Напишите нам на электронную почту и мы обязательно свяжемся с вами!</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col md:flex-row items-center  w-full'>


                        <button  className=' bg-[#9762DC] text-white rounded-md text-2xl w-[300px] lg:w-[800px] ml-4 my-6 px-2 sm:px6 py-3'>
                            rating.edu@mail.ru
                        </button>
                    </div>
                    <p className="text-center w-[350px] sm:w-[650px]">
                        Мы ценим обратную связь! Нам важен каждый пользователь!{' '}

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;