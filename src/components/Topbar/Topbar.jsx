import React from 'react'
import "./Topbar.scss"
import {Person, Mail} from "@material-ui/icons"

export default function Topbar() {
    return (
       <div className="topbar">
        <div className="wrapper">
           <div className="left">
               <a href="#intro" className="logo">Smort.</a>
               <div className="itemcontainer">
                    <Person className="icon"/>
                <span>678-447-9596</span>
             </div>
             <div className="itemcontainer">
                 <Mail className="icon"/>
                 <span>ian.ferg36@gmail.com</span>
             </div>
           </div>
            <div className="right">
                <div className="hamburger">
                   <div className="line"></div>
                   <div className="line"></div>
                   <div className="line"></div>
        
                </div>
            </div>
        </div>
     </div>
    );
}
