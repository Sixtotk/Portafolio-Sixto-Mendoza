import React from "react";
import Foto from "./imagenes/81501215_2450531651876861_4842882059271667712.jpg"
import { FaFileAlt, FaLinkedin } from 'react-icons/fa'

// import Caracas from "./imagenes/084da16056f51d4be93754aafd8259ae.jpg"
// import Sello from "./imagenes/f6b2c014e11dfbaa7b93319f8f7f9732.jpg"

export default function Perfil(){
  return(
    <div className="flex flex-wrap justify-center w-screen h-[90vh] bg-gradient-to-b from-[#F3EFE0] to-[#222222]">

      <div className="w-screen h-1/2 flex flex-wrap justify-center">

        <div className="
        flex flex-wrap justify-center
        lg:mr-40 lg:mt-20 lg:h-[7rem]
        2xl:h-[9rem]
        3xl:mr-40 3xl:mt-52 3xl:h-[11rem]">

          <a href={"https://www.linkedin.com/in/sixto-mendoza-orden/"} target="_blank" rel="noreferrer">
            <FaFileAlt className="
            lg:w-auto lg:h-[5rem]
            2xl:h-[7rem]
            3xl:h-[9rem]"/>
            <p className="
            flex flex-wrap justify-center
            font-['Forum'] text-[#222222] font-medium
            lg:mt-2 lg:text-lg
            2xl:text-xl
            3xl:text-2xl">
              CV
           </p>
          </a>

        </div>
        <img className="
        mt-4 rounded-full border-r-[10px] border-l-[10px] border-[#222222] 
        lg:w-64 lg:h-[23rem]
        xl:w-72 xl:h-[25rem]
        2xl:w-80 2xl:h-[27rem]
        3xl:w-96 3xl:h-[31rem]
          " 
        src={Foto} alt="Foto"/> 
        <div className="
        flex flex-wrap justify-center
        lg:ml-40 lg:mt-20 lg:h-[7rem]
        2xl:h-[9rem]
        3xl:ml-40 3xl:mt-52 3xl:h-[11rem]">

          <a href={"https://www.linkedin.com/in/sixto-mendoza-orden/"} target="_blank" rel="noreferrer">
            <FaLinkedin className="
            lg:w-auto lg:h-[5rem]
            2xl:h-[7rem]
            3xl:h-[9rem]"/>
            <p className="
            flex flex-wrap justify-center
            font-['Forum'] text-[#222222] font-medium
            lg:mt-2 lg:text-lg
            2xl:text-xl
            3xl:text-2xl">
              Linkedin
            </p>
          </a>

        </div>

      </div>
      <div className="w-full h-1/2 flex flex-wrap justify-center">
        <h2 className="
        font-['Forum'] text-[#F3EFE0] font-thin w-full
        lg:text-5xl lg:mt-20
        3xl:mt-28">Hola, Soy Sixto</h2>
        <h2 className="
        font-['Forum'] underline text-[#F3EFE0] font-thin w-full
        lg:text-6xl">FULL STACK DEVELOPER</h2>

      </div>
      
    </div>
  )}