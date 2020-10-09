import React from 'react';
import Phone from '../Phone';
import Info from './Info';

export default function Payment(){
    return(
        <div>
            <Phone section={'paymentd'} />
            <Info
                top={60} 
                right={25}
                content={'Pay'} 
            />
        </div>
    )
}