import React from "react";
import Dropdown from "./Dropdown";
import Logo from './imagenes/Free_Sample_By_Wix.jpg'

export default function Nav(){

  
  return(
    <div className="
    bg-[#00B9AE] flex flex-wrap content-center justify-center 
    w-screen h-17 border-[#222222]  border-b-4 
    md:h-20
    lg:h-20 lg:border-b-8
    2xl:h-24
    3xl:h-32">
      
        <a
        href={'/'} 
        className="flex flex-wrap content-center justify-center mt-2 mb-2 w-20">
          <img  className="
          rounded-full h-10 w-10  
          md:h-14 md:w-14 
          lg:h-[4.4rem] lg:w-[4.4rem] lg:mt-0
          2xl:h-[5.4rem] 2xl:w-[5.4rem]
          3xl:h-[7.2rem] 3xl:w-[7.2rem]" src={Logo} alt="Logo" />
        </a>
    
      <h1 className="
      font-['Forum'] text-[#222222] 
      flex flex-wrap content-center justify-center
      text-base font-bold w-[60%] 
      md:text-4xl 
      lg:w-[40%] lg:static lg:mt-0
      2xl:text-5xl
      3xl:text-6xl
      ">Sixto Tulio Mendoza Garcia</h1>
      
      <Dropdown/>
  </div>
  )}
