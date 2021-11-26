import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
const Login = () => {


    localStorage.removeItem("jwt-token");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("") 
    const navigate = useNavigate()

    async function functionLogin(){
        
        const nuevo_usuario={email:email, password:password}
        try {
            const urlDetalleVenta =
              "https://3000-tan-meadowlark-22dt2hwl.ws-us17.gitpod.io/login";

            const requestOptions = {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(nuevo_usuario),
            };

            const response = await fetch(urlDetalleVenta, requestOptions);
            const data = await response.json();
            localStorage.setItem("jwt-token", data.token);
            if (data.token) {
              navigate("/Private");
            } else {
              localStorage.removeItem("jwt-token");
            }
            return data;
        } catch{
            alert("Algo no esta funcionando")
        }
        
      }

    return (
        <div className="login">
            <div className="titulo_create_newUser">
                <h1 className="titulo">Login</h1>
            </div>
            <div className="parametros_create_newUser">
                <input className="input_create_newUser" type="text" placeholder="Email"value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input className="input_create_newUser" type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <Link to="/Signup" className="link_crearCuenta">No tiene cuenta compadre?</Link>
                <button className="boton" onClick={functionLogin}>Sign in</button>
            </div>
        </div>
    )
}

export default Login
