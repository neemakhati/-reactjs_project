import { Outlet,Link } from "react-router-dom";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
const Login=()=>{
    const {login} = useAuth()
    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')

    const onChangeUsername=(e)=>{
        setUsername(e.target.value)
    }

    const onChangePassword=(e)=>{
        setPassword(e.target.value)
    }

    const onSubmit=()=>{
        login(username, password)
    }
    return (
        <div>
            <div class="wrapper">
                <h2>Login</h2>
                <form action="#">
                <div class="input-box">
                    <label for="userName">Name</label>
                    <input onChange={onChangeUsername} type="userName" className="form-control" id="userName" placeholder="Name"/>
                </div>
                <div class="input-box">
                    <label for="exampleInputPassword1">Password</label>
                    <input onChange={onChangePassword} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div class="policy">
                    <input type="checkbox"></input>
                    <h3>I accept all terms & condition</h3>
                </div>
                <div class="input-box button">
                    <input onClick={onSubmit} type="login" className="primary" value="Login Now"></input>
                </div>
                <div class="text">
                    <p>Don't have an account?  <Link class="input-box button" to="/register">  Register Now</Link></p>
                </div>
                </form>
             </div>
         <Outlet />
        </div>
    );
}
export default Login;
