import React, { useEffect, useState } from 'react';
import {withRouter, Link} from 'react-router-dom';

function Navigation(props){
    const menuUpdater = (e)=>{
        const variableToSearch = `#${props.page}`;
        const searchVar = document.querySelector(variableToSearch);
        
        const links = document.querySelector(".active");
        links.classList.remove('active');
       
        searchVar.classList.add('active');
    }
    
    useEffect(()=> {
        menuUpdater();
    },[])
    
    return(
        <nav>
             <li>
                <Link className="active" id="bookd" to="/"></Link>
            </li>
            <li>
                <Link className="inActive" id="scheduled" to="/schedule"></Link>
            </li>
            <li>
                <Link className="inActive" id="paymentd"  to="/payment"></Link>
            </li>
            <li>
                <Link className="inActive"  id="dated"  to="/date"></Link>
            </li>           
        </nav>
    )
}

export default withRouter(Navigation)