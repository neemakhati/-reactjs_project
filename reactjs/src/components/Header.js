import {useState,useEffect} from 'react'
import {Outlet, Link } from 'react-router-dom'
const Header=()=>{
    const [search, setSearch]=useState('test')

    // let search='testValue'
    const onSearch=(e)=>{
        console.log("Search Value",e.target.value)
        //search=e.target.value;
        setSearch(e.target.value);
    }
    useEffect(()=>{
        console.log("search=",search)
    },[])            //component did mount

    useEffect(()=>{
        console.log("onChange search=",search)
    },[search])     //component did update


    return(
      <>
      <nav>
        <div class="navbar">
          <div class="logo"><a href="#">OnLiNe cLuB</a></div>
          <ul class="menu">
            <li><Link class="navbar-brand" to="/home">Home</Link></li>
            <li><Link class="navbar-brand" to="/about">CoreTeam</Link></li>
            <li><Link class="navbar-brand" to="/partners">Partners</Link></li>
            <li><Link class="navbar-brand" to="/login">Login</Link></li>
            <li><Link class="navbar-brand" to="/register">Register</Link></li>
          </ul>
        </div>
    </nav>
    </>
        
    )
}
export default Header