import React from 'react'
import './Login.css'

const Login = () => {
    return (
        <>
            <form className="inbody" action="" >

                <div>
                    <label className="signin"> Have an account? Sign in </label>
                    <p>
                    <label  htmlFor="email"> E-mail : </label>
                    <input className="email" type="text" name="email" id="email" /></p>
                </div>

                <div>
                    <label htmlFor="password"> Password : </label>
                    <input className="password" type="text" name="password" id="password"/>
                </div>
                
                <button className="submit" type="submit">Login</button> 

                <button className="signup" type="Sign up">Sign up</button>
                
            </form>
           


        </>
    )
}

export default Login