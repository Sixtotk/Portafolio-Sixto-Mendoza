import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

function Dropdown() {
  const [isOpen, setVisibility] = useState(false);

  return (
    <div className="w-[15%] flex flex-wrap justify-center content-center">
  <button
  className="w-auto h-4 flex flex-wrap justify-center content-center
  md:h-8"
  onClick={() => setVisibility(!isOpen)}
>
  <FaBars className="h-[1.8rem] w-auto text-[#222222] focus:text-gray-900 outline-none transition-colors duration-300
  md:h-8"/>
</button>

      {isOpen && (
        <div className="z-10 absolute w-28 mt-[60px] mr-11 bg-[#00B9AE] 
        md:w-40 md:mr-1 md:mt-[78px] border-[#CDA434]  border-b-4 border-l-4">
          <a
            href="/sobremi"
            className="block py-2 w-full text-[#222222] hover:text-[#434242] text-xl font-bold text-center
            font-mono "
          >
            Sobre Mí
          </a>
          <a
            href="/contacto"
            className="block py-2 w-full text-[#222222] hover:text-[#434242] text-xl font-bold text-center
            font-mono "
          >
            Contacto
          </a>
          <a
            href="https://drive.google.com/file/d/1r-rdCfHUavcNa3z1OdygmGDltF5TqHSi/view?usp=sharing" target="_blank" rel="noreferrer"
            className="block py-2 w-full text-[#222222] hover:text-[#434242] text-xl font-bold text-center
            font-mono "
          >
            Mi CV
          </a>
                
        </div>
      )}
    </div>
  );
}

export default Dropdown;