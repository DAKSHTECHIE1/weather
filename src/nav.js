import React from "react";
import './nav.css'
const Nav= (props)=>{
    const {searchText,fetchdata}=props;
    return(
        <div className="nav">
            <h2> Weather.api</h2>
            <div className='search-bar'>
                {/* <div className="search-place"> */}
                    <input type='text' id='search' ></input>
                    <button onClick={(e)=>fetchdata(e)}> <i className="fa-solid fa-magnifying-glass" id='icon'></i></button>
        
            </div>
        </div>
    )
    
}
export default Nav;