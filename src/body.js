import React from "react";
import './body.css'
const Body=(props)=>{
    const {city,weather,icon,temp,wind}=props;
    return(
        <div className="body">
            <div className="main-card gradient ">
                <div className="main-card-data">
                   <div><h1 id='city'>{city.value}</h1></div> 
                    <div><h2 id='tem'>{parseInt(temp.value)}&deg;C</h2></div>
                    <div><h3 id='desc'>{weather.value}</h3></div>
                    <div><img id='img-centre' src={`http://openweathermap.org/img/wn/${icon.value}@2x.png`}/></div>
                    <div><i class="fa-solid fa-wind wind"></i></div>
                    <div id='wind-value'>{wind.value}m/s</div>
                </div>
            </div>
        </div>
    )
    
}
export default Body;