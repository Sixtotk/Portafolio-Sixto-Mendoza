import React from "react";
import Nav from "../components/nav";
import Perfil from "../components/perfil";
import SobreMi from "../components/SobreMi";
import Skill from "../components/Skill"

export default function Page(){
  return(
    <div>
     <Nav/>
     <Perfil/>
     <SobreMi/>
     <Skill/>

      
    </div>
  )
}