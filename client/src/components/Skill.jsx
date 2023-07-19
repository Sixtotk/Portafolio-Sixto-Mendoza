
import React,{ useEffect, useState } from "react";
import {FaJs, FaNode } from 'react-icons/fa'
import { SiRubyonrails, SiRuby, SiRedux, SiCss3, SiPostgresql,  SiTailwindcss,SiTypescript, SiReact } from "react-icons/si";

export default function Skill(){

  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {

    let timeoutId;
    
    const stopAnimation = () => {
      setIsAnimating(false);
      timeoutId = setTimeout(() => {
        setIsAnimating(true);
      }, 7000); 
    };

    stopAnimation();
    
    return () => clearTimeout(timeoutId);
  }, []);

  const Techlist = [
    {
      name: "JavaScript",
      link: "https://developer.mozilla.org/es/docs/Web/JavaScript",
      icon: <FaJs className={`${
        isAnimating ? 'animate-wiggle' : ''
        }  w-10 h-auto mb-1 text-[#c5b535] 2xl:w-20`}/>,
    },
    {
      name: "TypeScript",
      link: "https://www.typescriptlang.org/docs/",
      icon: <SiTypescript  className={`${
        isAnimating ? 'animate-wiggle' : ''
        }  w-10 h-auto mb-1 text-[#007ACC] 2xl:w-20`}/>,
    },
    {
      name: "React",
      link: "https://17.reactjs.org/docs/getting-started.html",
      icon: <SiReact className={`${
        isAnimating ? 'animate-wiggle' : ''
        }  w-10 h-auto mb-1 text-[#61DAFB] 2xl:w-20`}/>,
    },
    {
      name: "Redux",
      link: "https://redux.js.org/introduction/getting-started",
      icon: <SiRedux className={`${
        isAnimating ? 'animate-wiggle' : ''
        }  w-10 h-auto mb-1 text-[#764ABC] 2xl:w-20`}/>,
    },
    {
      name: "Css",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      icon: <SiCss3 className={`${
        isAnimating ? 'animate-wiggle' : ''
        }   w-10 h-auto mb-1 text-[#2965f1] 2xl:w-20`}/>,
    },
    {
      name: "Node.js",
      link: "https://nodejs.org/en/docs/",
      icon: <FaNode className={`${
        isAnimating ? 'animate-wiggle' : ''
        }  w-10 h-auto mb-1 text-[#68A063] 2xl:w-20`}/>,
    },
    {
      name: "PostgreSQL",
      link: "https://www.postgresql.org/docs/",
      icon: <SiPostgresql className={`${
        isAnimating ? 'animate-wiggle' : ''
        }  w-10 h-auto mb-1 text-[#336791] 2xl:w-20`}/>,
    },
    {
      name: "Tailwind",
      link: "https://tailwindcss.com/docs/installation",
      icon: <SiTailwindcss className={`${
        isAnimating ? 'animate-wiggle' : ''
        }  w-10 h-auto mb-1 text-[#38B2AC] 2xl:w-20`}/>,
    },
  ]

  const rubyList = [
    {
      name: "Ruby",
      link: "https://www.ruby-lang.org/en/documentation/",
      icon: <SiRuby className={`${
        isAnimating ? 'animate-wiggle' : ''
        }  w-10 h-auto mb-1 text-[#CC342D] 2xl:w-20`}/>
    },
    {
      name: "Rails",
      link: "https://guides.rubyonrails.org",
      icon: <SiRubyonrails className={`${
        isAnimating ? 'animate-wiggle' : ''
        }  w-10 h-auto mb-1 text-[#FF8800] 2xl:w-20`}/>
    },
    
  ]

  return( 
    <div 
    key="skill"
    className="
      flex flex-wrap justify-center
      w-full relative
      bg-[#F3EFE0] border-[#CDA434]
      lg:w-[95%] lg:border-x-4 lg:border-t-4 lg:justify-start lg:px-8">
        
      <div className="
      flex flex-wrap justify-center content-center 
      w-full 
      lg:justify-start">
        <h2 className="
        text-[#222222] font-mono font-bold text-xl  
        w-auto mt-4 border-b-4 border-[#CDA434] border-dashed 
        lg:mt-10 lg:mb-0 lg:text-3xl
        ">
          Tech skill
        </h2>
      </div>
      <h4 className="
      text-center font-serif text-[#222222] font-medium tracking-widest text-sm
      mt-10 mb-10 w-[90%] p-4 h-min
      border-4 border-[#CDA434] border-dashed
      lg:my-14 lg:ml-8 lg:w-[55%] lg:text-justify
      xl:text-base
      2xl:text-2xl
      ">
        Mi pasión por el desarrollo web me impulsa a buscar constantemente nuevos desafíos y aprender nuevas tecnologías para ofrecer soluciones innovadoras y eficientes. Estoy comprometido en construir aplicaciones web de calidad y brindar un excelente servicio a mis clientes.<br/><br/>
        Estoy emocionado por seguir creciendo como profesional y enfrentar nuevos proyectos que me permitan aprovechar al máximo mis habilidades y conocimientos en el desarrollo web Full Stack.
      </h4>
      <div className="
      flex flex-wrap justify-center content-between 
      w-full h-auto
      lg:w-[40%]
      ">

        {Techlist.map((e) => (

          <div
          key={e.name}
          className="
          flex flex-wrap justify-center
          w-16 m-2 lg:w-20 2xl:w-28
          ">

            <a className="
            flex flex-wrap justify-center
            w-16 p-2 lg:w-20 2xl:w-28
            border-4 border-[#CDA434] border-dashed
            "
            href={e.link} target="_blank" rel="noreferrer">
              {React.cloneElement(e.icon )}
              <p className="
              flex flex-wrap justify-center
              font-['Forum'] text-[#222222] font-medium
              text-xs
              lg:text-sm
              ">
              {e.name}
              </p>
            </a>
          </div>
        ))}

        <div className="
        flex flex-wrap justify-center content-center
        w-full mt-4 mb-2">

          <div className="w-full flex flex-wrap justify-center content-center">

            <h4 className="
            text-lg text-center text-[#222222] font-mono font-bold 
            mb-4 w-auto border-b-4 border-[#CDA434] border-dashed
            2xl:text-xl">
              Últimas tecnologías 
            </h4>

          </div>
          {rubyList.map((e) => (
            <div className="
            flex flex-wrap justify-center
            w-16 m-2 2xl:w-28">
              <a className="
              flex flex-wrap justify-center
              w-16 p-2  2xl:w-28
              border-4 border-[#CDA434] border-dashed"
              href={e.link} target="_blank" rel="noreferrer">
                {React.cloneElement(e.icon,)}
                <p className="
                flex flex-wrap justify-center
                font-['Forum'] text-[#222222] font-medium text-xs
                lg:text-sm">
                  {e.name}
                </p>
              </a>
            </div>))} 
        </div>

      </div>  
    </div> 
  )
}
