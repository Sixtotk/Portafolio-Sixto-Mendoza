import React from "react";
import Nav from "../components/nav";
import Perfil from "../components/perfil";

export default function Page(){
  return(
    <div 
      className="bg-stone-300 border-gray-800 border-2 m-150px justify-items-center w-1600 h-1550"
    >
     <Nav/>
     <Perfil/>
      
    </div>
  )
}