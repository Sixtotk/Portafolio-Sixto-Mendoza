import React,{ useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight, FaLink, FaCode} from 'react-icons/fa'
import Dionisia from "../components/imagenes/dionisia.jpg"
import Poke from "../components/imagenes/1665712306249.jpg"

const proyectos = [
  {
    id: 1,
    titulo: 'La Dionisia App (15/01/2023)',
    descripcion: "En colaboración con un equipo, utilicé la metodología Scrum para desarrollar una página web para un e-commerce de vinos. La página incorpora una amplia gama de funcionalidades, incluyendo búsqueda, filtros combinados, ordenamientos, autenticación local y de terceros, pasarela de pagos, deploy, panel de administrador (CRUD), valoraciones, comentarios y notificaciones vía email.",
    tecnologias:"Utilizando tecnologías modernas y potentes, el proyecto se desarrolló utilizando las siguientes tecnologías: Next.js, PostgreSQL, Typescript, Redux, Node.js, Nodemailer, Auth0, cloudinary, Paypal, Stripe.",
    imagen: Dionisia,
    Repositorio: "https://github.com/Sixtotk/LaDionisiaBack-JS",
    link: "https://la-dionisia-front.vercel.app"
  },
  {
    id: 2,
    titulo: 'PokeApp (13/10/2023)',
    descripcion: "Desarrollé de manera individual un proyecto con temática de Pokémon. La página cuenta con las siguientes funcionalidades: búsqueda, filtros combinados, ordenamientos y creación de nuevos Pokémons.",
    tecnologias:"El proyecto se desarrolló utilizando las siguientes tecnologías: JavaScript, React, Redux, PostgreSQL, Sequelize, Node.js y Express.",
    imagen: Poke,
    Repositorio: "https://github.com/Sixtotk/PI_POKEMON-Sixto-Mendoza",
    link: "https://pokemon-sixto.vercel.app"
  },
  // Agrega más proyectos según sea necesario
];

export default function Proyectos(){

  const [currentIndex, setCurrentIndex] = useState(0);

  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {

    let timeoutId;

    const temporizador = setTimeout(() => {
      mostrarProyectoSiguiente();
    }, 10000); 
    
    const stopAnimation = () => {
      setIsAnimating(false);
      timeoutId = setTimeout(() => {
        setIsAnimating(true);
      }, 7000); 
    };

    stopAnimation();
    

    return () => clearTimeout(temporizador, timeoutId);
  }, [currentIndex]);


  const mostrarProyectoAnterior = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? proyectos.length - 1 : prevIndex - 1));
  };

  const mostrarProyectoSiguiente = () => {
    setCurrentIndex((prevIndex) => (prevIndex === proyectos.length - 1 ? 0 : prevIndex + 1));
  };
  return(

  <div className="
  flex flex-wrap justify-center
  border-b-4 
  bg-[#00B9AE] 
  border-t-4 border-[#CDA434]
  lg:w-[95%] lg:border-x-4 lg:border-t-4 lg:justify-start lg:px-8">

    <h2 className="
    text-[#F3EFE0] font-mono font-bold text-xl  
    w-auto mt-4 border-b-4 border-[#222222] border-dashed 
    lg:mt-10 lg:text-3xl">
      Proyectos
    </h2>
    <div className="
    flex flex-wrap justify-center  relative
    p-2 mt-8 mb-6 border-4 bg-[#F3EFE0] border-[#222222] border-dashed
    w-[90%] h-min
    lg:justify-start lg:p-12 lg:w-full
    xl:p-8 2xl:p-16">

      <button
      className="absolute top-1/2 left-0  transform -translate-y-1/2 bg-[#cda4347c] text-[#222222] rounded px-2 lg:px-3 py-2 lg:py-3"
      onClick={mostrarProyectoAnterior}>
        <FaAngleLeft/>
      </button>
      <img
      src={proyectos[currentIndex].imagen}
      alt={proyectos[currentIndex].titulo}
      className="
      w-[80%] h-min mt-8
      border-4 border-[#CDA434] border-dashed
      transition duration-1000  ease-in-out
      lg:w-[35%]  2xl:w-[45%]"/>
      <div className="w-full h-min lg:w-[65%] lg:px-4 2xl:w-[55%]">
        <h4 className="
        text-sm font-serif text-[#222222] font-medium tracking-widest
        w-full h-auto mt-4
        transition duration-1000  ease-in-out
        lg:mt-2 lg:text-start xl:text-base 2xl:text-2xl">
          {proyectos[currentIndex].titulo}
        </h4>
        <h5 className="
        text-sm text-center font-serif text-[#222222] font-medium tracking-widest
        w-full h-auto mt-4
        transition duration-1000  ease-in-out
        lg:text-start xl:text-base 2xl:text-2xl">
            {proyectos[currentIndex].descripcion}
        </h5>
        <h5 className="
         text-center font-serif text-[#222222] font-medium tracking-widest
         text-xs
          w-full h-auto 
          mt-4 mb-8 
          transition duration-1000  ease-in-out
          lg:text-start lg:ml-8 xl:text-sm 2xl:text-base">
            {proyectos[currentIndex].tecnologias}
        </h5>
      </div>
        <div className="
            flex justify-evenly
            w-full mt-2
            lg:w-[35%] 2xl:w-[45%] 2xl:mt-8" >
        <a className="h-min border-4 border-[#CDA434] border-dashed"
            href={proyectos[currentIndex].Repositorio} target="_blank" rel="noreferrer">
          <FaCode className={`${
          isAnimating ? 'animate-wiggle' : ''
        } w-8 p-2 h-auto text-[#222222] 2xl:w-14`}/>
        </a>
        <a className="h-min border-4 border-[#CDA434] border-dashed" 
            href={proyectos[currentIndex].link} target="_blank" rel="noreferrer">
          <FaLink className={`${
          isAnimating ? 'animate-wiggle' : ''
        } w-8 p-2 h-auto text-[#222222] 2xl:w-14`}/>
        </a>
        
        </div>
        <button
          className="absolute top-1/2 right-0   transform -translate-y-1/2  bg-[#cda4347c] text-[#222222] rounded px-2 lg:px-3 py-2 lg:py-3 "
          onClick={mostrarProyectoSiguiente}
        >
          <FaAngleRight/>
        </button>
        
        
      </div>
      
      
        
    </div> 

  )}