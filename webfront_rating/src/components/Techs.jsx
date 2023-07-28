import React, {Component} from 'react';

import {BiDevices} from 'react-icons/bi';
import {HiCursorClick} from 'react-icons/hi';
import {BiSolidBox} from 'react-icons/bi';
import {LiaBrainSolid} from 'react-icons/lia'
import {MdWorkOutline} from 'react-icons/md'
import {TbDeviceAnalytics} from 'react-icons/tb'


class Techs extends Component {
    render() {
        return (
            <div id = "techs">
                <div className=' flex flex-col w-full max-w-[1920px]  py-16 bg-[#9765D8] '>
                    <h2 className="font-aqum_2 text-white text-2xl lg:text-5xl text-center">Что мы предлагаем</h2>
                </div>
                <div className=' max-w-[1920px]  grid lg:grid-cols-3 gap-8 py-16 bg-[#9765D8] lg:px-32'>
                    <div className='  bg-gray-100 shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>

                        <BiDevices size={80}/>
                        <h2 className='text-xl font-aqum_2 text-center flex-wrap py-8 break-words'>Мультиплатформенность</h2>
                        <p className='text-center '>Rating доступен как на IOS, так и на Android. Во всех остальных случаях вы можете использовать Web версию.</p>

                    </div>
                    <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                        <HiCursorClick size={80}/>
                        <h2 className='text-2xl font-aqum_2 text-center py-8'>Понятный интерфейс</h2>
                        <p className='text-center'>Мы разработали интуитивный и простой интерфейс, к которому можно привыкнуть за минимальное количество времени.</p>

                    </div>
                    <div className='w-full  bg-gray-100 shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                        <BiSolidBox size={80}/>
                        <h2 className='text-2xl font-aqum_2 text-center py-8'>Единное хранилище</h2>
                        <p className='text-center '>Все ваши дипломы, грамоты, сертификаты хранятся в удобной, структурированной форме.</p>


                    </div>
                    <div className='w-full  bg-gray-100 shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                        <LiaBrainSolid size={80}/>
                        <h2 className='text-2xl font-aqum_2 text-center py-8'>Искусственный интеллект</h2>
                        <p className='text-center '>ИИ укажет вам наиболее выгодный грамоты, подскажет с выбором ВУЗа, поможет составить текст-самопрезентацию, порекомендует вам олимпиады и конкурсы исходя из ваших интересов.</p>


                    </div>
                    <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                        <MdWorkOutline size={80}/>
                        <h2 className='text-2xl font-aqum_2 text-center py-8'>Профориентация</h2>
                        <p className='text-center '> На основе  ваших интересов и предпочтений мы предоставим вам наиболее интересные для вас профессии.</p>


                    </div>
                    <div className='w-full bg-gray-100  shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                        <TbDeviceAnalytics size={80}/>
                        <h2 className='text-2xl font-aqum_2 text-center py-8'>Анализ портфолио</h2>
                        <p className='text-center'>Предоставим вам полный анализ ваших достижений. Также вы можете выгрузить ваше портфолио в формате PDF</p>

                    </div>
                </div>



            </div>
        );
    }
}

export default Techs;