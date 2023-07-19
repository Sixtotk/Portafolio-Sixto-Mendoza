import React,{ useState, useEffect } from "react";
import Foto from "./imagenes/67456402-60f9-489d-81b8-52e66ecafc25.png"
import MandalaA from "../components/imagenes/image7.png"
import { FaLinkedin, FaWhatsapp, FaGithub} from 'react-icons/fa'





export default function Perfil(){

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
    

    return () => clearTimeout( timeoutId);
  }, []);

  return(
    <div className="bg-[#F3EFE0]  flex flex-wrap justify-center lg:justify-start lg:mt-14  lg:w-[95%] lg:rounded-t-[60px] relative
    lg:border-x-4 lg:border-t-4 lg:border-[#CDA434]">
  
        
  
          <img className="
          z-0
          border-r-4 border-l-4 border-[#CDA434]
          rounded-br-[15rem] rounded-bl-[15rem]
          w-full h-[25rem]
          sm:w-[80%]
          md:w-[60%]
          lg:w-[35%] lg:h-min
          lg:rounded-tl-[53px] lg:rounded-br-[200px] lg:rounded-bl-none lg:border-l-0
          xl:w
          2xl:w-[30%]
          
          
          " 
          src={Foto} alt="Foto"/> 
  
        
        <div className="flex flex-wrap justify-center content-center
        lg:w-[65%] lg:justify-start lg:px-2 lg:h-60
        2xl:w-[70%]
        2xl:mt-8">
        <h2 className="
          font-serif text-[#222222] font-medium
          text-2xl mt-6 mb-2
          w-full
          sm:text-3xl
          lg:text-start
          xl:text-4xl
          2xl:text-5xl
          ">¡Hola!</h2>
          <h2 className="
          font-serif text-[#CDA434] font-medium
          text-2xl mt-2 mb-2
          w-full
          tracking-widest
          sm:text-3xl
          lg:text-start lg:ml-8
          xl:text-4xl
          2xl:text-5xl
          ">Soy Sixto</h2>
          <h4 className="
          font-mono text-[#222222] font-bold 
          border-b-4 border-[#CDA434] border-dashed
          text-xl
          animate-typewriter
          w-[90%]
          sm:text-4xl
          lg:text-start 
          xl:text-5xl
          2xl:text-6xl  3xl:mt-8
          ">Full Stack Web Developer</h4>
  
        </div>
        
        <img className="
          z-0 hidden absolute right-0
          lg:flex lg:rounded-tr-[60px]
          xl:w-60
          2xl:w-[270px]
          " 
          src={MandalaA} alt="Foto"/> 
          
        <div className="w-[90%] flex flex-wrap justify-around content-center mt-5 mb-8
        lg:w-[65%] lg:absolute bottom-1 right-2
        xl:w-[70%]">
        
       
        <a  className="border-4 border-[#CDA434] border-dashed" href={"https://api.whatsapp.com/send/?phone=%2B51902435668&text&type=phone_number&app_absent=0"} target="_blank" rel="noreferrer" >
            <FaWhatsapp className={`${
          isAnimating ? 'animate-wiggle' : ''
        } w-16 p-2 h-auto text-[#222222] 2xl:w-24`}/>
          </a>
          <a className="border-4 border-[#CDA434] border-dashed" href={"https://www.linkedin.com/in/sixto-mendoza-orden/"} target="_blank" rel="noreferrer">
            <FaLinkedin className={`${
          isAnimating ? 'animate-wiggle' : ''
        } w-16 p-2 h-auto text-[#222222] 2xl:w-24`} />
          </a>
          <a className="border-4 border-[#CDA434] border-dashed" href={"https://github.com/Sixtotk"} target="_blank" rel="noreferrer" >
            <FaGithub className={`${
          isAnimating ? 'animate-wiggle' : ''
        } w-16 p-2 h-auto text-[#222222] 2xl:w-24`} />
          </a>
        
        </div>
        
      </div>
  )}