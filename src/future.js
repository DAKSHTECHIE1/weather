import React from "react";
import Forecast from "./forecast";
import './future.css'
import { useFormInput } from "./hooks";
const Future=(props)=>
{
    const {lat,lon,list}=props;
    console.log('list',list.value);
    return(
        <div className="future">
            {/* <h2 id='forecast-head'>Forecast</h2> */}
        {list.value.map((day) => (
        <Forecast day={day}  />
        ))}  
        </div> 
    )
    
}
export default Future;