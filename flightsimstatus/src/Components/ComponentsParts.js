import React, { useState  } from 'react';
import { ledLightCSS, spdtCSS, LEDSegmentDigitCSS, LEDDisplayCSS, rotarySpdtCSS, rotarySpdtCLCSSPossisons } from '../CSS/ComponentsPartsCSS.js';
import { log } from 'util';

console.log(rotarySpdtCLCSSPossisons);

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
  console.log(props.rotaryStatus);

  function setRotaryPoss() {
    /*
    Pos:    Värde
    1       15
    2       50
    3       82
    4        
    5        
    6        
    7        
    8        
    9        
    10       
    11       
    12       
    */    //console.log('Nr ' + );


    
  }
  return(
    <> 
      <div className={ rotarySpdtCSS.rotarySpdt12pContainer }>    
        <div className={ rotarySpdtCSS.rotarySpdtContainer }>
          <div className={ rotarySpdtCLCSSPossisons.rotarySpdtCLCSSPossOne }>1</div>
          <div className={ rotarySpdtCLCSSPossisons.rotarySpdtCLCSSPossTwo }>2</div>
          <div className={ rotarySpdtCLCSSPossisons.rotarySpdtCLCSSPossThree }>3</div>
          <div className={ rotarySpdtCLCSSPossisons.rotarySpdtCLCSSPossFour }>4</div>
          <div className={ rotarySpdtCLCSSPossisons.rotarySpdtCLCSSPossFive }>5</div>
          <div className={ rotarySpdtCLCSSPossisons.rotarySpdtCLCSSPossSix }>6</div>
          <div className={ rotarySpdtCLCSSPossisons.rotarySpdtCLCSSPossSeven }>7</div>
          <div className={ rotarySpdtCLCSSPossisons.rotarySpdtCLCSSPossEight }>8</div>
          <div className={ rotarySpdtCLCSSPossisons.rotarySpdtCLCSSPossNine }>9</div>
          <div className={ rotarySpdtCLCSSPossisons.rotarySpdtCLCSSPossTen }>10</div>
          <div className={ rotarySpdtCLCSSPossisons.rotarySpdtCLCSSPossEleven }>11</div>
          <div className={ rotarySpdtCLCSSPossisons.rotarySpdtCLCSSPossTwelve }>12</div>
          <div className={ rotarySpdtCSS.rotarySpdt } style={(props.rotaryStatus === '1') ? {transform: 'rotate(82deg)'} : {transform: 'rotate(10deg)'}}id="rotarySpdt"></div>
        </div>
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