import React from "react";
import Foto from "./imagenes/81501215_2450531651876861_4842882059271667712.jpg"
import { FaFileAlt, FaLinkedin } from 'react-icons/fa'

// import Caracas from "./imagenes/084da16056f51d4be93754aafd8259ae.jpg"
// import Sello from "./imagenes/f6b2c014e11dfbaa7b93319f8f7f9732.jpg"

export default function Perfil(){
  return(
    <div className="flex flex-wrap justify-center w-full">
      <div className="w-[25%] flex flex-wrap justify-center">
        <div className="flex flex-wrap justify-center content-center w-44 bg-[#F3EFE0] h-[25rem] rounded-br-[100px] rounded-bl-[100px]  border-r-8 border-l-8 border-[#222222]">
          <a className="" href={"https://www.linkedin.com/in/sixto-mendoza-orden/"} target="_blank" rel="noreferrer"><FaLinkedin className="w-[5rem] h-[5rem]"/><p className=" mt-4 text-ml font-['Forum'] text-[#434242] font-medium">Linkedin</p></a>
        </div>
      </div>

      <div className="flex flex-wrap justify-center w-50 bg-[#434242] h-780 rounded-br-[100px] rounded-bl-[100px]  border-r-8 border-l-8 border-[#F3EFE0]">
        <div className="flex flex-wrap justify-center w-full">
          <div className="w-[50%] flex flex-wrap justify-center">
            <div className="flex flex-wrap justify-center w-72 bg-[#222222] h-[23rem] rounded-br-[100px] rounded-bl-[100px]  border-r-8 border-l-8 border-[#F3EFE0] ">
              <img className="w-72 h-80 mt-[3rem] rounded-[100px]" src={Foto} alt="Foto"></img>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-wrap justify-center">
          <h2 className="text-5xl font-['Forum'] text-[#F3EFE0] font-thin w-full mt-[-80px]">Hola, Soy Sixto</h2>
          <h2 className="text-6xl font-['Forum'] underline text-[#F3EFE0] font-thin w-full mt-[-80px]">FULL STACK DEVELOPER</h2>
        </div>
      </div>

      <div className="w-[25%] flex flex-wrap justify-center">
        <div className="flex flex-wrap justify-center content-center w-44 bg-[#F3EFE0] h-[25rem] rounded-br-[100px] rounded-bl-[100px]  border-r-8 border-l-8 border-[#222222]">
          <a className="" href={"https://drive.google.com/file/d/19vEQ2eAhs8MTdtAd_zjgQBOupxRwJPir/view?usp=sharing"} target="_blank" rel="noreferrer" ><FaFileAlt className="w-[5rem] h-[5rem]"/><p className="mt-4 text-ml font-['Forum'] text-[#434242] font-medium">Descargar CV</p></a>
        </div>
      </div>
    </div>
  )
}