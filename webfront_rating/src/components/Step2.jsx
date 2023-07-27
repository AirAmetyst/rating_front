import React, {Component} from 'react';
import diploma from "../assets/images/diploma.png"

class Step1 extends Component {
    render() {
        return (
            <div className='w-full bg-white py-16 px-4 flex justify-center items-center  '>



                <div className='max-w-[1920px]   flex  flex-col 2xl:flex-row'>'



                    <div className=' flex flex-col justify-center items '>
                        <h1 className='md:text-5xl sm:text-4xl text-2xl font-aqum_2 py-2 text-center  ' >Добавьте достижение</h1>
                        <p className="text-center  text-gray-400 md:text-2xl sm:text-xl font-aqum_2 sm:px-16">
                            Нажмите кнопку добавить достижение и просто загрузите изображения вашего диплома.
                            Остальное сделает Rating.
                        </p>

                    </div>
                    <div className=' flex flex-col justify-center '>
                        <img src={diploma} width={1500} alt =  "Картинка диплома"></img>
                    </div>

                </div>
            </div>
        );
    }
}

export default Step1;