import React from "react";
import Henry from "./imagenes/68747470733a2f2f643331757a386c77666d796e38672e636c6f756466726f6e742e6e65742f4173736574732f6c6f676f2d68656e72792d77686974652d6c672e706e67.png"
import { FaJs, FaReact, FaNode, FaCircle } from 'react-icons/fa'
import { SiRedux, SiCss3, SiPostgresql, SiNextdotjs, SiTailwindcss } from "react-icons/si";


export default function Skill(){
  return(
    <div className="flex w-full h-auto mt-72 ">
    <div className="w-1/2 bg-[#F3EFE0] flex flex-wrap justify-center border-[#222222] border-t-8 rounded-tl-[100px]">
        <h2 className="text-4xl text-justify font-['Forum'] text-[#434242] font-medium tracking-widest mt-20 mb-4">
          Tech skill
        </h2>
        <div className="w-full h-auto flex flex-wrap justify-center content-between mt-12">
          <div className="w-[15%] flex flex-wrap justify-center">
            <a className="w-[4rem]" href={"https://developer.mozilla.org/es/docs/Web/JavaScript"} target="_blank" rel="noreferrer"><FaJs className="w-auto h-[4rem]"/>
              <p className=" mt-4 text-xl font-['Forum'] text-[#434242] font-medium">
              JavaScript
              </p>
            </a>
          </div>
          <div className="w-[15%] flex flex-wrap justify-center">
            <a className="w-[4rem]" href={"https://reactjs.org/docs/getting-started.html"} target="_blank" rel="noreferrer"><FaReact className="w-auto h-[4rem]" />
              <p className=" mt-4 text-xl font-['Forum'] text-[#434242] font-medium">
              React
              </p>
            </a>
          </div>
          <div className="w-[15%] flex flex-wrap justify-center">
            <a className="w-[4rem]" href={"https://redux.js.org/introduction/getting-started"} target="_blank" rel="noreferrer"><SiRedux className="w-auto h-[4rem]"/>
              <p className=" mt-4 text-xl font-['Forum'] text-[#434242] font-medium">
              Redux
              </p>
            </a>
          </div>
          <div className="w-[15%] flex flex-wrap justify-center">
            <a className="w-[4rem]" href={"https://developer.mozilla.org/en-US/docs/Web/CSS"} target="_blank" rel="noreferrer"><SiCss3 className="w-auto h-[4rem]"/>
              <p className=" mt-4 text-xl font-['Forum'] text-[#434242] font-medium">
              Css
              </p>
            </a>
          </div>
          <div className="w-[15%] flex flex-wrap justify-center">
            <a className="w-[4rem]" href={"https://nodejs.org/en/docs/"} target="_blank" rel="noreferrer"><FaNode className="w-auto h-[4rem]"/>
              <p className=" mt-4 text-xl font-['Forum'] text-[#434242] font-medium">
              Node.js
              </p>
            </a>
          </div>
        </div>
        <div className="w-full h-auto flex flex-wrap justify-center content-between mt-12 mb-14">
          <div className="w-[15%] flex flex-wrap justify-center">
            <a className="w-[4rem]" href={"https://www.postgresql.org/docs/"} target="_blank" rel="noreferrer"><SiPostgresql className="w-auto h-[4rem]"/>
              <p className=" mt-4 text-xl font-['Forum'] text-[#434242] font-medium">
              PostgreSQL
              </p>
            </a>
          </div>
          <div className="w-[15%] flex flex-wrap justify-center">
            <a className="w-[4rem]" href={"https://nextjs.org/docs/getting-started"} target="_blank" rel="noreferrer"><SiNextdotjs className="w-auto h-[4rem]" />
              <p className=" mt-4 text-xl font-['Forum'] text-[#434242] font-medium">
                Next.js
              </p>
            </a>
          </div>
          <div className="w-[15%] flex flex-wrap justify-center">
            <a className="w-[4rem]" href={"https://tailwindcss.com/docs/installation"} target="_blank" rel="noreferrer"><SiTailwindcss className="w-auto h-[4rem]"/>
              <p className=" mt-4 text-xl font-['Forum'] text-[#434242] font-medium">
              Tailwind
              </p>
            </a>
          </div>
        </div>
      </div>

      <div className="w-1/2 bg-[#222222] flex flex-wrap justify-center border-b-8 border-[#F3EFE0] rounded-br-[100px]">
        <div className="w-full flex flex-wrap justify-center">
          <h2 className="text-4xl text-justify font-['Forum'] text-[#F3EFE0] font-medium tracking-widest mt-20">
          Soft skill
          </h2>
        </div>
        <div className="w-full h-auto flex flex-wrap justify-center content-center ml-[45px] mb-4">
          <h4 className="w-full text-2xl text-justify font-['Forum'] text-[#F3EFE0] font-medium tracking-widest leading-relaxed">
            * Disponibilidad inmediata.<br/>
            * Responsabilidad y Puntualidad.<br/>
            * Adaptabilidad.<br/>
            * Resolución de problemas.<br/>
            * Trabajo en equipo.<br/>
            * Comunicacion.<br/>
            * Proactividad.<br/>
          </h4>
        </div>
        <div className="absolute">
          <img src={Henry} alt="henry" className="h-[150px] w-[250] mt-[350px] ml-[550px]"/>
        </div>
        
      </div>
      
    </div>
  )
}
