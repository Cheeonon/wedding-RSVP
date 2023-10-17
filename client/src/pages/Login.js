import React from 'react'
import { useState  } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';


const Login = () => {
    const [login, setLogin] = useState("");

    let handleLogin=(e)=>{
        setLogin(e.target.value)
        console.log(login)
    }

    if(login === "9090"){
        return <Link to="/list" className="clickHere">동행자 리스트</Link>

    }

  return (
    <div className="login">
        <form  action="submit">
            <label className="login__form" htmlFor="login" >
                Password:
                <input type="text" className="" onChange={handleLogin}/>
            </label>
        </form>
    </div>
  )
}

export default Login