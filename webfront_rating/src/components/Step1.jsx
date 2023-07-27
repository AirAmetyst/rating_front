import React, {Component} from 'react';
import profiles from "../assets/images/profiles.png"

class Step1 extends Component {
    render() {
        return (
            <div className='w-full bg-white py-16 px-4 flex justify-center items-center '>
                <div className= "max-w-[1920px] flex flex-col 2xl:flex-row">
                    <div className=' px-10  justify-center' >
                        <img src={profiles} width={1500}   alt =  "Картинка профилей"></img>
                    </div>


                    <div className=' flex flex-col justify-center   '>
                        <h1 className='md:text-5xl sm:text-4xl text-2xl font-aqum_2 py-2 text-center  ' >Легко начать</h1>
                        <p className="text-center font-aqum_2 text-gray-400 md:text-2xl sm:text-xl  md:px-64">
                            Зарегистрируйтесь и получите ваш личный профиль. В нем отразите вашу душу:что вы любите, что вам нравится?
                            Ваши достижения хранятся в специальном отделе, отсортированные по группам.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Step1;