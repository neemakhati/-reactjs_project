import { useState } from "react";
import {Outlet, Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
const Partners=()=>{
    return (
        <div>
            <div class="wrapper">
            <h2>Partners</h2>
            <form action="#">
            <div class="input-box">
                <label for="userName">Name</label>
                <input type="userName" class="form-control" id="userName" placeholder="Name"/>
            </div>
            <div class="input-box">
                <label for="userPhone">Phone</label>
                <input type="userPhone" class="form-control" id="userPhone" placeholder="Phone"/>
            </div>
            <div class="input-box">
                <label for="userLocation">Phone</label>
                <input type="userLocation" class="form-control" id="userLocation" placeholder="Location"/>
            </div>
            </form>
        </div>
        
        <Outlet />
        
    </div>
    
    );
}
export default Partners;