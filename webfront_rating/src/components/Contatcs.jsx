import React from 'react';

const Newsletter = () => {
    return (
        <div id = "contacts" className='w-full py-16 text-white px-4 bg-[#C04764] font-aqum_2'>
            <div className='max-w-[1920px]  grid lg:grid-cols-2'>
                <div className=' my-4 '>
                    <h1 className='2xl:w-[800px] lg:w-[500px] md:text-2xl sm:text-xl text-xl font-bold px-8 py-2 text-left w-[400px] sm:w-[700px] '>
                         У Вас есть предложения или Вы просто хотите как можно быстрее получить доступ к Rating?
                    </h1>
                    <p className= " w-[400px] sm:w-[500px] py-4 px-8">Оставьте Ваш адрес электронной почты и мы обязательно свяжемся с вами!</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col md:flex-row items-center  w-full'>
                        <input
                            className='p-3 flex w-full rounded-md text-black'
                            type='email'
                            placeholder='RATING_follower@yandex.ru'
                        />
                        <button className=' bg-[#9762DC] text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
                            Оставить
                        </button>
                    </div>
                    <p className="text-center">
                        Мы ценим обратную связь! Нам важен каждый пользователь!{' '}

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;