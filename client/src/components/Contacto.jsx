import React, { useState, useEffect }from "react";
import axios from 'axios';
import { FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa'

import Logo from '../components/imagenes/Free_Sample_By_Wix.jpg'


export default function Contacto(){

  const [isAnimating, setIsAnimating] = useState(true);


  const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = e => {
      e.preventDefault();
  
      const data = {
          name: name,
          email: email,
          message: message
      };
  
      axios.post('http://localhost:3001/send-email', data)
          .then(res => {
              alert('Correo electrónico enviado');
          })
          .catch(err => {
              alert('Error al enviar el correo electrónico');
          });
  
      setName('');
      setEmail('');
      setMessage('');
  };

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
    <div className="
    flex flex-wrap content-center justify-center relative
    w-screen h-auto bg-[#434242]  border-[#CDA434] 
    lg:w-[95%] lg:border-x-4 lg:border-b-4 lg:justify-start lg:px-8 lg:rounded-b-[60px] lg:mb-10">

      
      <h3 className="
    text-[#F3EFE0] font-mono font-bold text-xl  
      w-auto mt-4 border-b-4 border-[#CDA434] border-dashed 
      lg:mt-10 lg:text-3xl">
        Contacto
      </h3>          
      <div className="
      flex flex-wrap content-center justify-center
      w-full 
      lg:justify-evenly z-10">

        <h3 className="
        text-center font-serif text-[#F3EFE0] font-medium tracking-widest text-sm
        mt-4 mb-4
        lg:text-lg lg:border-4 lg:border-[#CDA434] lg:border-dashed lg:p-4
        lg:w-max lg:h-min lg:text-justify
        xl:text-xl
        2xl:text-2xl">
          Correo: sixtoorden@gmail.com<br/>
          Telefono: +51 910 178 928<br/>
          Ubicacion: Lima, Peru
        </h3>
        <div className="
        flex flex-wrap content-center justify-center relative w-full
        lg:w-[50%] z-10 2xl:w-[60%]
        ">
          
          <form onSubmit={handleSubmit} 
          className=" flex flex-wrap content-center justify-center w-[90%] relative
          
          lg:content-start">

            <input type="text" name="email" id="name" value={name} onChange={e => setName(e.target.value)} required placeholder="Nombre"
            className="block w-full pl-7 pr-12 h-10 mb-4 border-4 border-[#CDA434] border-dashed bg-[#F3EFE0] text-[#222222] text-base font-medium font-mono" ></input>
            <input type="text" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="Email"
            className="block w-full  pl-7 pr-12 h-10 mb-4 bg-[#F3EFE0] border-4 border-[#CDA434] border-dashed text-[#222222] text-base font-medium font-mono" ></input>
            <textarea id="message" name="message" value={message} onChange={e => setMessage(e.target.value)} required
            className=" w-full pt-4 pl-7 pr-12 h-28 mb-4 bg-[#F3EFE0] border-4 border-[#CDA434] border-dashed text-[#222222] text-base font-medium font-mono" placeholder="Mensaje"></textarea>
            <button type="submit" className="flex w-24 justify-center bg-[#CDA434] mb-4 py-2 px-4 text-base font-bold font-mono text-[#F3EFE0] hover:bg-[#F3EFE0] hover:text-[#CDA434] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Enviar
            </button>

            <img  className="
          rounded-full h-20 w-20 absolute border-2 border-[#CDA434]
          bottom-8 right-[-15px]
          " src={Logo} alt="Logo" />

          </form>
          
        </div>

      </div>
      <div className="
      flex justify-evenly 
      w-full my-8 
      lg:w-[30%] lg:absolute lg:bottom-14 z-10">

        <a  className="border-4 border-[#CDA434] border-dashed" href={"https://api.whatsapp.com/send/?phone=%2B51902435668&text&type=phone_number&app_absent=0"} target="_blank" rel="noreferrer" >
            <FaWhatsapp className={`${
          isAnimating ? 'animate-wiggle' : ''
        } w-16 p-2 h-auto text-[#25D366] `}/>
        </a>
        <a className="border-4 border-[#CDA434] border-dashed" href={"https://www.linkedin.com/in/sixto-mendoza-orden/"} target="_blank" rel="noreferrer">
          <FaLinkedin className={`${
          isAnimating ? 'animate-wiggle' : ''
          } w-16 p-2 h-auto text-[#0A66C2] `} />
        </a>
        <a className="border-4 border-[#CDA434] border-dashed" href={"https://github.com/Sixtotk"} target="_blank" rel="noreferrer" >
          <FaGithub className={`${
          isAnimating ? 'animate-wiggle' : ''
          } w-16 p-2 h-auto text-[#181717]] `} />
        </a>
      </div>
      <footer className="w-full font-serif text-[#F3EFE0] font-thin flex flex-wrap content-center justify-center
      text-xs mt-4 mb-4 z-10">
        Sixto Tulio Mendoza Garcia - Full Stack Web Developer 2023
      </footer>
      

    </div>
  )
}