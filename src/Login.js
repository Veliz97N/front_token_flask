import React,{useState} from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("") 
    return (
        <div className="login">
            <div className="titulo_create_newUser">
                <h1 className="titulo">Login</h1>
            </div>
            <div className="parametros_create_newUser">
                <input className="input_create_newUser" type="text" placeholder="Email"value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input className="input_create_newUser" type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <Link to="/Signup" className="link_crearCuenta">No tiene cuenta compadre?</Link>
                <button className="boton">Sign in</button>
            </div>
        </div>
    )
}

export default Login
