import React from "react";
import Sixto from "../components/imagenes/sixto.png"
import Mandala from "../components/imagenes/image9.png"

export default function SobreMi(){
  return(
    <div className="
     w-screen h-auto border-y-4  border-[#CDA434] relative
    bg-[#00B9AE]
    lg:justify-start lg:w-[95%]
    lg:border-x-4  lg:mb-4
    ">
      

      <div className="flex flex-wrap justify-center content-center 
      lg:justify-start lg:px-8">
        <div className="w-full flex flex-wrap justify-center content-center lg:justify-start">
          <h3 className="
          font-mono text-[#F3EFE0] font-bold 
          border-b-4 border-[#222222] border-dashed
          mt-4
          text-xl
          lg:mt-10 lg:text-3xl
          ">
            Sobre mí
          </h3>
        </div>
        <h4 className="
        text-center font-serif text-[#222222] font-medium tracking-widest text-sm
        mt-10 mb-10 w-[90%] p-4 
        bg-[#F3EFE0] border-4 border-[#222222] border-dashed
        lg:my-14 lg:ml-8 lg:w-[55%] lg:text-justify
        xl:text-base
        2xl:text-2xl 2xl:w-[60%]
        ">
        
        Soy un desarrollador web Full Stack con experiencia en diversos sectores laborales como logística, atención al cliente y capacitación laboral, entre otros. Esta diversidad me ha brindado la oportunidad de desarrollar habilidades clave como adaptabilidad, creatividad, resolución de problemas, trabajo en equipo, comunicación y autonomía.<br/><br/>

        Además, cuento con sólidos conocimientos en metodologías ágiles, Git, estructura de datos, algoritmos y frameworks. Tengo experiencia en el desarrollo tanto del Frontend como del Backend utilizando tecnologías como Node.js, React, Typescript, Redux, PostgreSQL y otras herramientas.    
        </h4>
      </div>
      
      
      
        <a
        href="https://drive.google.com/file/d/1r-rdCfHUavcNa3z1OdygmGDltF5TqHSi/view?usp=sharing" target="_blank" rel="noreferrer"
        className="h-10 w-56 lg:absolute lg:top-12 lg:right-20
        ">
          <button className="
          text-base font-mono text-[#222222] font-bold
          bg-[#F3EFE0] border-2 border-[#222222] border-dashed 
           h-10 w-56 mb-8
           sm:h-12
          ">
            Currículum
          </button>
        </a>
        
        <img  className="
          hidden absolute bottom-0 right-0 z-10 
          lg:flex lg:h-[350px] 2xl:h-[450px]" src={Sixto} alt="Logo" />
          <img  className="
          hidden absolute  bottom-0  right-0 z-0 
          lg:h-[360px] lg:flex  2xl:h-[450px] " src={Mandala} alt="Logo" />
      </div>
  )
}