import React, { useState  } from 'react';
import { ledLightCSS, spdtCSS, LEDSegmentDigitCSS, LEDDisplayCSS, rotaryspdtCSS } from '../CSS/ComponentsPartsCSS.js';

export let GreenLED = (props) => {
    return(
        <div className={ ledLightCSS.ledBContainer }>
          <div className={ ledLightCSS.ledGreenUnlight}><span className={ ledLightCSS.ledStatusStr}>{ props.test }</span></div>
        </div>
    );
}
export let RedLED = (props) => {
  return(
      <div className={ ledLightCSS.ledBContainer }>
        <div className={ ledLightCSS.ledRedUnlight}><span className={ ledLightCSS.ledStatusStr}>{ props.test }</span></div>
      </div>
  );
}
export let SPDTVertical = (props) => {
  return(
    <> 
      <p className={ spdtCSS.spdtVerticalLabelTop }>on</p>
      <div className={ spdtCSS.spdtVerticalContainer }>
        <input type="checkbox" className={ spdtCSS.spdtVerticalChhide }/>
        <label className={ spdtCSS.spdtVerticalSlider }></label>
        <div className={ spdtCSS.spdtVerticalShaft } style={(props.spdtStatus === "0") ? {left: '18px'} : {left: '0px'}}></div>
        <p className={ spdtCSS.spdtVerticalState }></p>
      </div>
      <p className={ spdtCSS.spdtVerticalLabelBottom }>off</p>
    </>
  );
}
export let RotarySpdt = (props) => {
  return(
    <> 
      <div className="select one">1</div>
      <div className="select two">2</div>
      <div className="select three">3</div>
      <div className={ rotaryspdtCSS.rotarySpdtContainer }>
        <div className={ rotaryspdtCSS.rotarySpdt } id="rotarySpdt"></div>
      </div>
    </>
  );
}

export let LEDSegmentDigit4 = (props) => {
  return(
    <div className={ LEDSegmentDigitCSS.LEDSegmentDigit4Container }>
      { props.ledStatusStr }
    </div>
  );
}
export let LEDSegmentDigit8 = (props) => {
  return(
    <div className={ LEDSegmentDigitCSS.LEDSegmentDigit8Container }>
    { props.ledStatusStr } 
    </div>
  );
}
export let LEDDisplay20x4 = (props) => {
  return(
    <div className={ LEDDisplayCSS.LEDDisplayContainer }>
      <div className={ LEDDisplayCSS.LEDDisplayInnnerFrame }>
        <p className={ LEDDisplayCSS.LEDDisplayValueString }>{ props.strRow1 }</p>
        <p className={ LEDDisplayCSS.LEDDisplayValueString }>{ props.strRow2 }</p>
        <p className={ LEDDisplayCSS.LEDDisplayValueString }>{ props.strRow3 }</p>
        <p className={ LEDDisplayCSS.LEDDisplayValueString }>{ props.strRow4 }</p>
      </div>
    </div>
  );
}