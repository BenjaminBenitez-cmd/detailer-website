import React from 'react';
import Nav from './Nav';

export default function Date(){
    return(
        <div className="date">
           <h1 className="animate__animated animate__fadeInDown">12.12.20</h1>
           <Nav page={'dated'} />
        </div>
        
    )
}