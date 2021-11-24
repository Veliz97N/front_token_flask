import React, { useEffect } from 'react'

const Private = () => {

  async function getMyTasks () {

    const token = localStorage.getItem('jwt-token');
    const url = "https://3000-fuchsia-heron-7yar86y4.ws-us17.gitpod.io/protected" //aca algo falla, quizas sea el prtected en la base de datos
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
    console.log("This is the data you requested", data);
    return data
}

useEffect(() => {
  getMyTasks()
  
}, [])

    return (
      <div className="private">
        <div className="titulo_create_newUser">
          <h1 className="titulo">Welcome to our store!</h1>
        </div>
        <div>
            <h1 className="sorpresa">Que esperabas? Es solo una prueba 😂</h1>
        </div>
      </div>
    );
}
export default Private
