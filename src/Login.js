import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="login">
            <div className="titulo_create_newUser">
                <h1 className="titulo">Login</h1>
            </div>
            <div className="parametros_create_newUser">
                <input className="input_create_newUser" type="text" placeholder="Email"/>
                <input className="input_create_newUser" type="password" placeholder="Password"/>
                <Link to="/Signup" className="link_crearCuenta">No tiene cuenta compadre?</Link>
                <button className="boton">Sign in</button>
            </div>
        </div>
    )
}

export default Login
