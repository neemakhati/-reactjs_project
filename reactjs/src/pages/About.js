import { Outlet,Link } from "react-router-dom";
import { useState } from "react";
import Katie from "../images/katie-zaferes.png"
import Wedding from "../images/wedding-photography.png"

const About = ()=>{
    return (
        <div>
        <div className="Con_about">
            <img class="image-box"src={Katie} alt=""/>
            <div class="details">
              <h4>James Bernal</h4>
              <small>Devoloper | Youtuber</small>
            </div>
        </div>
        <div className="Con_about">
            <img class="image-box"src={Wedding} alt=""/>
            <div class="details">
              <h4>Janny Bernal</h4>
              <small>Doctor | Influencer</small>
            </div>
          </div>
          </div>
    )
}
export default About;