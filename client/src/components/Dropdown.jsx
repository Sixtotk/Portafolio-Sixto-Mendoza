import React, { useState } from "react";
import { FaBars} from "react-icons/fa";

function Dropdown() {
  const [isOpen, setVisibility] = useState(false);

  return (
    <div className="w-8 flex flex-wrap justify-center content-center">
  <button
  className=""
  onClick={() => setVisibility(!isOpen)}
>
  <FaBars className="w-8 text-[#222222] focus:text-gray-900 outline-none transition-colors duration-300"/>
</button>

      {isOpen && (
        <div className="fixed w-24 mt-[60px] mr-11 bg-[#00B9AE] ">
          <a
            href="/"
            className="block py-2 w-full text-[#222222] hover:text-[#434242] 
            font-['Forum']"
          >
            Sobre Mí
          </a>
          <a
            href="/"
            className="block py-2 w-full text-[#222222] hover:text-[#434242] 
            font-['Forum']"
          >
            Contacto
          </a>
          <a
            href="/"
            className="block py-2 w-full text-[#222222] hover:text-[#434242] 
            font-['Forum']"
          >
            CV
          </a>
          
          <a
            href="/"
            className="block py-2 w-full text-xs text-[#222222] hover:text-[#434242] 
            font-['Forum']"
          >
            Modo Oscuro
          </a>
          
        </div>
      )}
    </div>
  );
}

export default Dropdown;