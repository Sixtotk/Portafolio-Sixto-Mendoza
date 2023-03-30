import React, { useState }from "react";
import axios from 'axios';
import { FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa'


export default function Contacto(){

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

        axios.post('https://portafolio-sixto-mendoza-production.up.railway.app/send-email', data)
            .then(res => {
                console.log(res.data);
                alert('Correo electrónico enviado');
            })
            .catch(err => {
                console.log(err);
                alert('Error al enviar el correo electrónico');
            });

        setName('');
        setEmail('');
        setMessage('');
    };

  return(
    <div className="w-screen h-auto flex flex-wrap content-center justify-center ">
      <div className="
      w-screen bg-[#F3EFE0] 
      lg:flex lg:bg-gradient-to-b lg:from-[#F3EFE0] 
      lg:to-[#434242]">
        <div className="flex flex-wrap
        lg:w-[50%] ">
          <div className="w-full flex flex-wrap content-center justify-center 
          bg-[#434242] border-b-4 border-[#222222]
          lg:border-0 lg:bg-transparent
          ">
            <h3 className="
            font-['Forum'] text-[#F3EFE0] 
            font-medium tracking-widest
            w-auto 
            text-xl mt-4 mb-4 
            lg:text-4xl lg:mt-10">Contacto</h3>
            <div className="lg:w-[50%] flex flex-wrap content-center justify-center">
          <form onSubmit={handleSubmit} 
          className=" flex flex-wrap content-center justify-center
          w-[80%]
          lg:mt-20 lg:content-start lg:justify-start">

            <input type="text" name="email" id="name" value={name} onChange={e => setName(e.target.value)} required placeholder="Nombre"
            className="block w-full pl-7 pr-12 h-10 mb-4 border-[#222222] border-2 bg-[#F3EFE0] text-[#222222]" ></input>

            <input type="text" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="Email"
            className="block w-full  pl-7 pr-12 h-10 mb-4 bg-[#F3EFE0] border-[#222222] border-2 text-[#222222]" ></input>

            <textarea id="message" name="message" value={message} onChange={e => setMessage(e.target.value)} required
            className=" w-full pt-4 pl-7 pr-12 h-28 mb-4 bg-[#F3EFE0] border-[#222222] border-2 text-[#222222]" placeholder="Mensaje"></textarea>
            
            <button type="submit" className="flex w-20 justify-center bg-[#F3EFE0] mb-4 py-2 px-4 text-sm font-medium font-['Forum'] text-[#222222] hover:bg-[#00B9AE] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Enviar
            </button>
          </form>
          
        </div>
          </div>
          <div className="w-full lg:mb-10">
            <h3 className=" font-['Forum'] text-[#222222] font-thin flex flex-wrap content-center justify-center
            text-xl mt-4
            lg:ml-16 lg:text-3xl lg:content-start lg:justify-start lg:w-[60%] lg:text-justify lg:mt-6">
            Correo: sixtoorden@gmail.com<br/>
            Telefono: +51 910 178 928<br/>
            Ubicacion: Lima, Peru
            </h3>
            <div className="flex flex-wrap justify-around mt-5 mb-8">
        <FaWhatsapp className="w-8 h-auto text-[#222222]"/>
        <FaLinkedin className="w-8 h-auto text-[#222222]" />
        <FaGithub className="w-8 h-auto text-[#222222]"/>
      </div>
      <h3 className=" font-['Forum'] text-[#222222] font-thin flex flex-wrap content-center justify-center
            text-xs mt-4 mb-4
            lg:ml-16 lg:text-3xl lg:content-start lg:justify-start lg:w-[60%] lg:text-justify lg:mt-6">
            Sixto Tulio Mendoza Garcia - Full Stack Web Developer<br/>
            ©2023
            </h3>

             

          </div>
        </div>           
      
      </div>
    </div>
  )
}