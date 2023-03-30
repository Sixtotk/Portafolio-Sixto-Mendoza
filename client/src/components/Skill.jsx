import React from "react";
import { FaJs, FaNode} from 'react-icons/fa'
import { SiRedux, SiCss3, SiPostgresql, SiNextdotjs, SiTailwindcss,SiTypescript, SiReact, SiPhp, SiNestjs } from "react-icons/si";


export default function Skill(){
  return(
    <div className="w-full h-auto lg:flex border-b-4 border-[#F3EFE0]">
    <div className="
    flex flex-wrap justify-center
    bg-[#434242]
    w-full
    lg:w-1/2 lg:border-t-8 lg:border-[#434242]">
        <h2 className="
        text-[#F3EFE0] text-justify font-['Forum']  font-medium tracking-widest
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
            w-8 text-[#F3EFE0]
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
              font-['Forum'] text-[#F3EFE0] font-medium
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
            w-8 text-[#F3EFE0]
            lg:w-[3rem]
            2xl:w-[4rem]
            3xl:w-[5rem]" 
            href={"https://www.typescriptlang.org/docs/"} target="_blank" rel="noreferrer"><SiTypescript className="
            w-auto h-8
            lg:h-[3rem]
            2xl:h-[4rem]
            3xl:h-[5rem]" />
              <p className="
              flex flex-wrap justify-center
              font-['Forum'] text-[#F3EFE0] font-medium
              lg:mt-2 lg:text-base
              2xl:text-lg
              3xl:text-xl">
              TypeScript
              </p>
            </a>
          </div>
          <div className="
          flex flex-wrap justify-center
          w-[33.3%] mb-4
          lg:w-[15%] lg:mb-0">
            <a className="
            w-8 text-[#F3EFE0]
            lg:w-[3rem]
            2xl:w-[4rem]
            3xl:w-[5rem]" 
            href={"https://17.reactjs.org/docs/getting-started.html"} target="_blank" rel="noreferrer"><SiReact className="
            w-auto h-8
            lg:h-[3rem]
            2xl:h-[4rem]
            3xl:h-[5rem]"/>
              <p className="
              flex flex-wrap justify-center
              font-['Forum'] text-[#F3EFE0] font-medium
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
            w-8 text-[#F3EFE0]
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
              font-['Forum'] text-[#F3EFE0] font-medium
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
            w-8 text-[#F3EFE0]
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
              font-['Forum'] text-[#F3EFE0] font-medium
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
            w-8 text-[#F3EFE0]
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
              font-['Forum'] text-[#F3EFE0] font-medium
              lg:mt-2 lg:text-base
              2xl:text-lg
              3xl:text-xl">
              Node.js
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
             href={"https://www.postgresql.org/docs/"} target="_blank" rel="noreferrer"><SiPostgresql className="
             w-auto h-8 text-[#F3EFE0]
             lg:h-[3rem]
             2xl:h-[4rem]
             3xl:h-[5rem]"/>
              <p className="
              flex flex-wrap justify-center
              font-['Forum'] text-[#F3EFE0] font-medium
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
             href={"https://tailwindcss.com/docs/installation"} target="_blank" rel="noreferrer"><SiTailwindcss className="
             w-auto h-8 text-[#F3EFE0]
             lg:h-[3rem]
             2xl:h-[4rem]
             3xl:h-[5rem]"/>
              <p className="
              flex flex-wrap justify-center
              font-['Forum'] text-[#F3EFE0] font-medium
              text-base
              lg:mt-2 
              2xl:text-lg
              3xl:text-xl">
              Tailwind
              </p>
            </a>
          </div>
        </div>
        <div className="
          flex flex-wrap justify-center
          w-full mt-4 mb-2">
            <h2 className="
        text-[#F3EFE0] text-center font-['Forum']  font-medium tracking-widest
        text-base mt-4 mb-4 w-full
        lg:text-3xl  lg:mt-10 lg:mb-0
        2xl:text-4xl
        3xl:text-5xl">
          Próximos 
        </h2>
        <div className="
          flex flex-wrap justify-center
          w-[33.3%] mb-4
          lg:w-[15%] lg:mb-0">
            <a className="
            w-8 text-[#F3EFE0]
            lg:w-[3rem]
            2xl:w-[4rem]
            3xl:w-[5rem]"
             href={"https://nextjs.org/docs/getting-started"} target="_blank" rel="noreferrer"><SiNextdotjs className="
             w-auto h-8
             lg:h-[3rem]
             2xl:h-[4rem]
             3xl:h-[5rem]"/>
              <p className="
              flex flex-wrap justify-center
              font-['Forum'] text-[#F3EFE0] font-medium
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
            w-8 text-[#F3EFE0]
            lg:w-[3rem]
            2xl:w-[4rem]
            3xl:w-[5rem]"
             href={"https://www.php.net/docs.php"} target="_blank" rel="noreferrer"><SiPhp className="
             w-auto h-8
             lg:h-[3rem]
             2xl:h-[4rem]
             3xl:h-[5rem]"/>
              <p className="
              flex flex-wrap justify-center
              font-['Forum'] text-[#F3EFE0] font-medium
              lg:mt-2 lg:text-base
              2xl:text-lg
              3xl:text-xl">
              PHP
              </p>
            </a>
          </div>
          <div className="
          flex flex-wrap justify-center
          w-[33.3%] mb-4
          lg:w-[15%] lg:mb-0">
            <a className="
            w-8 text-[#F3EFE0]
            lg:w-[3rem]
            2xl:w-[4rem]
            3xl:w-[5rem]"
             href={"https://docs.nestjs.com"} target="_blank" rel="noreferrer"><SiNestjs className="
             w-auto h-8
             lg:h-[3rem]
             2xl:h-[4rem]
             3xl:h-[5rem]"/>
              <p className="
              flex flex-wrap justify-center
              font-['Forum'] text-[#F3EFE0] font-medium
              lg:mt-2 lg:text-base
              2xl:text-lg
              3xl:text-xl">
              Nest.js
              </p>
            </a>
          </div>
          </div>
      </div>

    </div>
  )
}
