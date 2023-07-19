import React,{ useState, useEffect } from "react";
import Logo from '../components/imagenes/Free_Sample_By_Wix.jpg'
import { FaBars } from 'react-icons/fa'
import Skill from "../components/Skill";
import SobreMi from "../components/SobreMi";
import Proyectos from "../components/Proyectos";
import Contacto from "../components/Contacto";
import Perfil from "../components/perfil";

export default function Page(){

  const [isOpen, setVisibility] = useState(false);

  
  const handleToggleMenu = () => {
    setVisibility(!isOpen);
  };



  useEffect(() => {
    const menuLinks = document.querySelectorAll('.menu-link');
    menuLinks.forEach((link) => {
      link.addEventListener('click', handleMenuLinkClick);
    });

    return () => {
      menuLinks.forEach((link) => {
        link.removeEventListener('click', handleMenuLinkClick);
      });
    };
  }, []);

  const handleMenuLinkClick = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    handleToggleMenu();
  };

  return(
    <div className="flex flex-wrap content-center justify-center">
      <div className="
      flex flex-wrap content-center justify-center 
      w-screen h-17 border-[#CDA434] border-b-4
      bg-[#00B9AE] 
      md:h-20
      lg:border-b-8 lg:justify-between
      " id="Navegador">
      
        <div className="
        flex flex-wrap content-center justify-center 
        mt-2 mb-2 w-[15%]">

          <img  className="
          rounded-full h-10 w-10
          sm:h-14 sm:w-14
          lg:h-16 lg:w-16 lg:mt-2 lg:mb-2
          " src={Logo} alt="Logo" />

        </div>
        
        <h1 className="
        flex flex-wrap content-center justify-center
        font-mono text-base font-bold w-[70%]
        text-[#222222] 
        sm:text-3xl
        lg:w-[55%] lg:static
        ">
          Sixto Tulio Mendoza Garcia
        </h1>

        <div className="
        hidden flex-wrap justify-around content-center
        w-[30%]
        lg:flex ">
          <a className="font-mono text-[#222222] text-lg font-bold "
          href="#sobreMi">
            Sobre mí
          </a>
          <a className="font-mono text-[#222222] text-lg font-bold"
          href="#proyectos">
           Proyectos
          </a>
          <a className="font-mono text-[#222222] text-lg font-bold"
          href="#contacto"
          >
            Contacto
          </a>
        </div>
      
        <div className="
        flex flex-wrap justify-center content-center
        w-[15%]  
        lg:hidden">
          <button
          className="
          flex flex-wrap justify-center content-center
          w-auto h-4
          md:h-8"
          onClick={() => setVisibility(!isOpen)}>
            <FaBars className="
            w-auto h-[1.8rem] text-[#222222]
            focus:text-gray-900 outline-none transition-colors duration-300
            sm:h-10   
            md:h-8"/>
          </button>

          {isOpen && (
            <div className="
            z-10 absolute 
            w-28 mt-[60px] right-0 border-[#CDA434]  border-b-4 border-l-4
            bg-[#00B9AE] 
            md:w-40 md:mr-1 md:mt-[78px]">
              <a
              href="#sobreMi"
              className="
              block py-2 w-full text-[#222222] text-xl font-bold text-center font-mono 
              hover:text-[#434242]">
                Sobre Mí
              </a>
              <a
              href="#proyectos"
              className="
              block py-2 w-full text-[#222222] text-xl font-bold text-center font-mono 
              hover:text-[#434242] ">
                Proyectos
              </a>
              <a
              href="#contacto"
              className="
              block py-2 w-full text-[#222222]  text-xl font-bold text-center font-mono 
              hover:text-[#434242]">
                Contacto
              </a>
                
            </div>
          )}
        </div>
      </div>
       
      <Perfil/>
      <div id="sobreMi" className="flex justify-center">
        <SobreMi />
      </div>
      <Skill/>
      <div id="proyectos" className="flex justify-center">
        <Proyectos />
      </div>
      <div id="contacto" className="flex justify-center">
        <Contacto />
      </div>

      
    </div>
  )
}