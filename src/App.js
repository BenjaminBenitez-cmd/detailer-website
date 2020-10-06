import React from 'react';
import logo from './img/logo.svg';
import Navigation from './Navigation';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Book, Payment, Schedule, Date} from './pages'




function App() {

  return (
    <BrowserRouter>
       <div className="body">
        <div className="wrapper">
            <header>
                <a href=""><img src={logo}/></a>
            </header>
            <main>
              <Switch>
                <Route path="/"exact component={Payment}/>
                <Route path="/book" component={Book}/>
                <Route path="/schedule" component={Schedule}/>
                <Route path="/date" component={Date}/>
              </Switch>
              <Navigation/>
            </main>
          </div>
      </div>
    </BrowserRouter>
   

    
  );
}

export default App;
