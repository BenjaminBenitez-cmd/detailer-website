import React from 'react';


export default function Info({content, version}){
    // const position = {
    //     bottom: `${bottom}%`,
    //     left: `${left}%`,
    //     right: `${right}%`,
    //     top: `${top}%`
    // }
    return(
        <div  className={`information animate__animated animate__fadeInRight ${version}`}>
            {console.log(version)}
            <h3>{content}</h3>
        </div>
    )
}