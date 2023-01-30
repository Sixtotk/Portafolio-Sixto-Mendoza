import React from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Nav(){
  return(
    <div className="bg-gray-800 h-14 flex justify-center flex-wrap content-center absolute w-1597 opacity-75" >
      <h1 className=" w-1/2 font-bold font-serif text-5xl text-stone-300 whitespace-pre">Sixto   Tulio   Mendoza   García</h1>
      <div className="flex content-center w-20 static justify-between ml-4 mt-2">
        <a  className=" w-8" href={'https://github.com/Sixtotk'} target="_blank" rel="noreferrer"  ><FaGithub className=" rounded-full h-8 w-8 bg-stone-300"/></a>
        <a  className="w-8" href={'https://www.linkedin.com/in/sixto-tulio-mendoza-garcía-a7b5a51a4/'} target="_blank" rel="noreferrer"  ><FaLinkedin className="h-8 w-8 bg-stone-300"/></a>
      </div>    
    </div>
  )
}