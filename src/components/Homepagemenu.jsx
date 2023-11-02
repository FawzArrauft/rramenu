import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import MenuMakananImage from '../assets/img/menu1.png'; // Ganti dengan gambar yang sesuai

const Homepagemenu = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            {/* MENU MAKANAN */}
            <h1 className='font-display2 text-[200px] text-[#FBC531]'>
                MENU MAKANAN
            </h1>
                <div className="grid px-10 grid-cols-3 gap-4 items-center">
                    <Link to={'/Menu1'}>
                        <button className="bg-[#ff9f43] hover:bg-yellow-700 flex px-3 py-3 flex-row rounded-xl text-center justify-center items-center border-[3px]">
                            <img src={MenuMakananImage} alt="Menu Makanan" className="w-32 backdrop-blur-2xl" />
                            <p className="text-3xl text-black text-center font-foodname">CHESSY NACHO DELIGHT</p>
                        </button>
                    </Link>
                    <Link to={'/Menu2'}>
                        <button className="bg-[#ff9f43] hover:bg-yellow-700 flex px-3 py-3 flex-row rounded-xl text-center justify-center items-center border-[3px]">
                            <img src={MenuMakananImage} alt="Menu Makanan" className="w-32 backdrop-blur-2xl" />
                            <p className="text-3xl text-black text-center font-foodname">FRENCH FRIES CREAMY TARTAR SAUCE</p>
                        </button>
                    </Link>
                    <Link to={'/Menu3'}> 
                        <button className="bg-[#ff9f43] hover:bg-yellow-700 flex px-3 py-3 flex-row rounded-xl text-center justify-center items-center border-[3px]">
                            <img src={MenuMakananImage} alt="Menu Makanan" className="w-32 backdrop-blur-2xl" />
                            <p className="text-3xl text-black text-center font-foodname">TACO FIESTA PICO DE'GALLO</p>
                        </button>
                    </Link>
                </div>   
                <div className='mt-52 flex flex-col items-center justify-center'>
                    <h1 className='font-display2 text-[200px] text-[#FBC531]'>
                        MENU MINUMAN
                    </h1>
                    <div className="grid px-10 grid-cols-3 gap-4 items-center">
                    <Link to={'/Minuman1'}>
                        <button className="bg-[#ff9f43] hover:bg-yellow-700 flex px-3 py-3 flex-row rounded-xl text-center justify-center items-center border-[3px]">
                            <img src={MenuMakananImage} alt="Menu Makanan" className="w-32 backdrop-blur-2xl" />
                            <p className="text-3xl text-black text-center font-foodname">FRESH TAMARID TEA</p>
                        </button>
                    </Link>
                    <Link to={'/Minuman2'}>
                        <button className="bg-[#ff9f43] hover:bg-yellow-700 flex px-3 py-3 flex-row rounded-xl text-center justify-center items-center border-[3px]">
                            <img src={MenuMakananImage} alt="Menu Makanan" className="w-32 backdrop-blur-2xl" />
                            <p className="text-3xl text-black text-center font-foodname">LEMONGRASS GINGER FUSION</p>
                        </button>
                    </Link>
                    </div>   
                </div>
        </div>
    );
}

export default Homepagemenu;
