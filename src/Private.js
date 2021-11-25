import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
const Private = () => {

  const token = localStorage.getItem('jwt-token');
  const [bienvenida, setBienvenida] = useState("")
  async function getMyTasks () {

    const url = "https://3000-cyan-turtle-g2mcdt5y.ws-us17.gitpod.io/protected" //aca algo falla, quizas sea el prtected en la base de datos
    const requestOptions = { 
      method: "GET",
      headers: { 
        "Content-Type": "application/json",
        'Authorization': 'Bearer '+token
      } 
    };

    const resp = await fetch(url, requestOptions)
    if(!resp.ok) return Error("There was a problem in the login request")

    else if(resp.status === 403){
        return Error("Missing or invalid token");
    }
   

    const data = await resp.json();

    setBienvenida("Welcome to our store! "+ data)
    return data
}


useEffect(() => {
  if(localStorage.getItem("jwt-token") && localStorage.getItem("jwt-token")!="" && localStorage.getItem("jwt-token")!== undefined){
    getMyTasks()
    
  }
}, [localStorage.getItem("jwt-token")])
  

    return (
      <div className="private">
        <div className="titulo_create_newUser">
          {bienvenida!="" ? <h1 className="titulo">{bienvenida}</h1> : <h1 className="titulo">Cargando información del cliente</h1> }
        </div>

        <div>
            <h1 className="sorpresa">Que esperabas? Es solo una prueba 😂</h1>
        </div>
        <div className="boton_logout">
          <button className="boton" ><Link to="/" >Log Out</Link></button>
        </div>
      </div>
    );
}
export default Private
