import React, { useState  } from 'react';
import { componentsPartsBasicCSS, ledGenerallCSS, spdtGenerallCSS, LEDSegmentDigit4GenerallCSS, LEDSegmentDigit8GenerallCSS, LEDDisplayGenerallCSS } from '../CSS/ComponentsPartsCSS.js';

export let GreenLED = (props) => {
    return(
        <div className={ componentsPartsBasicCSS.ledBContainer }>
          <div className={ ledGenerallCSS.ledGreenUnlight}><span className={ ledGenerallCSS.ledStatusStr}>{ props.test }</span></div>
        </div>
    );
}
export let RedLED = (props) => {
  return(
      <div className={ componentsPartsBasicCSS.ledBContainer }>
        <div className={ ledGenerallCSS.ledRedUnlight}><span className={ ledGenerallCSS.ledStatusStr}>{ props.test }</span></div>
      </div>
  );
}
export let SPDTVertical = (props) => {
  return(
    <> 
      <p className={ spdtGenerallCSS.spdtVerticalLabelTop }>on</p>
      <div className={ componentsPartsBasicCSS.spdtVerticalContainer }>
        <input type="checkbox" className={ spdtGenerallCSS.spdtVerticalChhide }/>
        <label className={ spdtGenerallCSS.spdtVerticalSlider }></label>
        <div className={ spdtGenerallCSS.spdtVerticalShaft } style={(props.spdtStatus === "0") ? {left: '18px'} : {left: '0px'}}></div>
        <p className={ spdtGenerallCSS.spdtVerticalState }></p>
      </div>
      <p className={ spdtGenerallCSS.spdtVerticalLabelBottom }>off</p>
    </>
  );
}
export let LEDSegmentDigit4 = (props) => {
  return(
    <div className={ LEDSegmentDigit4GenerallCSS.LEDSegmentDigit4Container }>
      { props.ledStatusStr }
    </div>
  );
}
export let LEDSegmentDigit8 = (props) => {
  return(
    <div className={ LEDSegmentDigit8GenerallCSS.LEDSegmentDigit8Container }>
    { props.ledStatusStr } 
    </div>
  );
}
export let LEDDisplay20x4 = (props) => {
  return(
    <div className={ LEDDisplayGenerallCSS.LEDDisplayContainer }>
      <div className={ LEDDisplayGenerallCSS.LEDDisplayInnnerFrame }>
        <p className={ LEDDisplayGenerallCSS.LEDDisplayValueString }>{ props.strRow1 }</p>
        <p className={ LEDDisplayGenerallCSS.LEDDisplayValueString }>{ props.strRow2 }</p>
        <p className={ LEDDisplayGenerallCSS.LEDDisplayValueString }>{ props.strRow3 }</p>
        <p className={ LEDDisplayGenerallCSS.LEDDisplayValueString }>{ props.strRow4 }</p>
      </div>
    </div>
  );
}