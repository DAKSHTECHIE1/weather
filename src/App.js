import React from "react";
import Nav from './nav'
import Body from './body'
import Future from './future'
import { useFormInput } from "./hooks";
const App=() =>{
  const searchText=useFormInput('');
  const wind=useFormInput('loa..')
  const temp=useFormInput('loa...');
  const list=useFormInput([1,2]);
  const icon=useFormInput('50n');
  const lat=useFormInput(50);
  const lon=useFormInput(77);
  const weather=useFormInput('loa..')
  const city=useFormInput('loa...')
  var status=0;
  var response;
  const update=(c)=>{
    console.log('update1')
    searchText.value=c;
    console.log('update2')
    searchText.dataitem(searchText.value);
    console.log('St',searchText.value);
  }
  const fetchdata=async(e)=>{
    e.preventDefault();
    var a=document.getElementById('search');
    console.log('before')
    var f= await update(a.value);
    console.log('after')
     response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${searchText.value},&limit=1&appid=3b5e741e002beea31c2dba0af0114f7b`);//okkk
    console.log('r',response.status);
    status=response.status;
    console.log('in',status)
    var data = await response.json();
    console.log('d',data);
    // console.log(data[0].name);
    // console.log(data[0].lat);
    lat.dataitem(data[0].lat);
    lon.dataitem(data[0].lon)
    // console.log(data[0].lon);
    const responser=await  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=3b5e741e002beea31c2dba0af0114f7b`)
    const datar=await responser.json();
    //  console.log(datar.wind.speed);
    temp.dataitem(datar.main.temp-273);
    weather.dataitem(datar.weather[0].main);
    icon.dataitem(datar.weather[0].icon);
    city.dataitem(data[0].name)
    wind.dataitem(datar.wind.speed);
    var responses=await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${data[0].lat}&lon=${data[0].lon}&appid=ac508687c1ed70cfe2cf56878b49eeef`)
    var datap =await responses.json();
    var data1=datap.list.filter((elem,index)=>{return index%8===0&&index!=0})
    list.dataitem(data1);
  }
  console.log('status',status);
  if(searchText.value===''){
    return (
      <div className="App">
    <Nav searchText={searchText} fetchdata={fetchdata}/>
     <h1 id='welcome'>Welcome to our weather app</h1>
    </div>
    )
  }


  return (
    <div className="App">
    <Nav searchText={searchText} fetchdata={fetchdata}/>
    <Body searchText={searchText} wind={wind} city={city} weather={weather} icon={icon} temp={temp}/>
    <Future searchText={searchText} lat={lat} lon={lon} list={list}/>
    </div>
  );
  
  
}

export default App;
