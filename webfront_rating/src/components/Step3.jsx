import React, {Component} from 'react';
import rating from "../assets/images/rating.png"

class Step1 extends Component {
    render() {
        return (
            <div className='w-full bg-white py-16 px-4 flex justify-center items-center  '>
                <div className='max-w-[1920px] flex flex-col 2xl:flex-row'>
                    <div className=' flex flex-col justify-center '>
                        <img src={rating} width={1500} alt =  "Картинка рейтинг"></img>
                    </div>
                    <div className=' flex flex-col justify-center '>
                        <h1 className='md:text-5xl sm:text-4xl text-2xl font-aqum_2 py-2 text-center ' >Покоряйте новые высоты</h1>
                        <p className="text-center font-aqum_2 text-gray-400 md:text-2xl sm:text-xl lg:px-96">
                            За ваши достижения вы получаете очки Rating.
                            Вы можете наблюдать за своими друзьям по школе и ребятами с города.
                            Здоровая конкуренция - ключ к совершенствованию.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Step1;