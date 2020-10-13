import React from 'react';
import logo from '../img/logo-black.svg';
import visa from '../img/visa.png';
import paypal from '../img/paypal.png';
import amazon from '../img/amazon.png';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';

export default function PaymentD(){
    return(
        <div>
            <div className="container-fluid app-payment">
                <div className="row first space-align">
                        <div className="col-xs-3 center-align">
                            <ArrowBackIcon style={{fontSize:"15px"}}/>
                        </div>
                        <div className="col-xs-6 center-align">
                            <h2>PAYMENT</h2>
                        </div>
                        <div className="col-xs-3 center-align">
                            <img className="second-logo" src={logo} alt="detailer logo"/>
                        </div>
                </div>
        
                <div className="row second"> 
                    <div className="col-xs-4">
                        <img src={visa} alt="visa logo"/>
                    </div>
                    <div className="col-xs-4 ">
                        <img src={amazon} alt="amazon logo"/>
                    </div>
                    <div className="col-xs-4 ">
                        <img src={paypal} alt="paypal logo"/>
                    </div>

                   
                </div>

                <div className="row third ">
                    <div className="col-xs-12">
                        <span>CARD NAME</span>
                        <input type="text" placeholder="8908 8998 0808 0800"/>
                    </div>
                    <div className="col-xs-12">
                        <div className="row">
                            <div className="col-xs-6">
                                <span>EXPIRE DATE</span>
                                <input type="text" placeholder="18 / 20"/> 
                            </div>
                            <div className="col-xs-6">
                                <span>CVV</span>
                                <input type="number" placeholder="123"/>
                            </div>
                        </div> 
                    </div>
                    <div className="col-xs-12">
                        <span>CARDHOLDER NAME</span>
                        <input type="text" placeholder="Nathan Doe"/>
                    </div>
                    <div className="col-xs-12">
                        <input type="checkbox"/>
                        <label>SAVE CARD</label>
                    </div>
                </div>

                <div className="row last">
                    <Link to="/date">
                        <button>PAY SECURE</button>
                    </Link>
                   
                </div>
            </div>
        </div>
    )
}