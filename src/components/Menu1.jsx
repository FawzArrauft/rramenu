import { faFileArchive, faStar, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import React from "react";
import Makanan1 from "../assets/img/menu1.png";
import Bahan1 from "../assets/img/cheese.jpeg";
import Bahan2 from "../assets/img/sauce.jpeg";
import Bahan3 from "../assets/img/tortila.jpeg";
import Icon from "../assets/img/mangi.png";
import { Link } from "react-router-dom";

const Menu1 = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState("");
  const [popupImage, setPopupImage] = useState("");
  const [popupTitle, setPopupTitle] = useState(""); // Menambahkan state untuk judul pop-up
  const [isFlavorTasteVisible, setFlavorTasteVisible] = useState(true);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const [showCircleButton, setShowCircleButton] = useState(true);

  const openPopup = (content, image, title, position) => {
    setPopupContent(content);
    setPopupImage(image);
    setPopupTitle(title); // Menetapkan judul pop-up
    setPopupPosition(position);
    setPopupOpen(true);
    setFlavorTasteVisible(false);
    setShowCircleButton(false);
  };

  const closePopup = () => {
    setPopupOpen(false);
    setFlavorTasteVisible(true);
    setShowCircleButton(true);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1
        className={`font-display2 text-[165px] my-0 text-[#FBC531] text-center align-baseline ${
          isFlavorTasteVisible ? "" : "hidden"
        }`}
      >
        FLAVOR TASTE !!
      </h1>
      <div
        className={`-mt-5 grid grid-cols-5 gap-8 items-center ${
          isFlavorTasteVisible ? "" : "hidden"
        }`}
      >
        <div className="flex items-center flex-col col-start-2 mt-4">
          <p className="flavortext">MANIS</p>
          <span className="flex items-center justify-center gap-2">
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#FBC531]" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#FBC531]" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#FBC531]" />
          </span>
        </div>
        <div className="flex items-center flex-col mt-4">
          <p className="flavortext">UMAMI</p>
          <span className="flex items-center justify-center gap-2">
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#FBC531]" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#FBC531]" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#FBC531]" />
          </span>
        </div>
        <div className="flex items-center flex-col mt-4">
          <p className="flavortext">ASAM</p>
          <span className="flex items-center justify-center gap-2">
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#FBC531]" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#FBC531]" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#FBC531]" />
          </span>
        </div>
        <div className="flex items-center flex-col mt-4 col-start-2">
          <p className="flavortext">ASIN</p>
          <span className="flex items-center justify-center gap-2">
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#FBC531]" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#FBC531]" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#FBC531]" />
          </span>
        </div>
        <div className="flex items-center flex-col mt-4 col-start-4">
          <p className="flavortext">PEDAS</p>
          <span className="flex items-center justify-center gap-2">
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#FBC531]" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#FBC531]" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#FBC531]" />
          </span>
        </div>
      </div>
      <div className="mt-10 relative">
        {isPopupOpen && (
          <div className="flex flex-col">
            <div className="flex items-center bg-stone-200 border border-black shadow-md shadow-gray-400 p-5 rounded-xl w-[1000px]">
              <div className="mr-10">
                <img
                  src={popupImage}
                  alt="Gambar Popup"
                  className="max-w-[200px] rounded-xl shadow"
                />
              </div>
              <div className="p-3">
                <h3 className="text-3xl font-bold mb-10">{popupTitle}</h3> {/* Menampilkan judul pop-up */}
                <p className="text-2xl font-keterangan">{popupContent}</p>
                <button
                  onClick={closePopup}
                  className="absolute top-0 right-0 p-2 text-gray-600 hover:text-red-500"
                >
                  <FontAwesomeIcon icon={faTimes} size="2x" />
                </button>
              </div>
            </div>
            <h1 className="mt-5 font-display2 text-[120px] text-[#FBC531] text-center">
              INGRIDIENT
            </h1>
          </div>
        )}

        {showCircleButton && !isPopupOpen && (
          <div className="absolute">
            <button
              className="btnketerangan top-[350px] left-[250px]"
              onClick={() =>
                openPopup(
                  "Keju yang dilelehkan hingga creamy dan gurihnya meleleh di mulut",
                  Bahan1,
                  "Cheese Sauce" // Menetapkan judul pop-up
                )
              }
            >
            </button>
            <button
              className="btnketerangan top-[170px] left-[310px]"
              onClick={() =>
                openPopup(
                  "Campuran segar dengan tomat cincang, bawang bombay, garam, air jeruk nipis, gula, dan jeruk nipis yang berasal dari petani lokal di Bandung.",
                  Bahan2,
                  "Pico de Gallo" // Menetapkan judul pop-up
                )
              }
            >
            </button>
            <button
              className="btnketerangan top-[110px] left-[150px]"
              onClick={() =>
                openPopup(
                  "Keripik tortilla yang ciptakan dari jagung segar, memberikan rasa renyah dan autentik.",
                  Bahan3,
                  "Tortilla Chip" // Menetapkan judul pop-up
                )
              }
            >
            </button>
          </div>
        )}

        {isPopupOpen ? (
          <div className="absolute">
            <button
              className="btnketerangan top-[350px] left-[420px]"
              onClick={() =>
                openPopup(
                    "Keju yang dilelehkan hingga creamy dan gurihnya meleleh di mulut",
                    Bahan1,
                    "Cheese Sauce" // Menetapkan judul pop-up
                )
              }
            >
            </button>
            <button
              className="btnketerangan top-[170px] left-[470px]"
              onClick={() =>
                openPopup(
                    "Campuran segar dengan tomat cincang, bawang bombay, garam, air jeruk nipis, gula, dan jeruk nipis yang berasal dari petani lokal di Bandung.",
                    Bahan2,
                    "Pico de Gallo" // Menetapkan judul pop-up
                )
              }
            >
            </button>
            <button
              className="btnketerangan top-[110px] left-[310px]"
              onClick={() =>
                openPopup(
                    "Keripik tortilla yang ciptakan dari jagung segar, memberikan rasa renyah dan autentik.",
                    Bahan3,
                    "Tortilla Chip" // Menetapkan judul pop-up
                )
              }
            >
            </button>
          </div>
        ) : null}
        <div className="flex flex-col justify-center items-center">
          <img
            src={Makanan1}
            alt="GambarMakanan"
            className="max-w-2xl justify-center items-center"
          />
        </div>
      </div>
      <div className="text-center mb-10">
        <h1 className="font-foodname text-white text-7xl">
          CHESSY NACHO DELIGHT
        </h1>
        <h2 className="font-foodname text-[#FBC531] text-5xl">
          crispy tortilla chips
          <p>with a delicious cheese sauce</p>
        </h2>
      </div>
      <div className="mt-4 bg-[#FA983A] p-5 pb-10 rounded w-[800px]">
        <div className="text-5xl font-keterangan mb-7 text-end">#FOOD_FACT
          <div className="absolute transform -translate-x-14 -translate-y-24">
            <img
              src={Icon}
              alt="Icon"
              className="max-w-[125px]"
            />
          </div>
        </div>
        <div className="text-2xl font-keterangan text-center mb-4">
          Nacho adalah hidangan asli Meksiko yang sederhana, terdiri dari keripik tortilla yang disiram dengan saus keju.
        </div>
      </div>
      <div className="mt-16 mb-5 flex justify-between items-center gap-52">
        <Link to={"/"}>
            <button className="bg-yellow-500 hover:bg-orange-700 px-6 py-2.5 rounded-full flex flex-row gap-5">
            <FontAwesomeIcon icon={faFileArchive} size="3x" className="justify-center items-center text-center" />
            <h1 className="text-black text-6xl font-buttontext">MENU</h1>
            </button>
        </Link>
        <button className="bg-yellow-500 hover-bg-orange-700 px-6 py-2 rounded-full flex flex-row gap-2">
          <FontAwesomeIcon icon={faCircleArrowRight} size="3x" className="justify-center items-center" />
          <h1 className="text-black text-6xl font-buttontext">NEXT</h1>
        </button>
      </div>
    </div>
  );
};

export default Menu1;
