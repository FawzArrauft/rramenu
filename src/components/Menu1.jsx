// import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Makanan from '../assets/img/menu1.png';

const Menu1 = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            {/* Header */}
            <h1 className="font-display2 text-[195px] text-[#FBC531] text-center">
                FLAVOR TASTE
            </h1>
            {/* Container teks dan ikon bintang */}
            <div className="-mt-5 grid grid-cols-5 gap-6 items-center">
                {/* Kolom 1 - Teks 1 dan Ikon Bintang 1 */}
                <div className="flex items-center flex-col col-start-2 mt-4">
                    <p className="flavortext">MANIS</p>
                    <span className="flex items-center justify-center gap-2">
                        <FontAwesomeIcon icon={faStar} size="3x" className="text-[#FBC531]" />
                        <FontAwesomeIcon icon={faStar} size="3x" className="text-[#FBC531]" />
                        <FontAwesomeIcon icon={faStar} size="3x" className="text-[#FBC531]" />
                    </span>
                </div>
                {/* Kolom 2 - Teks 2 dan Ikon Bintang 2 */}
                <div className="flex items-center flex-col mt-4">
                    <p className="flavortext">UMAMI</p>
                    <span className="flex items-center justify-center gap-2">
                        <FontAwesomeIcon icon={faStar} size="3x" className="text-[#FBC531]" />
                        <FontAwesomeIcon icon={faStar} size="3x" className="text-[#FBC531]" />
                        <FontAwesomeIcon icon={faStar} size="3x" className="text-[#FBC531]" />
                    </span>
                </div>
                {/* Kolom 3 - Teks 3 dan Ikon Bintang 3 */}
                <div className="flex items-center flex-col mt-4">
                    <p className="flavortext">ASAM</p>
                    <span className="flex items-center justify-center gap-2">
                        <FontAwesomeIcon icon={faStar} size="3x" className="text-[#FBC531]" />
                        <FontAwesomeIcon icon={faStar} size="3x" className="text-[#FBC531]" />
                        <FontAwesomeIcon icon={faStar} size="3x" className="text-[#FBC531]" />
                    </span>
                </div>
                {/* Kolom 3 - Teks 4 dan Ikon Bintang 3 */}
                <div className="flex items-center flex-col mt-4 col-start-2">
                    <p className="flavortext">ASIN</p>
                    <span className="flex items-center justify-center gap-2">
                        <FontAwesomeIcon icon={faStar} size="3x" className="text-[#FBC531]" />
                        <FontAwesomeIcon icon={faStar} size="3x" className="text-[#FBC531]" />
                        <FontAwesomeIcon icon={faStar} size="3x" className="text-[#FBC531]" />
                    </span>
                </div>
                {/* Kolom 3 - Teks 5 dan Ikon Bintang 3 */}
                <div className="flex items-center flex-col mt-4 col-start-4">
                    <p className="flavortext">PEDAS</p>
                    <span className="flex items-center justify-center gap-2">
                        <FontAwesomeIcon icon={faStar} size="3x" className="text-[#FBC531]" />
                        <FontAwesomeIcon icon={faStar} size="3x" className="text-[#FBC531]" />
                        <FontAwesomeIcon icon={faStar} size="3x" className="text-[#FBC531]" />
                    </span>
                </div>
            </div>
            {/* Container gambar */}
            <div className="mt-10">
                <img
                    src={Makanan}
                    alt="GambarMakanan"
                    className="max-w-4xl"
                />
            </div>
            <div className="mt-4 bg-gray-100 p-4 rounded">
                <div className="text-lg font-bold mb-4">Welcome to My Container!</div>
                <div className="text-sm mb-4">
                Here's a bit about the contents of this container. We have text,
                images, and other multimedia content that you can view.
                </div>
                <img
                src="https://via.placeholder.com/150"
                alt="Placeholder"
                className="mx-auto mb-4"
                />
                <div className="text-sm mb-4">
                In addition to text and images, you can also find code snippets
                and other programming-related content here.
                </div>
            </div>
        </div>
    );
}

export default Menu1;
