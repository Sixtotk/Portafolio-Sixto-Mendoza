import React from "react";
import { FaLink, FaCode} from 'react-icons/fa'
import { SiPokemon } from "react-icons/si";
import { GiWineBottle } from "react-icons/gi";



export default function Proyectos(){
  return(

    <div className="w-full h-auto bg-[#00B9AE] flex flex-wrap justify-center">

      <h2 className="
      text-center font-['Forum'] text-[#222222] font-medium tracking-widest
      w-full
      text-xl mt-4 mb-4
      ">
        Proyectos
      </h2>
      <div className="
      flex flex-wrap justify-center
      bg-[#00B9AE]
      w-full 
      ">

        <div className=" 
        w-[30%] h-full flex flex-wrap justify-center ">

          <GiWineBottle className="w-[90%] h-auto text-[#222222] "/>
          <div className="w-full flex flex-wrap justify-center mt-2">

            <a className="
            w-[2rem]" 
            href={"https://github.com/Sixtotk/LaDionisiaBack-JS"} target="_blank" rel="noreferrer">

              <FaCode className="w-auto h-[2rem] text-[#222222]"/>

              <p className="
              flex flex-wrap justify-center
              mt-1 font-['Forum'] text-[#222222] font-medium
              text-sm 
              xl:text-base
              2xl:text-xl">
                Repositorio
              </p>

            </a>

          </div>
          <div className="w-full flex flex-wrap justify-center mt-2">

            <a className="
            w-[2rem]" 
            href={"https://la-dionisia-front.vercel.app"} target="_blank" rel="noreferrer">
              <FaLink className="w-auto h-[2rem] text-[#222222]"/>
              <p className="
              flex flex-wrap justify-center
              mt-1 font-['Forum'] text-[#222222font-medium
              text-sm 
              xl:text-base
              2xl:text-xl">
                Link
              </p>

            </a>

          </div>

        </div>
        <h3 className="
        h-auto font-['Forum'] text-justify text-[#222222] font-medium tracking-widest
        mt-4 mb-4 text-base w-[70%]
        lg:w-[80%] 
        lg:text-xl px-4 ">
          La Dionisia Wines<br/>
          Ene.2023<br/><br/>
          Página web de 'La Dionisia Wines)', quin-cluye una tienda en línea, una pasarela de pago con Stripe y PayPal, información sobre la empresa y sus productosasí como también un Newsletter
        </h3>

      </div>

      <div className="
      flex flex-wrap justify-center
      bg-[#00B9AE] border-b-4 border-[#222222]
      w-full 
      ">

        <div className=" 
        w-[30%] h-full flex flex-wrap justify-center ">

          <SiPokemon className="w-[90%] h-auto text-[#222222] "/>
          <div className="w-full flex flex-wrap justify-center mt-2">

            <a className="
            w-[2rem]" 
            href={"https://github.com/Sixtotk/PI_POKEMON-Sixto-Mendoza"} target="_blank" rel="noreferrer">

              <FaCode className="w-auto h-[2rem] text-[#222222]"/>

              <p className="
              flex flex-wrap justify-center
              mt-1 font-['Forum'] text-[#222222] font-medium
              text-sm 
              xl:text-base
              2xl:text-xl">
                Repositorio
              </p>

            </a>

          </div>
          <div className="w-full flex flex-wrap justify-center mt-2">

            <a className="
            w-[2rem]" 
            href={"https://pokemon-sixto.vercel.app"} target="_blank" rel="noreferrer">
              <FaLink className="w-auto h-[2rem] text-[#222222]"/>
              <p className="
              flex flex-wrap justify-center
              mt-1 font-['Forum'] text-[#222222font-medium
              text-sm 
              xl:text-base
              2xl:text-xl">
                Link
              </p>

            </a>

          </div>

        </div>
        <h3 className="
        h-auto font-['Forum'] text-justify text-[#222222] font-medium tracking-widest
        mt-4 mb-4 text-base w-[70%]
        lg:w-[80%] 
        lg:text-xl px-4 ">
          Pokémon App<br/>
          Oct.2022<br/><br/>
          Página web de Pokémons con búsquedas, filtros, ordenamientos y base de datos PostgreSQL. Utilicé React, Redux y CSS para el Frontend y Node.js, Express y Sequelize para el Backend
        </h3>

      </div>    

    </div>

  )}