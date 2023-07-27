import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import release_art from '../assets/images/release_art.png'

function App() {
    const slides = [
        {
            src: release_art,
            text:"ДНИ СТАНОВЯТСЯ КОРОЧЕ, НОЧИ ДЛИНЕЕ, ПРИБЛИЖАЕТСЯ ТЕМНАЯ ШКОЛЬНАЯ ПОРА, НАПОЛНЕННАЯ РАЗНООБРАЗНЫМИ ОЛИМПИАДАМИ. В ДЕНЬ ЕЕ НАЧАЛА, ДЕНЬ ЗНАНИЙ, МЫ ПЛАНИРУЕМ ВЫПУСТИТЬ RATING!"
        },


    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className='max-w-[1240px] h-[500px] sm:h-[800px]  md:h-[900px] w-full m-auto py-16 px-4 relative group bg-[#FDF63C]  '>

            <div className='  max-w-[1240px] w-full h-full rounded-2xl bg-center bg-cover duration-500 bg-white font-aqum_2 flex flex-col'>
                <h2 className= "text-xl sm:text-3xl text-center py-4">
                    НОВОСТИ
                </h2>

                <div className= "flex flex-col items-center py-8">
                    <div className= " w-[250px] sm:w-[400px] md:w-[700px] border-double border-8 border-black">
                        <img src = {slides[currentIndex].src} alt= "release_news_image"></img>
                    </div>
                    <div className=" py-4 sm:py-16 text-center text-[10px] sm:text-[20px] w-[300px] sm:text-sm sm:w-[500px]">
                        {slides[currentIndex].text}
                    </div>

                </div>
            </div>

            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>

            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className='text-2xl cursor-pointer'
                    >
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;