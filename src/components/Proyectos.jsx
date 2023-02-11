import React from "react";
import Poke from "./imagenes/1665712306249.jpg"
import Dionisia from "./imagenes/Captura de pantalla 2023-02-05 193315.png"
import { FaLink, FaCode } from 'react-icons/fa'


export default function Proyectos(){
  return(
    <div className="w-full h-auto bg-[#222222]">
      <div className="
      flex flex-wrap justify-center content-center
      bg-[#222222]  border-b-8 border-[#F3EFE0] 
      w-full ">

        <h2 className="
        text-justify font-['Forum'] text-[#F3EFE0] font-medium tracking-widest mt-6 mb-6
        lg:text-3xl 
        2xl:text-4xl
        3xl:text-5xl
        ">Proyectos
        </h2>

      </div>
      <div className="
      flex flex-wrap justify-center
      ">

        <div className="
        flex flex-wrap justify-center
        w-1/2 ">

          <div className="
          flex flex-wrap justify-center
          bg-[#F3EFE0] 
          w-[70%] ">
            <div className="
            w-full flex flex-wrap justify-center 
            mt-6">
              <a href={"https://pokemon-sixto.vercel.app"} target="_blank" rel="noreferrer">
                <img className="
                border-4 border-[#222222] rounded-full
                w-[200px] h-[200px]" src={Poke} alt="pokemons"/>
              </a>
            </div>
            <h3 className="
            h-auto text-xl font-['Forum'] text-[#222222] font-medium
            w-[80%] mt-10 ">
              Proyecto Individual(#SoyHenry)<br/>
              Pokémon App (13/10/2022)<br/><br/>
              Tecnologías usadas: React, Redux, CSS, Node.js, Express, PostgreSQL y Sequelize.
            </h3>
            <div className="flex flex-wrap justify-between
            w-[40%] mt-10 mb-32">
              <a className="
              flex flex-wrap justify-center
              w-[2rem] " 
                href={"https://github.com/Sixtotk/PI_POKEMON-Sixto-Mendoza"} target="_blank" rel="noreferrer">
                  <FaCode className="w-auto h-[2rem]"/>
                  <p className="
                  mt-4 font-['Forum'] text-[#222222] font-medium
                  lg:text-sm 
                  xl:text-base
                  2xl:text-xl">
                  Repositorio
                  </p>
                </a>
                <a className="w-[2rem] flex flex-wrap justify-center" href={"https://pokemon-sixto.vercel.app"} target="_blank" rel="noreferrer"><FaLink className="w-auto h-[2rem]"/>
                  <p className="
                  mt-4 font-['Forum'] text-[#222222] font-medium
                  lg:text-sm 
                  xl:text-base
                  2xl:text-xl">
                    Link
                  </p>
                </a>
              </div>

            </div>
          </div>

          <div className="w-1/2 flex flex-wrap justify-center">
            <div className="w-[70%] flex flex-wrap justify-center bg-[#F3EFE0]">
              <div className="w-full flex flex-wrap justify-center mt-6">
                <a href={"https://la-dionisia-front.vercel.app"} target="_blank" rel="noreferrer">
                  <img className=" w-[200px] h-[200px] border-4 border-[#222222] rounded-full" src={Dionisia} alt="pokemons"/>
                </a>
              </div>
              <h3 className="w-[80%] mt-10 h-auto text-xl font-['Forum'] text-[#222222] font-medium">Proyecto Final(#SoyHenry)<br/>
                        La Dionisia Wines (27/01/2023)<br/><br/>
                        Tecnologías usadas: TypeScript, Next.js, Redux, Tailwind_Css, Node.js, Express, PostgreSQL, Sequelize y Scrum.
              </h3>
              <div className="flex flex-wrap justify-between w-[50%] mt-10 mb-28">
                <a className="w-[2rem] flex flex-wrap justify-center" 
                href={"https://github.com/Sixtotk/LaDionisiaBack-JS"} target="_blank" rel="noreferrer">
                  <FaCode className="w-auto h-[2rem]"/>
                  <p className="
                  mt-4 font-['Forum'] text-[#222222] font-medium
                  lg:text-sm 
                  xl:text-base
                  2xl:text-xl">
                  Repositorio Back
                  </p>
                </a>
                <a className="w-[2rem] flex flex-wrap justify-center" 
                href={"https://github.com/laura-e24/LaDionisiaFront"} target="_blank" rel="noreferrer">
                  <FaCode className="w-auto h-[2rem]"/>
                  <p className="
                  mt-4 font-['Forum'] text-[#222222] font-medium
                  lg:text-sm 
                  xl:text-base
                  2xl:text-xl">
                  Repositorio Front
                  </p>
                </a>
                <a className="w-[2rem] flex flex-wrap justify-center" href={"https://la-dionisia-front.vercel.app"} target="_blank" rel="noreferrer"><FaLink className="w-auto h-[2rem]"/>
                  <p className="
                  mt-4 font-['Forum'] text-[#222222] font-medium
                  lg:text-sm 
                  xl:text-base
                  2xl:text-xl">
                    Link
                  </p>
                </a>
              </div>
            </div>
          </div>
      </div>
    </div>
   

  )}