import React from 'react';
import Heroimage from '../assets/img/nachos.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Homepagemenu = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-[175px] text-white font-display text-center">NEW ARRIVAL !</h1>
            <h2 className="text-[145px] text-[#FBC531] font-display2 text-center -my-5">CHEESE NACHOS DELIGHT</h2>
            <div className="bg-blue-500 rounded-full w-[750px] h-[750px] my-28 relative">
                <img
                    src={Heroimage}
                    alt="Gambar"
                    className="rounded-full max-w-full max-h-full"
                />
                <div className="absolute top-1/2 left-14 transform -translate-x-10 translate-y-32 w-[200px] h-[200px] bg-[#C23616] rounded-full">
                    <h1 className="top-1/2 transform translate-x-12 translate-y-3">
                        <p className='text-white text-8xl font-display2'>25%</p>
                        <p className='text-[#FBC531] text-8xl font-display2 -mt-2'>OFF</p>
                    </h1>
                </div>
            </div>
            <Link to={"/Menu1"}>
                <button className="bg-yellow-500 hover:bg-yellow-700 px-5 py-3 rounded-full flex flex-row gap-5">
                    <FontAwesomeIcon icon={faCircleArrowRight} size='7x' className='pb-2'/>
                    <h1 className='text-black text-9xl font-buttontext text-center'>TAP TO SEE MORE</h1>
                </button>
            </Link>
        </div>
    );
}

export default Homepagemenu;
