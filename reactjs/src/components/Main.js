import React from "react"

const Main=(props)=>{
    return(
        <div className="about-container">
            <div className="about-card">
                <img className="image-box" src={props.imagePath} alt="view"/>
                <h4 className="detail">{props.name}</h4>
                <h6 className="detail">{props.job}</h6>
            </div>
        </div>
    )
}
export default Main