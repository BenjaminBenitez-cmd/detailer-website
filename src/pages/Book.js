import React from 'react';
import Phone from '../Phone';
import Info from './Info';





export default function Book(){
    return(
        <div>
            <Phone section={'bookd'}/>
          
            <Info 
                version={'book'}
                content={'Book'} 
            />
            
        </div>
    )
}