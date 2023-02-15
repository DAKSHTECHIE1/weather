import React from "react";
const Forecast=({day})=>{
    function timeConverters(UNIX_timestamp){
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = month +' '+date +' '+year ;
        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        const d = new Date(time);
        let day = weekday[d.getDay()];
        return day;
      }
    function timeConverter(UNIX_timestamp){
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = date + ' ' + month  ;
        return time;
      }
    return(
        <div className="forecast">
            <div className="block">
               
                <span className="date"><h3>{timeConverter(day.dt)},&nbsp; </h3></span>
                <span> {timeConverters(day.dt)} </span>
                <span className="right">
                  <span className="temper">{day.main?parseInt(day.main.temp)-273:null}&deg;C</span>
                  <span className="forecast-img">
                  {day.weather?(<img height='10px' src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}/>):null}
                  </span>
                </span>
               
            </div>
        </div>
    )
    
}
export default Forecast;