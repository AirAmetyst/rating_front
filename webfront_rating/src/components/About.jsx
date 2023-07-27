import React, {Component} from 'react';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());
class About extends Component {

    render() {

        return (
            <div id = 'about' className='w-full bg-D5C0F0 py-16  flex justify-center items-center'>
                <div className='max-w-[1920px] grid '>

                    <div className='py-16 flex flex-col justify-center m-64 '>
                        <h1 className='md:text-5xl  sm:text-4xl text-3xl font-aqum_2 py-2 text-center ' >Rating - что это?</h1>
                        <p className="text-center font-aqum text-gray-400 md:text-2xl sm:text-xl">
                            Сейчас все расскажем
                        </p>


                    </div>


                </div>



            </div>




        );
    }
}

export default About;