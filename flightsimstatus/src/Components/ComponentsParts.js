import React, { useState  } from 'react';
import { ledBasicCSS, ledGenerallCSS } from '../CSS/ComponentsPartsCSS.js';

export let GreenLED = (props) => {
    return(
        <div className={ ledBasicCSS.ledBContainer }>
          <div className={ ledGenerallCSS.ledGreenUnlight}><span className={ ledGenerallCSS.ledStatusStr}>{ props.test }</span></div>
        </div>
    );
}
export let SwitchVertical = (props) => {
  return(

  );
}
