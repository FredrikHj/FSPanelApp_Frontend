import { css, merge } from 'glamor';
import { SectionCommonRoules } from './GenerallCSS.js';

// ======================== LED Light =========================
export const ledLightCSS = {
  noneLedContainer: css({
    'height': '30px',
    'width': '50%',
    'margin': '10px 0 0 0',
    'float': 'left',
  }),
  ledContainer: css({
    'height': '30px',
    'width': '50%',
    'margin': '10px 0 0 0',
    'float': 'left',
  }),
  ledGreenUnlight: css({
    'margin': '0 auto',
    'width': '24px',
    'height': '24px',
    'backgroundColor': '#304701',
    'borderRadius': '50%',
  }),
   ledRedUnlight: css({
    'margin': '0 auto',
    'width': '24px',
    'height': '24px',
    'backgroundColor': '#A00',
    'borderRadius': '50%',
  }),
  ledGreenLight: css({
    'backgroundColor': '#ABFF00',
    'boxShadow': 'rgba(0, 0, 0, 02) 0 -1px 7px 1px, inset #304701 0 -1px 9px, #89FF00 0 2px 12px',
  }),
  ledRedLight: css({
    'backgroundColor': '#A00',
    'boxShadow': 'rgba(0, 0, 0, 02) 0 -1px 7px 1px, inset #304701 0 -1px 9px, #89FF00 0 2px 12px',
  }),
  ledStatusStr: css({
    'position': 'relative',
    'top': '-15px',
    'left': '-10px',
    'color': 'white',
    'fontWeight': 'bold',
  }),
}
// ======================== LED Segments =========================

export const LEDSegmentDigitCSS = {
  LEDSegmentDigit4Container: css({
    'width': '55px',
    'height': '24px',
    'color': 'white',
    'paddingTop': '4px',
    'paddingLeft': '4px',
  }),
  LEDSegmentValueContainer: css({
    'width': '100%',
    'height': '24px',
    'paddingTop': '4px',
    'paddingLeft': '4px',
    'backgroundColor': 'black',
  }),
  LEDSegmentDigit8Container: css({
    'width': '109px',
    'height': '24px',
    'color': 'white',
    'paddingTop': '4px',
    'paddingLeft': '4px',
  }),
  LEDSegmentLabel: css({
    'width': '100%',
    'marginTop': '-20px',
    'marginBottom': '3px',
    'textAlign': 'center',
  }),
}

// ======================== LED Display =========================
export const LEDDisplayCSS = {
  LEDDisplayContainer: css({
    'position': 'relative',
    'top': '0',
    'left': '10px',
    'width': '180px',
    'height': '130px',
    'color': 'white',
    'backgroundColor': 'black',
  }),
  LEDDisplayInnnerFrame: css({
    'position': 'relative',
    'top': '15px',
    'left': '20px',
    'width': '140px',
    'height': '100px',
    'color': 'black',
    'backgroundColor': 'yellow',
  }),
  LEDDisplayValueString: css({
    'marginTop': '10px',
    'marginLeft': '5px',
    'width': '100%',
    'color': 'black',
    'fontSize': '0.8em',
  }),
}

// ========================= Switches =========================
export const spdtCSS = {
  spdtVerticalChhide: css({
    'marginTop': '-50px',
    'marginLeft': '-33px',
    'height': '50px',
    'width': '100px',
    'borderRadius': '50px',
    'display': 'block',
    'opacity': '0',
    'zIndex': '1',
  }),
  spdtVerticalContainer: css({
    'left': '-18px',
    'transform': 'rotate(90deg)',
    'position': 'relative',
    'display': 'inline-block',
    'top': '10px',
  }),
  spdtHorizontalContainer: css({
    'left': '-10px',
    'padding': '0',
    'transform': 'rotate(0deg)',
    'position': 'relative',
    'display': 'inline-block',
    'top': '-20px',
  }),
  spdtVerticalState: css({
    'marginTop': '-37px',
    'marginLeft': '54px',
  }),
  spdtVerticalSlider: css({
    'position': 'absolute',
    'cursor': 'pointer',
    'top': '0',
    'left': '0',
    'right': '0',
    'bottom': '0',
    'height': '15.4px',
    'width': '36px',
    'borderRadius': '15px',
    'backgroundColor': 'white',
    'transition': '4s',
    'zIndex': '-1',
  }),
  spdtVerticalShaft: css({
    'position': 'absolute',
    'top': '-2.5px',
    'backgroundColor': 'green',
    'boxShadow': '0 3px 15px 5px 757575',
    'borderRadius': '20px',
    'height': '20px',
    'width': '20px',
    'transition': '0.5s',
    'zIndex': '0',
  }),
  spdtLabelTop: css({
    'position': 'relative',
    'top': '-4px',
    'left': '-15px',
    'width': '50px',
    'textAlign': 'center',
    'color': 'white',
  }),
  spdtVerticalLabelBottom: css({
    'position': 'relative',
    'left': '-1px',
    'bottom': '-5px',
    'width': '13px',
    'textAlign': 'center',
    'color': 'white',
  }),
  spdtHorizontalLabelBottom: css({
    'position': 'relative',
    'left': '7px',
    'top': '50px',
    'bottom': '-5px',
    'width': '13px',
    'textAlign': 'center',
  }),
  // Poss of components
/*   vs1_1_p1: css({
    'position': 'relative',
    'top': '5%',
    'left': '2%',
  }), */
}
// ========================= Rotary Switches =========================

export const rotarySpdtCSS = {
  rotarySpdt12pContainer: css({
    'position': 'relative',
    'width': '100px',
    'height': '100px',
    'borderRadius': '50%',
    'top': '-25px',
    'left': '-28px',
    'background': 'linear-gradient(#585858,#8F8F8F 70%, #DBDBDB)', // 'linear-gradient(#ECE9E9,#CACACA 30%, #F4F4F4, #535353 153%)',
  }),
  rotarySpdtContainer: css({
      'borderRadius': '50%',
      'position': 'relative',
      'top': 'calc(50% - 25px)',
      'left': 'calc(50% - 25px)',
      'width': '50px',
      'height': '50px',
      'background': 'linear-gradient(#585858,#8F8F8F 70%, #DBDBDB)', // 'linear-gradient(#ECE9E9,#CACACA 30%, #F4F4F4, #535353 153%)',
  }),
  rotarySpdt: css({
      'borderRadius': '50%',
      'position': 'absolute',
      'top': '7px',
      'left': '7px',
      'bottom': '7px',
      'right': '7px',
      'margin': '0px',
      'background': 'linear-gradient(90deg,#636068,#242424 43%, #474747 44%, #474747 56%, #7A7A7A 57%, #5a5a5a 68%)',
      'boxShadow': 'inset 0 1px 1px 1px #39373C, 0 0 1px 1px #69696A',
      'border': 'solid 1px #7E7E7E',
      'transition': '.9s',
  }),
}
 // Strings possision | CL = CommonLabel
const rotarySpdtCLCSS = ({
  'fontWeight': 'bold',
  'padding': '5px',
  'width': '80px',
  'height': '10px',
});
const rotarySpdtPossFontLeft = ({
  'border': '1px solid red',
  //'direction': 'normal',
  'marginLeft': '-70px',
});
const rotarySpdtPossFontRight = ({
  'border': '1px solid red',
  'direction': 'ltr',
  //'marginLeft': '70px',
});

const possOne = ({
  'position': 'absolute',
  'top': '-40px',
  'left': '30px',
  'border': '1px solid red',
  'width': '75px',
  'direction': 'ltr',
});
const possTwo = ({
  'position': 'absolute',
  'top': '-19px',
  'right': '-90px',
  'border': '1px solid red',
  'width': '75px',
  'direction': 'ltr',
});
const possThree = ({
  'position': 'absolute',
  'top': '6px',
  'right': '-100px',
  'border': '1px solid red',
  'width': '75px',
  'direction': 'ltr',
});
const possFour = ({
  'position': 'absolute',
  'top': '31px',
  'right': '-100px',
  'border': '1px solid red',
  'width': '75px',
  'direction': 'ltr',
});
const possFive = ({
  'position': 'absolute',
  'top': '50px',
  'right': '-90px',
  'border': '1px solid red',
  'width': '75px',
  'direction': 'ltr',
});
const possSix = ({
  'position': 'absolute',
  'top': '70px',
  'left': '30px',
  'border': '1px solid red',
  'width': '75px',
  'direction': 'ltr',
});
const possSeven = ({
  'position': 'absolute',
  'top': '70px',
  'left': '0',
});
const possEight = ({
  'position': 'absolute',
  'top': '50px',
  'left': '-18px',
});
const possNine = ({
  'position': 'absolute',
  'top': '31px',
  'left': '-32px',
});
const possTen = ({
  'position': 'absolute',
  'top': '6px',
  'left': '-42px',
});
const possEleven = ({
  'position': 'absolute',
  'top': '-19px',
  'left': '-30px',
});
const possTwelve = ({
  'position': 'absolute',
  'top': '-40px',
  'left': '0',
});
const rotarySpdtCLCSSPossOne = merge(rotarySpdtCLCSS, possOne, rotarySpdtPossFontRight);
const rotarySpdtCLCSSPossTwo = merge(rotarySpdtCLCSS, possTwo, rotarySpdtPossFontRight);
const rotarySpdtCLCSSPossThree = merge(rotarySpdtCLCSS, possThree, rotarySpdtPossFontRight);
const rotarySpdtCLCSSPossFour = merge(rotarySpdtCLCSS, possFour, rotarySpdtPossFontRight);
const rotarySpdtCLCSSPossFive = merge(rotarySpdtCLCSS, possFive, rotarySpdtPossFontRight);
const rotarySpdtCLCSSPossSix = merge(rotarySpdtCLCSS, possSix, rotarySpdtPossFontRight);
const rotarySpdtCLCSSPossSeven = merge(rotarySpdtCLCSS, possSeven, rotarySpdtPossFontLeft);
const rotarySpdtCLCSSPossEight = merge(rotarySpdtCLCSS, possEight, rotarySpdtPossFontLeft);
const rotarySpdtCLCSSPossNine = merge(rotarySpdtCLCSS, possNine, rotarySpdtPossFontLeft);
const rotarySpdtCLCSSPossTen = merge(rotarySpdtCLCSS, possTen, rotarySpdtPossFontLeft);
const rotarySpdtCLCSSPossEleven = merge(rotarySpdtCLCSS, possEleven, rotarySpdtPossFontLeft);
const rotarySpdtCLCSSPossTwelve = merge(rotarySpdtCLCSS, possTwelve, rotarySpdtPossFontLeft);

export const rotarySpdtCLCSSPossisons = {
  rotarySpdtCLCSSPossOne,
  rotarySpdtCLCSSPossOne,
  rotarySpdtCLCSSPossTwo,
  rotarySpdtCLCSSPossThree,
  rotarySpdtCLCSSPossFour,
  rotarySpdtCLCSSPossFive,
  rotarySpdtCLCSSPossSix,
  rotarySpdtCLCSSPossSeven,
  rotarySpdtCLCSSPossEight,
  rotarySpdtCLCSSPossNine,
  rotarySpdtCLCSSPossTen,
  rotarySpdtCLCSSPossEleven,
  rotarySpdtCLCSSPossTwelve
}
// =============================================================
export const rotaryEncorderCSS = {
  rotaryEncorderContainer: css({
    'borderRadius': '50%',
    'position': 'relative',
    'top': 'calc(50% - 25px)',
    'left': 'calc(50% - 25px)',
    'width': '40px',
    'height': '40px',
    'background': 'linear-gradient(#585858,#8F8F8F 70%, #DBDBDB)', // 'linear-gradient(#ECE9E9,#CACACA 30%, #F4F4F4, #535353 153%)',
  }),
  rotaryEncorderLabel: css({
    'width': '50px',
    'marginTop': '-30px',
    'marginLeft': '-15px',
    'border': '1px solid red',
    'textAlign': 'center',
    'color': 'white'
  }),
  rotaryEncorder: css({
      'borderRadius': '50%',
      'position': 'absolute',
      'top': '7px',
      'left': '7px',
      'bottom': '7px',
      'right': '7px',
      'margin': '0px',
      'boxShadow': 'inset 0 0.5px 1px 4px #39373C, 0 0 1px 1px #69696A',
      'border': 'solid 1px #7E7E7E',
      'transition': '.9s',
  }),
  /* CSS for the animation for the rotary encorder see --> ComponentsParts.js and
  the function RotaryEncorder */

  rotaryEncorderKnobCrossLine1: css({
    'width': '2px',
    'height': '100%',
    'position': 'absolute',
    'left': 'calc(50% - 1px)',
    'background': 'white',
  }),
  rotaryEncorderKnobCrossLine2: css({
    'width': '100%',
    'height': '2px',
    'position': 'absolute',
    'top': 'calc(50% - 1px)',
    'background': 'white',
  }),
  rotaryEncorderKnobCrossLine3: css({
    'width': '2px',
    'height': '100%',
    'position': 'absolute',
    'left': 'calc(50% - 1px)',
    'background': 'white',
    'transform': 'rotate(135deg)',
  }),
  rotaryEncorderKnobCrossLine4: css({
    'width': '2px',
    'height': '100%',
    'position': 'absolute',
    'left': 'calc(50% - 1px)',
    'background': 'white',
    'transform': 'rotate(230deg)',
  }),
  rotaryEncorderKnobCrossLineRoughCircle: css({
    'width': '12px',
    'height': '12px',
    'position': 'absolute',
    'top': 'calc(50% - 6px)',
    'left': 'calc(50% - 6px)',
    'background': 'white',
    'borderRadius': '50%',
  }),
}

export const pushBtnCircleCSS = {
  pushBtnContainer: css({
    'width': '55px',
    'height': '55px',
  }),
  pushBtnStructure: css({
    'width': '55px',
    'height': '55px',
    'borderRadius': '55px',
    'textDecoration': 'none',
    'outline': 'none',
    'border': 'none',
    'boxShadow': 'inset 0 32px 100px 100px black, 0 0 0px 1px black',
  }),
}