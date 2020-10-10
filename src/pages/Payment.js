import React from 'react';
import Phone from '../Phone';
import Info from './Info';


export default function Payment(){
    return(
        <div>
            <Phone section={'paymentd'} />
            <Info
                version={'payment'}
                content={'Pay'} 
            />
    
        </div>
    )
}