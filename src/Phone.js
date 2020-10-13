import React from 'react';
import {BookD, PaymentD, ScheduleD} from './components'
import Nav from './pages/Nav';


export default function Phone({section}){

    return(

            
        <div className="phone-section">
                  <div className="marvel-device iphone-x  ">
                      <div className="notch">
                          <div className="camera"></div>
                          <div className="speaker"></div>
                      </div>
                      <div className="top-bar"></div>
                      <div className="sleep"></div>
                      <div className="bottom-bar"></div>
                      <div className="volume"></div>
                      <div className="overflow">
                          <div className="shadow shadow--tr"></div>
                          <div className="shadow shadow--tl"></div>
                          <div className="shadow shadow--br"></div>
                          <div className="shadow shadow--bl"></div>
                      </div>
                      <div className="inner-shadow"></div>
                      <div className="screen">
                            {
                                (section === 'bookd') ? <BookD /> : null 
                            }
                            {
                                (section === 'scheduled') ? <ScheduleD /> : null 
                            }
                            {
                                (section === 'paymentd') ? <PaymentD /> : null 
                            }
                      </div>
                  </div>

                  <Nav page={section} />
              </div>
    )

}