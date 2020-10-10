 import React from 'react';
 import logo from '../img/logo-black.svg';
 import menu from '../img/menu.png'
 import AccountCircleIcon from '@material-ui/icons/AccountCircle';
 import CreditCardIcon from '@material-ui/icons/CreditCard';
 import DateRangeIcon from '@material-ui/icons/DateRange';
 import TrackChangesIcon from '@material-ui/icons/TrackChanges';


 export default function BookD(){
     return(
         <div>
             <div className="container-fluid app-book">
                <div className="row first space-align">
                    <div className="col-xs-3 center-align">
                        <img className="inner-menu" src={menu} alt="menu"/>
                    </div>
                    <div className="col-xs-6 center-align">
                        <img  className="inner-logo" src={logo} alt="detailer logo"/>
                    </div>
                    <div className="col-xs-3 center-align">
                        <AccountCircleIcon/>
                    </div>
                </div>
                <div className="row second ">
                    <div className="col-xs-3">
                        <div className="left-card">
                            <ul>
                                <li>
                                    <CreditCardIcon/>
                                </li>
                                <li>
                                    Pay
                                </li>
                            </ul>       
                        </div>
                    </div>
                    <div className="col-xs-6 center-align">
                        
                        <div className="main-card">
                            <ul>
                                <li>
                                    <DateRangeIcon style={{fontSize: "35px"}}/>
                                </li>
                                <li>
                                    Schedule
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xs-3">
                        <div className="right-card">
                            <ul>
                                <li>
                                    <TrackChangesIcon/>
                                </li>
                                <li>
                                    Track
                                </li>
                            </ul>       
                        </div>
                    </div>
                </div>
                <div className="row third center-align">
                    <div className="col-xs-12">
                        <button className="return-button"> Go Back</button>
                    </div>
                </div>

            
             </div>
         </div>
     )
 }