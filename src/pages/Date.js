import React from 'react';
import Nav from './Nav';

export default function Date(){
    return(
        <div className="date">
           <h1>12.12.20</h1>
           <Nav page={'dated'} />
        </div>
        
    )
}