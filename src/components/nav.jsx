import React from "react";
//import { FaBars, FaGithub, FaLinkedin } from 'react-icons/fa';
import Logo from './imagenes/Free_Sample_By_Wix.jpg'

const goTop = (e) => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const goSobre = (e) => {
  window.scrollTo({ top: 880, behavior: 'smooth' })
}
const goProyectos = (e) => {
  window.scrollTo({ top:1800, behavior: 'smooth' })
}
const goContacto = (e) => {
  window.scrollTo({ top: 2500, behavior: 'smooth' })
}

export default function Nav(){

  
  return(
    <div className="
    bg-[#F3EFE0] flex flex-wrap content-center
    border-[#F3EFE0] w-screen h-17 border-b-4 
    md:h-20
    lg:h-20 lg:border-b-8
    2xl:h-24
    3xl:h-32">

      <h1 className="
      font-['Forum'] text-[#222222] font-thin 
      flex flex-wrap content-center justify-center
      text-base w-full absolute mt-4
      md:text-4xl 
      lg:w-[40%] lg:static lg:mt-0
      2xl:text-5xl
      3xl:text-6xl
      ">Sixto Tulio Mendoza Garcia</h1>
      <div className="
      w-20 flex flex-wrap content-center justify-center
      lg:w-20">
        <button onClick={goTop}>
          <img  className="
          rounded-full h-10 w-10 mt-2
          md:h-16 md:w-16 md:mt-6
          lg:h-[4.4rem] lg:w-[4.4rem] lg:mt-0
          2xl:h-[5.4rem] 2xl:w-[5.4rem]
          3xl:h-[7.2rem] 3xl:w-[7.2rem]" src={Logo} alt="Logo" />
        </button>
      </div> 
      
      <div className="
      flex flex-wrap content-center justify-center w-full 
      lg:w-[40%]">
        
        <button onClick={goSobre} className="
        font-['Forum'] text-[#222222] font-medium mr-6 text-sm
        md:text-2xl
        lg:text-2xl lg:mr-8
        xl:text-3xl lx:mr-8
        2xl:text-4xl 2xl:mr-4
        3xl:text-5xl 3xl:mr-10" >Sobre mí</button>
        <button onClick={goProyectos} className="
        font-['Forum'] text-[#222222] font-medium mr-6 text-sm
        md:text-2xl
        lg:text-2xl lg:mr-8
        xl:text-3xl lx:mr-8
        2xl:text-4xl 2xl:mr-4
        3xl:text-5xl 3xl:mr-10">Proyectos</button>
        <button onClick={goContacto} className="
        font-['Forum'] text-[#222222] font-medium text-sm
        md:text-2xl
        lg:text-2xl lg:mr-8
        xl:text-3xl lx:mr-14
        2xl:text-4xl 2xl:mr-8
        3xl:text-5xl 3xl:mr-20">Contacto</button>
      
      </div>
  </div>
  )}
