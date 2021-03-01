import React, {Component} from 'react';
import './App.css';
import {SideBarData} from './SideBarData'

class SideBar extends Component{
  render(){
    return(
      <div className="Sidebar">
      <ul className="SidebarList">
      {SideBarData.map((val,key)=>{
        return (
      <li key={key} className="row" onClick={()=>{
        window.location.pathname = val.link} }>
        {" "}
        <div id="icon">{val.icon}</div>{" "}
        <div id="title">
          {val.title}
          </div>
      </li>
);
      })}
      </ul>
      </div>
    )
  }

}
export default SideBar;
