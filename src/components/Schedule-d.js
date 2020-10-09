import React from 'react';
import logo from '../img/logo-black.svg';
import map from '../img/map.png';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import LocationOnIcon from '@material-ui/icons/LocationOn';

export default function ScheduleD(){
    return(
        <div>
             <div className="container-fluid app-schedule">
                <div className="row first space-align">
                            <div className="col-xs-3 center-align">
                                <ArrowBackIcon style={{fontSize:"15px"}}/>
                            </div>
                            <div className="col-xs-6 center-align">
                                <h2>LOCATION</h2>
                            </div>
                            <div className="col-xs-3 center-align">
                                <img className="second-logo" src={logo} alt="detailer logo"/>
                            </div>
                </div>
                <div className="row second">
                    <LocationOnIcon style={{position: "absolute", bottom: '53%', left: '56%', fontSize:'30px'}}/>
                    <img src={map} alt="map"/>
                </div>
              
                <div className="row third">
                    <div className="col-xs-2">
                        <span className="big"></span>
                        <span className="small"></span>
                        <span className="small"></span>
                        <span className="small"></span>
                        <span className="big"></span>
                    </div>
                    <div className="col-xs-6">
                        <ul>
                            <li>
                                <span>To Queen's Victoria Avenue</span>
                                <span>CA 95673</span>
                            </li>
                            <li>
                                <span>From Detailer.CO Orange Walk</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-xs-4">
                        <button className="forward">
                            <ArrowForwardIcon style={{color: 'white', fontSize: '18px'}}/>
                        </button>
                    </div>
    
                </div>
                <div className="row last">
                    <button className="wash-button">Wash Now</button>
                    <button className="wash-button">Wash Later</button>
                </div>
               
             </div>
        </div>
    )
}