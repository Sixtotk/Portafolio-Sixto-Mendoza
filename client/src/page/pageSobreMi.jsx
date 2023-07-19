import React from "react";
import Nav from "../components/nav";
import Contacto from "../components/Contacto"
import foto from "../components/imagenes/81501215_2450531651876861_4842882059271667712.jpg"
import { FaJs, FaHtml5, FaCss3, FaNode} from 'react-icons/fa'
import { SiRedux, SiPostgresql, SiTailwindcss,SiTypescript, SiReact,  } from "react-icons/si";


export default function SobreMi(){
  return(
    <div className="
    flex flex-wrap justify-center content-center 
    w-screen h-auto
    bg-[#F3EFE0]
     
    ">
      <Nav/>
      <div className="
      flex flex-wrap justify-center content-center
      border-b-4 border-[#222222]
      
      ">
        <img className="mt-2 w-[235px] h-[372px]" src={foto} alt="foto"/>
        <h4 className="
        px-2
        text-center font-['Forum'] text-[#222222] font-medium tracking-widest
        text-base mt-10 mb-10
        lg:text-2xl  lg:mt-16 lg:mb-16
        xl:text-2xl
        2xl:text-3xl 2xl:mt-20 2xl:mb-20
        3xl:text-4xl ">
        ¡Hola! Mi nombre es Sixto, soy un joven venezolano que actualmente vive en Perú. Desde que era niño, siempre he sentido una gran fascinación por la tecnología y la informática, pero debido a la difícil situación económica y social de mi país, no pude continuar mis estudios universitarios en Ingeniería de Sistemas.
        </h4>
      </div>
      <div className="
      flex flex-wrap justify-center content-center
      border-b-4 border-[#222222]
      bg-[#00B9AE]
      ">
        
        <h4 className="
        px-2
        text-center font-['Forum'] text-[#222222] font-medium tracking-widest
        text-base mt-10 mb-10
        lg:text-2xl  lg:mt-16 lg:mb-16
        xl:text-2xl
        2xl:text-3xl 2xl:mt-20 2xl:mb-20
        3xl:text-4xl ">
        A pesar de esto, nunca perdí mi pasión por la tecnología y he buscado constantemente maneras de aprender y mejorar mis habilidades por mi cuenta. Durante mi vida laboral, he tenido la oportunidad de trabajar en diferentes áreas, desde el taller mecánico de mi padre hasta empresas de construcción y logística, lo cual me ha permitido adquirir valiosas habilidades en liderazgo, gestión y trabajo en equipo.<br/><br/>
        Sin embargo, siempre sentí que algo me faltaba, que necesitaba algo más desafiante y creativo, algo que pudiera combinar mi amor por la tecnología con mi experiencia laboral. Fue entonces cuando decidí explorar el mundo de la programación.
        </h4>
      </div>
      <div className="
      flex flex-wrap justify-center content-center
      border-b-4 border-[#F3EFE0]
      bg-[#434242]
      ">
        
        <h4 className="
        px-2
        text-center font-['Forum'] text-[#F3EFE0] font-medium tracking-widest
        text-base mt-10 mb-10
        lg:text-2xl  lg:mt-16 lg:mb-16
        xl:text-2xl
        2xl:text-3xl 2xl:mt-20 2xl:mb-20
        3xl:text-4xl ">
        Comencé a estudiar por mi cuenta, principalmente enfocado en lenguajes de programación como JavaScript, CSS y HTML. A pesar de que ha sido un camino difícil y lleno de obstáculos, siempre he perseverado y he trabajado duro para mejorar mis habilidades y conocimientos.
Descubrí que la programación era algo que realmente me apasionaba y comencé a buscar más información sobre cómo aprender más sobre programación y cómo podría aplicar mis habilidades en el mundo laboral.
        </h4>
        <div className="w-screen flex flex-wrap justify-around content-center mb-4 text-[#F3EFE0]">
          <a className="w-8" href={'https://developer.mozilla.org/es/docs/Web/JavaScript'} target="_blank" rel="noreferrer">
            <FaJs className="w-auto h-8"/>
          </a>
          <a className="w-8" href={'https://developer.mozilla.org/es/docs/Web/HTML'} target="_blank" rel="noreferrer">
            <FaHtml5 className="w-auto h-8"/>
          </a>
          <a className="w-8" href={'https://developer.mozilla.org/en-US/docs/Web/CSS'} target="_blank" rel="noreferrer">
            <FaCss3 className="w-auto h-8"/>
          </a>
        </div>
      </div>
      <div className="
      flex flex-wrap justify-center content-center
      border-b-4 border-[#222222]
      bg-[#00B9AE]
      ">
        
        <h4 className="
        px-2
        text-center font-['Forum'] text-[#222222] font-medium tracking-widest
        text-base mt-10 mb-10
        lg:text-2xl  lg:mt-16 lg:mb-16
        xl:text-2xl
        2xl:text-3xl 2xl:mt-20 2xl:mb-20
        3xl:text-4xl ">
        Fue entonces cuando me enteré de un bootcamp llamado Soy Henry, y supe que era la oportunidad perfecta para mí. Ingresé en el programa y aprendí una variedad de tecnologías, incluyendo React, Redux, Node, Express, PostgreSQL y Sequelize. Además, también aprendí TypeScript y Tailwind CSS por mi cuenta.
        </h4>
        <div className="w-screen flex flex-wrap justify-around content-center mb-4 text-[#222222]">
          <a className="w-8" href={'https://www.typescriptlang.org/docs/'} target="_blank" rel="noreferrer">
            <SiTypescript className="w-auto h-8"/>
          </a>
          <a className="w-8" href={'https://17.reactjs.org/docs/getting-started.html'} target="_blank" rel="noreferrer">
            <SiReact className="w-auto h-8"/>
          </a>
          <a className="w-8" href={'https://redux.js.org/introduction/getting-started'} target="_blank" rel="noreferrer">
            <SiRedux className="w-auto h-8"/>
          </a>
          <a className="w-8" href={'https://nodejs.org/en/docs/'} target="_blank" rel="noreferrer">
            <FaNode className="w-auto h-8"/>
          </a>
          <a className="w-8" href={'https://www.postgresql.org/docs/'} target="_blank" rel="noreferrer">
            <SiPostgresql className="w-auto h-8"/>
          </a>
          <a className="w-8" href={'https://tailwindcss.com/docs/installation'} target="_blank" rel="noreferrer">
            <SiTailwindcss className="w-auto h-8"/>
          </a>
        </div>
      </div>
      <div className="
      flex flex-wrap justify-center content-center
      border-b-4 border-[#222222]
      bg-[#F3EFE0]
      ">
        <h4 className="
        px-2
        text-center font-['Forum'] text-[#222222] font-medium tracking-widest
        text-base mt-10 mb-10
        lg:text-2xl  lg:mt-16 lg:mb-16
        xl:text-2xl
        2xl:text-3xl 2xl:mt-20 2xl:mb-20
        3xl:text-4xl ">
        Este programa no solo me brindó la oportunidad de aprender nuevas habilidades, sino que también me ayudó a conectarme con una comunidad de personas apasionadas por la tecnología y el desarrollo web. Estoy emocionado por lo que el futuro me depara en este campo y estoy ansioso por continuar aprendiendo y creciendo como profesional.
        </h4>
        
      </div>
      <Contacto/>

      
      
    </div>
  )
}