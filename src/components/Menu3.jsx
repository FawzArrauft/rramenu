import { faFileArchive, faStar as solidStar, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
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

const Menu3 = () => {
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
        className={`-mt-5 grid grid-cols-5 gap-14 items-center ${
          isFlavorTasteVisible ? "" : "hidden"
        }`}
      >
        <div className="flex items-center flex-col col-start-2 mt-4">
          <p className="flavortext">MANIS</p>
          <span className="flex items-center justify-center gap-1">
            <FontAwesomeIcon icon={solidStar} size="2x" className="text-[#FBC531]" />
            <FontAwesomeIcon icon={solidStar} size="2x" className="text-[#FBC531]" />
            <FontAwesomeIcon icon={regularStar} size="2x" className="text-[#FBC531]" />
            <FontAwesomeIcon icon={regularStar} size="2x" className="text-[#FBC531]" />
            <FontAwesomeIcon icon={regularStar} size="2x" className="text-[#FBC531]" />
          </span>
        </div>
        <div className="flex items-center flex-col mt-4">
          <p className="flavortext">UMAMI</p>
          <span className="flex items-center justify-center gap-1">
            <FontAwesomeIcon icon={solidStar} size="2x" className="text-[#FBC531]" />
            <FontAwesomeIcon icon={solidStar} size="2x" className="text-[#FBC531]" />
            <FontAwesomeIcon icon={regularStar} size="2x" className="text-[#FBC531]" />
            <FontAwesomeIcon icon={regularStar} size="2x" className="text-[#FBC531]" />
            <FontAwesomeIcon icon={regularStar} size="2x" className="text-[#FBC531]" />
          </span>
        </div>
        <div className="flex items-center flex-col mt-4">
          <p className="flavortext">ASAM</p>
          <span className="flex items-center justify-center gap-1">
            <FontAwesomeIcon icon={solidStar} size="2x" className="text-[#FBC531]" />
            <FontAwesomeIcon icon={solidStar} size="2x" className="text-[#FBC531]" />
            <FontAwesomeIcon icon={solidStar} size="2x" className="text-[#FBC531]" />
            <FontAwesomeIcon icon={solidStar} size="2x" className="text-[#FBC531]" />
            <FontAwesomeIcon icon={regularStar} size="2x" className="text-[#FBC531]" />
          </span>
        </div>
        <div className="flex items-center flex-col mt-4 col-start-2">
          <p className="flavortext">ASIN</p>
          <span className="flex items-center justify-center gap-1">
            <FontAwesomeIcon icon={solidStar} size="2x" className="text-[#FBC531]" />
            <FontAwesomeIcon icon={solidStar} size="2x" className="text-[#FBC531]" />
            <FontAwesomeIcon icon={solidStar} size="2x" className="text-[#FBC531]" />
            <FontAwesomeIcon icon={solidStar} size="2x" className="text-[#FBC531]" />
            <FontAwesomeIcon icon={regularStar} size="2x" className="text-[#FBC531]" />
          </span>
        </div>
        <div className="flex items-center flex-col mt-4 col-start-4">
          <p className="flavortext">PEDAS</p>
          <span className="flex items-center justify-center gap-1">
            <FontAwesomeIcon icon={solidStar} size="2x" className="text-[#FBC531]" />
            <FontAwesomeIcon icon={solidStar} size="2x" className="text-[#FBC531]" />
            <FontAwesomeIcon icon={solidStar} size="2x" className="text-[#FBC531]" />
            <FontAwesomeIcon icon={solidStar} size="2x" className="text-[#FBC531]" />
            <FontAwesomeIcon icon={regularStar} size="2x" className="text-[#FBC531]" />
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
                  "Roti pipih lembut yang terbuat dari jagung, memberikan dasar yang sempurna untuk sajian taco.",
                  Bahan1,
                  "Corn Tortilla" // Menetapkan judul pop-up
                )
              }
            >
            </button>
            <button
              className="btnketerangan top-[280px] left-[310px]"
              onClick={() =>
                openPopup(
                  "Daging sapi panggang yang menggoda dengan cita rasa yang tajam dan gurih.",
                  Bahan2,
                  "Beef Gril" // Menetapkan judul pop-up
                )
              }
            >
            </button>
            <button
              className="btnketerangan top-[200px] left-[550px]"
              onClick={() =>
                openPopup(
                  "Krim asam yang telah mengalami proses fermentasi dengan bakteri asam laktik, memberikan kelezatan dan tekstur unik.",
                  Bahan2,
                  "Sour Cream" // Menetapkan judul pop-up
                )
              }
            >
            </button>
            <button
              className="btnketerangan top-[450px] left-[410px]"
              onClick={() =>
                openPopup(
                  "Selada segar yang ditanam di green house kami sendiri, memberikan kecrispyan pada setiap gigitan.",
                  Bahan2,
                  "Selada" // Menetapkan judul pop-up
                )
              }
            >
            </button>
            <button
              className="btnketerangan top-[170px] left-[310px]"
              onClick={() =>
                openPopup(
                  "Campuran tomat cincang, bawang bombay, dengan sentuhan garam, gula, dan air jeruk nipis yang segar.",
                  Bahan2,
                  "Pico de Gallo" // Menetapkan judul pop-up
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
                "Roti pipih lembut yang terbuat dari jagung, memberikan dasar yang sempurna untuk sajian taco.",
                Bahan1,
                "Corn Tortilla" // Menetapkan judul pop-up
              )
            }
          >
          </button>
          <button
            className="btnketerangan top-[280px] left-[475px]"
            onClick={() =>
              openPopup(
                "Daging sapi panggang yang menggoda dengan cita rasa yang tajam dan gurih.",
                Bahan2,
                "Beef Gril" // Menetapkan judul pop-up
              )
            }
          >
          </button>
          <button
            className="btnketerangan top-[200px] left-[710px]"
            onClick={() =>
              openPopup(
                "Krim asam yang telah mengalami proses fermentasi dengan bakteri asam laktik, memberikan kelezatan dan tekstur unik.",
                Bahan2,
                "Sour Cream" // Menetapkan judul pop-up
              )
            }
          >
          </button>
          <button
            className="btnketerangan top-[450px] left-[570px]"
            onClick={() =>
              openPopup(
                "Selada segar yang ditanam di green house kami sendiri, memberikan kecrispyan pada setiap gigitan.",
                Bahan2,
                "Selada" // Menetapkan judul pop-up
              )
            }
          >
          </button>
          <button
            className="btnketerangan top-[170px] left-[470px]"
            onClick={() =>
              openPopup(
                "Campuran tomat cincang, bawang bombay, dengan sentuhan garam, gula, dan air jeruk nipis yang segar.",
                Bahan2,
                "Pico de Gallo" // Menetapkan judul pop-up
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
        <h1 className="font-foodname text-white md:text-center text-7xl">
            TACO FIESTA 
        </h1>
        <h1 className="font-foodname text-white md:text-center text-7xl">
            with PICO DE GALLO
        </h1>
        <h2 className="font-foodname text-[#FBC531] text-5xl">
          The perfect combination, authentic taco beef  
          <p>fresh and appetizing touch of</p>
          <p>Mexico's signature Pico de Gallo </p>
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
        <div className="text-2xl font-keterangan text-justify mb-4">
            Taco adalah salah satu makanan khas Meksiko yang terdiri dari gulungan atau lipatan tortilla yang diisi dengan berbagai macam masakan lezat.
        </div>
      </div>
      <div className="mt-9 mb-5 flex justify-between items-center">
        <Link to={"/"}>
            <button className="bg-yellow-500 hover:bg-orange-700 px-6 py-2.5 rounded-full flex flex-row gap-5">
            <FontAwesomeIcon icon={faFileArchive} size="3x" className="justify-center items-center text-center" />
            <h1 className="text-black text-6xl font-buttontext">MENU</h1>
            </button>
        </Link>
      </div>
    </div>
  );
};

export default Menu3;