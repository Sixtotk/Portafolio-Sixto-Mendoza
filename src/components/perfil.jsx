import React from "react";
import Logo from "./imagenes/Mi_proyecto.png"
import Caracas from "./imagenes/084da16056f51d4be93754aafd8259ae.jpg"
import Sello from "./imagenes/f6b2c014e11dfbaa7b93319f8f7f9732.jpg"

export default function Perfil(){
  return(
    <div>
    <img className=" rounded-full w-96 h-96 absolute ml-12 mt-16 rotate-12 opacity-90 " src={Logo} alt="logo" />
    <div className="w-[550px] h-44 bg-gray-800 absolute flex mt-60 ml-[55rem] opacity-75 rounded-3xl"></div>
    <img className="flex absolute rotate-12 w-28 h-32 mt-80 ml-[85rem]" src={Sello} alt="sello"/>
    <h2 className="font-serif absolute font-bold mt-60 h-40 w-96 ml-[60rem] text-3xl text-stone-300">Hola, soy Sixto.</h2>
    <h3 className="font-serif absolute font-bold mt-72 h-40 w-96 ml-[60rem] text-xm text-stone-300">|| Full Stack Developer || <br/>Programador entusiasta y comprometido con el aprendizaje constante. <br/> VENEZUELA --- 1998 </h3> 
    <img className=" w-1600 h-550  border-gray-800 border-b-8" src={Caracas} alt="caracas"/>
    </div>
  )
}