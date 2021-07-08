import React from 'react'
import "./Topbar.scss"

export default function Topbar() {
    return (
       <div className="topbar">
        <div className="wrapper">
           <div className="left">
               <a href="#intro" className="logo">Smort.</a>
           </div>
            <div className="right"></div>
        </div>
     </div>
    );
}
