import React, { useState } from 'react';
import {BookD, PaymentD, ScheduleD} from './components'


export default function Phone({section}){

    const [page, setPage] = useState(section);
    return(
        <div className="phone-section">
                  <div className="marvel-device iphone-x">
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
                                (page === 'bookd') ? <BookD /> : null 
                            }
                            {
                                (page === 'scheduled') ? <ScheduleD /> : null 
                            }
                            {
                                (page === 'paymentd') ? <PaymentD /> : null 
                            }
                      </div>
                  </div>
              </div>
    )

}