import React from 'react';



export default function Info({content, bottom, left, right, top}){
    const position = {
        bottom: `${bottom}%`,
        left: `${left}%`,
        right: `${right}%`,
        top: `${top}%`
    }
    return(
        <div style={position} className="information">
            <h3>{content}</h3>
        </div>
    )
}