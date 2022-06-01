import {useState,useEffect} from 'react'
import {Outlet, Link } from 'react-router-dom'
const Button=()=>{
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
        <footer>
        <div class="bottom-details">
        <div class="bottom_text">
            <span class="copyright_text">  Copyright © 2021 <a href="#">OnLiNe cLuB.</a>All rights reserved</span>
            <span class="policy_terms">
            <a href="#">Privacy policy</a>
            <a href="#">Terms & condition</a>
            </span>
        </div>
        </div>
        </footer>
    </>
)
}
export default Button