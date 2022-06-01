import { useState } from "react";
import {Outlet, Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
const Register=()=>{

    const {
        user,
        signup
    } = useAuth();
    const[email, setEmail] = useState('')
    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')

    const onChangeUsername=(e)=>{
        setUsername(e.target.value)
    }

    const onChangeEmail=(e)=>{
        setEmail(e.target.value)
    }

    const onChangePassword=(e)=>{
        setPassword(e.target.value)
    }

    const onSubmit=()=>{
        signup(username, email, password)
    }
    console.log("username==",username)
    console.log("email==",email)
    

    return (
        <div>
            <div class="wrapper">
            <h2>Registration</h2>
            <form action="#">
            <div class="input-box">
                <label for="userName">Name</label>
                <input onChange={onChangeUsername} type="userName" class="form-control" id="userName" placeholder="Name"/>
            </div>
            <div class="input-box">
                <label for="exampleInputEmail1">Email address</label>
                <input onChange={onChangeEmail} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div class="input-box">
                <label for="exampleInputPassword1">Password</label>
                <input onChange={onChangePassword} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <div class="input-box">
                <label for="exampleConfirmPassword1">Confirm Password</label>
                <input type="password" class="form-control" id="exampleConfirmPassword1" placeholder="Confirm Password"/>
            </div>
            <div class="policy">
                <input type="checkbox"/>
                <h3>I accept all terms & condition</h3>
            </div>
            <div class="input-box button">
                <input onClick={onSubmit} type="button" class="primary" value="Register Now"/>
            </div>
            <div class="text">
                <p>Already have an account?   
                <Link class="input-box button" to="/login">  Login</Link>
                </p>
            </div>
            </form>
        </div>
        
        <Outlet />
        
    </div>
    
    );
}
export default Register;