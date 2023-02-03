import React from "react";
// import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Logo from './imagenes/Free_Sample_By_Wix.jpg'

export default function Nav(){
  return(
    <div className="bg-[#F3EFE0] w-screen h-20 relative flex flex-wrap content-center ">
      <h1 className="text-6xl font-['Forum'] text-[#434242] font-thin w-2/5">Sixto Tulio Mendoza Garcia</h1>
      <div className="w-20 flex flex-wrap content-center justify-center">
      <img className="h-[4.6rem] w-[4.6rem] rounded-full" src={Logo} alt="Logo" />
      </div>
      <div className="flex flex-wrap content-center justify-end w-2/5">
      <h4 className="text-4xl font-['Forum'] text-[#434242] font-medium mr-8">Sobre mí</h4>
      <h4 className="text-4xl font-['Forum'] text-[#434242] font-medium mr-8">Proyectos</h4>
      <h4 className="text-4xl font-['Forum'] text-[#434242] font-medium mr-32">Contacto</h4>
      </div>
    </div>
  )
}