import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'



const Signup = () => {
   const navigate = useNavigate()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")    
    const [confirmPassword, setConfirmPassword] = useState("")    

    async function functionPostear_NuevoUsuario(){
        
        const nuevo_usuario={email:email,first_name:firstName,last_name:lastName,password:password}
        if (password === confirmPassword) {
          try {
            const urlDetalleVenta =
              "https://3000-tan-meadowlark-22dt2hwl.ws-us17.gitpod.io/users";

            const requestOptions = {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(nuevo_usuario),
            };

            const response = await fetch(urlDetalleVenta, requestOptions);
            const data = await response.json();
            if (response.status === 400) {
              alert(data.error);
            } else {
              navigate("/");
            }
          } catch {
            alert("Algo no esta funcionando");
          }
        } else {
          alert("Las contraseñas deben coincidir");
        }
      }
    

   


    return (
      <div className="signup">
        <div className="titulo_create_newUser">
          <h1 className="titulo">Create Account</h1>
        </div>
        <div className="parametros_create_newUser">
            <input className="input_create_newUser" type="text" placeholder="First Name" value={firstName} onChange={(e)=>setFirstName(e.target.value)} ></input>
            <input className="input_create_newUser" type="text" placeholder="Last Name" value={lastName} onChange={(e)=>setLastName(e.target.value)}></input>
            <input className="input_create_newUser" type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            <input className="input_create_newUser" type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            <input className="input_create_newUser" type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}></input>
            <button className="boton" onClick={functionPostear_NuevoUsuario}>Create</button>
        </div>        
      </div>
    );
}

export default Signup
