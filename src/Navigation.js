import React, { useEffect, useState } from 'react';
import {withRouter, Link} from 'react-router-dom';

function Navigation({history}){

    const [menu, setMenu] = useState({
        path: '/',
        isSelected: true
    });
  



   const menuUpdater = (menuItem, e) => {
       setMenu({
           path: `${menuItem}`,
           isSelected: true
       })
       activeRemover();
       e.target.classList.add('active');
   }

   const activeRemover = ()=>{
       document.querySelector('a.active').classList.remove('active');
       
   }


    
    return(
        <nav>
             <li>
                <Link className="active" onClick={(e) =>menuUpdater('/', e)} to="/"></Link>
            </li>
            <li>
                <Link className="inActive" onClick={(e) =>menuUpdater('/book', e)} to="/book"></Link>
            </li>
            <li>
                <Link className="inActive"  onClick={(e) =>menuUpdater('/schedule', e)} to="/schedule"></Link>
            </li>
            <li>
                <Link className="inActive"  onClick={(e) =>menuUpdater('/date', e)} to="/date"></Link>
            </li>           
        </nav>
    )
}

export default withRouter(Navigation)