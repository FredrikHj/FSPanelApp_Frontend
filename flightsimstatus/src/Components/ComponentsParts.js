import React, { useState  } from 'react';
import { css, merge } from 'glamor';

import { ledLightCSS, spdtCSS, LEDSegmentDigitCSS, LEDDisplayCSS, rotarySpdtCSS, rotarySpdtCLCSSPossisons, rotaryEncorderCSS, pushBtnCircleCSS, rotateRotaryEncorder } from '../CSS/ComponentsPartsCSS.js';

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
      <p className={ spdtCSS.spdtLabelTop }>on</p>
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
export let SPDTHorizontal = (props) => {
  return(
    <> 
      <p className={ spdtCSS.spdtLabelTop }>on</p>
      <div className={ spdtCSS.spdtHorizontalContainer }>
        <input type="checkbox" className={ spdtCSS.spdtVerticalChhide }/>
        <label className={ spdtCSS.spdtVerticalSlider }></label>
        <div className={ spdtCSS.spdtVerticalShaft } style={(props.spdtStatus === "0") ? {left: '18px'} : {left: '0px'}}></div>
        <p className={ spdtCSS.spdtVerticalState }></p>
        <p className={ spdtCSS.spdtHorizontalLabelBottom }>off</p>
      </div>
    </>
  );
}
export let RotarySpdt = (props) => {
  function setRotaryPoss(RStatus) {
    let setPoss;    
    // Poss: 1 = 15 | 2 = 50 | 3 = 82 | 4 = 110 | 5 = 135 | 6 = 161 | 7 = 196 | 8 = 220 | 9 = 248 | 10 = 276 | 11 = 306 | 12 = 350
   
    if (RStatus === '1') setPoss = ( RStatus === '1') ? {transform: 'rotate(15deg)'} : null;
    if (RStatus === '2') setPoss = ( RStatus === '2') ? {transform: 'rotate(50deg)'} : null;
    if (RStatus === '3') setPoss = ( RStatus === '3') ? {transform: 'rotate(82deg)'} : null;
    if (RStatus === '4') setPoss = ( RStatus === '4') ? {transform: 'rotate(110deg)'} : null;
    if (RStatus === '5') setPoss = ( RStatus === '5') ? {transform: 'rotate(135deg)'} : null;
    if (RStatus === '6') setPoss = ( RStatus === '6') ? {transform: 'rotate(161deg)'} : null;
    if (RStatus === '7') setPoss = ( RStatus === '7') ? {transform: 'rotate(196deg)'} : null;
    if (RStatus === '8') setPoss = ( RStatus === '8') ? {transform: 'rotate(220deg)'} : null;
    if (RStatus === '9') setPoss = ( RStatus === '9') ? {transform: 'rotate(248deg)'} : null;
    if (RStatus === '10') setPoss = ( RStatus === '10') ? {transform: 'rotate(276deg)'} : null;
    if (RStatus === '11') setPoss = ( RStatus === '11') ? {transform: 'rotate(306deg)'} : null;
    if (RStatus === '12') setPoss = ( RStatus === '12') ? {transform: 'rotate(350deg)'} : null;

    return setPoss; 
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
          <div className={ rotarySpdtCSS.rotarySpdt } style={setRotaryPoss(props.rotaryStatus)} id="rotarySpdt"></div>
        </div>
      </div>    
    </>
  );
}
export let RotaryEncorder = (props) => {
  let rotateRotaryEncorder = css.keyframes({
    'from': { 'transform': 'rotate(0deg)'},
    'to': { 'transform': 'rotate(' + props.direction + 'deg)'},   
  });

  let rotaryEncorderKnob = css({
    'position': 'absolute',
    'borderRadius': '50%',
    'width': '17px',
    'height': '17px',
    'top': '2px',
    'left': '2px',
    'background': 'white',
    'border': '2px solid black',
    'boxShadow': 'inset 0 0.5px 1px 11px #39373C, 0 0 1px 1px #69696A',
    'opacity': '1',
    'animationName': rotateRotaryEncorder,
    'animationDuration': '6s',
    'animationIterationCount': 'infinite',
    'animationTimingFunction': 'linear', 
  });
  return(
    <> 
      <div className={ rotaryEncorderCSS.rotaryEncorderContainer }>    
        <div className={ rotaryEncorderCSS.rotaryEncorder }>
          <div className={ rotaryEncorderKnob }>
            <div className={ rotaryEncorderCSS.rotaryEncorderKnobCrossLine1 }></div>
            <div className={ rotaryEncorderCSS.rotaryEncorderKnobCrossLine2 }></div>
            <div className={ rotaryEncorderCSS.rotaryEncorderKnobCrossLine3 }></div>
            <div className={ rotaryEncorderCSS.rotaryEncorderKnobCrossLine4 }></div>
            <div className={ rotaryEncorderCSS.rotaryEncorderKnobCrossLineRoughCircle }></div>
          </div>
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

export let PushBtnCircle = (props) => {
  let pushedBtn = css.keyframes({
    'from': {'transform': 'scale(1)'},
    'to': {'transform': 'scale(' + props.push + ')'},
  });
  let pushdBtn = css({
    'position': 'relative',
    'borderRadius': '50%',
    'width': '27.5px',
    'height': '27.5px',
    'top': '12px',
    'left': '12px',
    'background': 'white',
    'border': '2px solid white',
    'boxShadow': 'inset 0 0.5px 1px 11px #39373C, 0 0 1px 1px #69696A',
    'animationName': pushedBtn,
    'animationDuration': '4s',
  });
  return(
    <div className={ pushBtnCircleCSS.pushBtnContainer }>
      <div className={ pushdBtn }></div>
    </div>
  );
}