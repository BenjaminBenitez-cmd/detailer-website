import React, { useEffect } from 'react';
import logo from './img/logo.svg';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Book, Payment, Schedule, Date} from './pages'




function App() {

  useEffect(()=>{
    document.querySelector('.loader').style.display = "none";
  }, [])

  return (
    <BrowserRouter>
       <div className="body">
        <div className="wrapper">
            <header>
                <a href=""><img className="main-logo" src={logo} alt="Detailer main logo"/></a>
            </header>
            <main>
              <Switch>
                <Route path="/"exact component={Book}/>
                <Route path="/schedule" component={Schedule}/>
                <Route path="/payment" component={Payment}/>
                <Route path="/date" component={Date}/>
              </Switch>
            </main>
            <footer></footer>
          </div>
      </div>
    </BrowserRouter>
   

    
  );
}

export default App;
