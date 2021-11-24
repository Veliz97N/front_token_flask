import React from 'react'

const Signup = () => {
    return (
      <div className="signup">
        <div className="titulo_create_newUser">
          <h1 className="titulo">Create Account</h1>
        </div>
        <div className="parametros_create_newUser">
            <input className="input_create_newUser" type="text" placeholder="First Name" ></input>
            <input className="input_create_newUser" type="text" placeholder="Last Name" ></input>
            <input className="input_create_newUser" type="text" placeholder="Email" ></input>
            <input className="input_create_newUser" type="password" placeholder="Password" ></input>
            <input className="input_create_newUser" type="password" placeholder="Confirm Password" ></input>
        </div>
        <div className="boton_create_newUser">
            <button className="boton">Create</button>
        </div>
      </div>
    );
}

export default Signup
