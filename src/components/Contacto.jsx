import React from "react";

import { FaGithubSquare, FaLinkedin, FaWhatsappSquare} from 'react-icons/fa'

export default function Contacto(){
  return(
    <div className="w-screen h-auto flex flex-wrap content-center justify-center ">
      <div className="w-screen bg-gradient-to-b from-[#F3EFE0] to-[#434242] bg-[#434242] flex ">
        <div className="w-[50%] flex flex-wrap">
          <div className="w-full flex flex-wrap content-center justify-center">
            <h3 className="text-4xl font-['Forum'] text-[#222222] font-thin w-auto mt-10">Contacto</h3>
          </div>
          <div className="w-full mb-10">
            <h3 className="text-3xl font-['Forum'] text-justify text-[#222222] font-thin w-[60%] mt-6 ml-16 flex flex-wrap content-start justify-start">
            Correo: sixtoorden@gmail.com<br/>
            Telefono: +51 910 178 928<br/>
            Ubicacion: Lima, Peru
            </h3>
                     
            
            
            <div className="flex flex-wrap content-start justify-start mt-6 w-auto h-auto">
              <div className=" w-[3rem] ml-16">
              <a className="" href={"https://www.linkedin.com/in/sixto-mendoza-orden/"} target="_blank" rel="noreferrer"><FaLinkedin className="w-[3rem] h-[3rem]"/></a>
              </div>
              <div className=" w-[3rem] ml-10">
              <a className="" href={"https://github.com/Sixtotk"} target="_blank" rel="noreferrer" ><FaGithubSquare className="w-[3rem] h-[3rem] "/></a>
              </div>
              <div className=" w-[3rem] ml-10">
              <a className="" href={"https://api.whatsapp.com/send/?phone=%2B51902435668&text&type=phone_number&app_absent=0"} target="_blank" rel="noreferrer" ><FaWhatsappSquare className="w-[3rem] h-[3rem]"/></a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[50%]">
          <form className="w-[80%] flex flex-wrap content-start  mt-20">
            <input type="text" name="email" id="email" 
            className="block w-full pl-7 pr-12 h-10 mb-4 border-[#222222] border-2 bg-[#F3EFE0] text-[#222222]" placeholder="Email"></input>

            <input type="text" name="Nombre" id="Nombre" 
            className="block w-full  pl-7 pr-12 h-10 mb-4 bg-[#F3EFE0] border-[#222222] border-2 text-[#222222]" placeholder="Nombre"></input>

            <textarea type="text" name="Mensaje" id="Mensaje" 
            className=" w-full pt-4 pl-7 pr-12 h-28 mb-4 bg-[#F3EFE0] border-[#222222] border-2 text-[#222222]" placeholder="Mensaje"></textarea>
            
            <button type="submit" className="flex w-20 justify-center bg-[#222222] mb-4 py-2 px-4 text-sm font-medium font-['Forum'] text-[#F3EFE0] hover:bg-[#00B9AE] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Enviar
            </button>
          </form>
          
        </div>
           
      
      </div>
    </div>
  )
}