import React from "react";
import Henry from "./imagenes/68747470733a2f2f643331757a386c77666d796e38672e636c6f756466726f6e742e6e65742f4173736574732f6c6f676f2d68656e72792d77686974652d6c672e706e67.png"
import { FaJs, FaReact, FaNode} from 'react-icons/fa'
import { SiRedux, SiCss3, SiPostgresql, SiNextdotjs, SiTailwindcss } from "react-icons/si";




export default function Skill(){
  return(
    <div className="w-full h-auto lg:flex ">
    <div className="
    flex flex-wrap justify-center
    bg-[#00B9AE]
    w-full
    lg:w-1/2 lg:border-t-8 lg:border-[#434242]">
        <h2 className="
        text-[#222222] text-justify font-['Forum']  font-medium tracking-widest
        text-xl mt-4 mb-4
        lg:text-3xl  lg:mt-10 lg:mb-0
        2xl:text-4xl
        3xl:text-5xl">
          Tech skill
        </h2>
        <div className="w-full h-auto flex flex-wrap justify-center content-between 
        lg:mt-10">
          <div className="
          flex flex-wrap justify-center
          w-1/2 mb-4
          lg:w-[15%] lg:mb-0">
            <a className="
            w-8
            lg:w-[3rem]
            2xl:w-[4rem]
            3xl:w-[5rem]
            " href={"https://developer.mozilla.org/es/docs/Web/JavaScript"} target="_blank" rel="noreferrer">
              <FaJs className="
              w-auto h-8
              lg:h-[3rem]
              2xl:h-[4rem]
              3xl:h-[5rem]"/>
              <p className="
              flex flex-wrap justify-center
              font-['Forum'] text-[#222222] font-medium
              lg:mt-2 lg:text-base
              2xl:text-lg
              3xl:text-xl">
              JavaScript
              </p>
            </a>
          </div>
          <div className="
          flex flex-wrap justify-center
          w-1/2 mb-4
          lg:w-[15%] lg:mb-0">
            <a className="
            w-8
            lg:w-[3rem]
            2xl:w-[4rem]
            3xl:w-[5rem]" 
            href={"https://reactjs.org/docs/getting-started.html"} target="_blank" rel="noreferrer"><FaReact className="
            w-auto h-8
            lg:h-[3rem]
            2xl:h-[4rem]
            3xl:h-[5rem]" />
              <p className="
              flex flex-wrap justify-center
              font-['Forum'] text-[#222222] font-medium
              lg:mt-2 lg:text-base
              2xl:text-lg
              3xl:text-xl">
              React
              </p>
            </a>
          </div>
          <div className="
          flex flex-wrap justify-center
          w-[33.3%] mb-4
          lg:w-[15%] lg:mb-0">
            <a className="
            w-8
            lg:w-[3rem]
            2xl:w-[4rem]
            3xl:w-[5rem]" 
            href={"https://redux.js.org/introduction/getting-started"} target="_blank" rel="noreferrer"><SiRedux className="
            w-auto h-8
            lg:h-[3rem]
            2xl:h-[4rem]
            3xl:h-[5rem]"/>
              <p className="
              flex flex-wrap justify-center
              font-['Forum'] text-[#222222] font-medium
              lg:mt-2 lg:text-base
              2xl:text-lg
              3xl:text-xl">
              Redux
              </p>
            </a>
          </div>
          <div className="
          flex flex-wrap justify-center
          w-[33.3%] mb-4
          lg:w-[15%] lg:mb-0">
            <a className="
            w-8
            lg:w-[3rem]
            2xl:w-[4rem]
            3xl:w-[5rem]" 
            href={"https://developer.mozilla.org/en-US/docs/Web/CSS"} target="_blank" rel="noreferrer"><SiCss3 className="
            w-auto h-8
            lg:h-[3rem]
            2xl:h-[4rem]
            3xl:h-[5rem]"/>
              <p className="
              flex flex-wrap justify-center
              font-['Forum'] text-[#222222] font-medium
              lg:mt-2 lg:text-base
              2xl:text-lg
              3xl:text-xl">
              Css
              </p>
            </a>
          </div>
          <div className="
          flex flex-wrap justify-center
          w-[33.3%] mb-4
          lg:w-[15%] lg:mb-0">
            <a className="
            w-8
            lg:w-[3rem]
            2xl:w-[4rem]
            3xl:w-[5rem]"
             href={"https://nodejs.org/en/docs/"} target="_blank" rel="noreferrer"><FaNode className="
             w-auto h-8
             lg:h-[3rem]
             2xl:h-[4rem]
             3xl:h-[5rem]"/>
              <p className="
              flex flex-wrap justify-center
              font-['Forum'] text-[#222222] font-medium
              lg:mt-2 lg:text-base
              2xl:text-lg
              3xl:text-xl">
              Node.js
              </p>
            </a>
          </div>
        </div>
        <div className="w-full h-auto flex flex-wrap justify-center content-between 
        lg:mt-10 lg:mb-6">
          <div className="
          flex flex-wrap justify-center
          w-[33.3%] mb-4
          lg:w-[15%] lg:mb-0">
            <a className="
            w-8
            lg:w-[3rem]
            2xl:w-[4rem]
            3xl:w-[5rem]"
             href={"https://www.postgresql.org/docs/"} target="_blank" rel="noreferrer"><SiPostgresql className="
             w-auto h-8
             lg:h-[3rem]
             2xl:h-[4rem]
             3xl:h-[5rem]"/>
              <p className="
              flex flex-wrap justify-center
              font-['Forum'] text-[#222222] font-medium
              lg:mt-2 lg:text-base
              2xl:text-lg
              3xl:text-xl">
              PostgreSQL
              </p>
            </a>
          </div>
          <div className="
          flex flex-wrap justify-center
          w-[33.3%] mb-4
          lg:w-[15%] lg:mb-0">
            <a className="
            w-8
            lg:w-[3rem]
            2xl:w-[4rem]
            3xl:w-[5rem]"
             href={"https://nextjs.org/docs/getting-started"} target="_blank" rel="noreferrer"><SiNextdotjs className="
             w-auto h-8
             lg:h-[3rem]
             2xl:h-[4rem]
             3xl:h-[5rem]" />
              <p className="
              flex flex-wrap justify-center
              font-['Forum'] text-[#222222] font-medium
              lg:mt-2 lg:text-base
              2xl:text-lg
              3xl:text-xl">
                Next.js
              </p>
            </a>
          </div>
          <div className="
          flex flex-wrap justify-center
          w-[33.3%] mb-4
          lg:w-[15%] lg:mb-0">
            <a className="
            w-8
            lg:w-[3rem]
            2xl:w-[4rem]
            3xl:w-[5rem]"
             href={"https://tailwindcss.com/docs/installation"} target="_blank" rel="noreferrer"><SiTailwindcss className="
             w-auto h-8
             lg:h-[3rem]
             2xl:h-[4rem]
             3xl:h-[5rem]"/>
              <p className="
              flex flex-wrap justify-center
              font-['Forum'] text-[#222222] font-medium
              text-base
              lg:mt-2 
              2xl:text-lg
              3xl:text-xl">
              Tailwind
              </p>
            </a>
          </div>
        </div>
      </div>

      <div className="
      flex flex-wrap justify-center bg-[#434242]
      w-full
      lg:w-1/2 lg:border-b-8 lg:border-[#00B9AE]">
        <div className="w-full flex flex-wrap justify-center">
          <h2 className="
          text-justify font-['Forum'] text-[#F3EFE0] font-medium tracking-widest
          text-xl mt-4 mb-4
          lg:text-3xl  lg:mt-12 
          2xl:text-4xl
          3xl:text-5xl 3xl:mt-16">
          Soft skill
          </h2>
        </div>
        <div className="w-full h-auto flex flex-wrap justify-center content-center">
          <h4 className="
          w-full h-auto flex flex-wrap justify-start
          text-justify font-['Forum'] text-[#F3EFE0] font-medium tracking-widest leading-relaxed
          text-base ml-[25px] mb-4
          lg:text-xl  lg:ml-[45px] lg:mb-8
          2xl:text-2xl
          3xl:text-3xl 3xl:mb-12">
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
          <img src={Henry} alt="henry" className="
          h-12 mt-[200px] ml-[160px]
          lg:h-[90px] lg:mt-[250px] lg:ml-[200px]
          xl:h-[100px]
          2xl:h-[140px] 2xl:mt-[270px] 2xl:ml-[230px]
          3xl:h-[150px] 3xl:mt-[300px] 3xl:ml-[250px]"/>
        </div>
        
      </div>
      
    </div>
  )
}
