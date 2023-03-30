import React from "react";
import Foto from "./imagenes/67456402-60f9-489d-81b8-52e66ecafc25.png"
import { FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa'


export default function Perfil(){
  return(
    <div className="">

      <div className="w-screen flex flex-wrap justify-center">

        <img className="
        border-r-[4px] border-l-[4px] border-[#222222]
        rounded-br-[9rem] rounded-bl-[9rem]
        w-full h-[25rem] 
        " 
        src={Foto} alt="Foto"/> 

      </div>
      <div>

        <h2 className="
        font-['Forum'] text-[#222222] font-semibold
        text-xl mt-4 mb-2
        w-full
        ">Soy Sixto</h2>
        <h4 className="
        font-['Forum'] text-[#222222] font-semibold 
        text-2xl
        w-full
        ">Full Stack Web Developer</h4>

      </div>
      <div className="flex flex-wrap justify-around mt-5 mb-8">
        <FaWhatsapp className="w-8 h-auto text-[#222222]"/>
        <FaLinkedin className="w-8 h-auto text-[#222222]" />
        <FaGithub className="w-8 h-auto text-[#222222]"/>
      </div>
      
    </div>
  )}