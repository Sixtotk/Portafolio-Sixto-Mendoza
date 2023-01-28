import React from "react";

import { FaGithub } from 'react-icons/fa';


export default function Nav(){
  return(
    <div className="bg-gray-800 h-10" >
      <p className="font-serif text-3xl text-stone-300 whitespace-pre">S i x t o   T u l i o   M e n d o z a   G a r c í a</p>
      <a className="bg-white" href={'https://github.com/Sixtotk'} target="_blank" rel="noreferrer"  ><FaGithub className=" bg-white"/></a>
      
    </div>
  )
}