import React from 'react';
import Phone from '../Phone';
import Info from './Info';

export default function Schedule(){
    return(
        <div>
            <Phone section={'scheduled'}/>
            <Info
                top={10} 
                right={10}
                content={'Schedule'} 
            />
        </div>
    )
}