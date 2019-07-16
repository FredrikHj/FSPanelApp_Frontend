import { css } from 'glamor';

// ======================== LED Light =========================
export const ledLightCSS = {
  ledBContainer: css({
    'height': '30px',
    'width': '25%',
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
    'top': '2px',
    'left': '4px',
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
    'backgroundColor': 'black',
  }),
  LEDSegmentDigit8Container: css({
    'display': 'flex',
    'flexDirection': 'row',
    'justifyContent': 'space-between',
    'width': '110px',
    'height': '24px',
    'color': 'white',
    'paddingTop': '4px',
    'paddingLeft': '6px',
    'backgroundColor': 'black',
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
    'top': '-3px',
    'backgroundColor': 'green',
    'boxShadow': '0 3px 15px 5px 757575',
    'borderRadius': '20px',
    'height': '20px',
    'width': '20px',
    'transition': '0.5s',
    'zIndex': '0',
  }),

  spdtVerticalLabelTop: css({
    'position': 'relative',
    'top': '-4px',
    'left': '2px',
    'width': '13px',
    'textAlign': 'center',
  }),
  spdtVerticalLabelBottom: css({
    'position': 'relative',
    'left': '0',
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

export const rotaryspdtCSS = {
  rotarySpdtContainer: css({
      'borderRadius': '50%',
      'position': 'relative',
      'width': '50px',
      'height': '50px',
      'background': 'linear-gradient(#585858,#8F8F8F 70%, #DBDBDB)', // 'linear-gradient(#ECE9E9,#CACACA 30%, #F4F4F4, #535353 153%)',
  }),
  rotarySpdt: css({
      'borderRadius': '50%',
      'position': 'absolute',
      'left': '7px',
      'top': '7px',
      'bottom': '7px',
      'right': '7px',
      'margin': '0px',
      'background': 'linear-gradient(90deg,#636068,#242424 43%, #474747 44%, #474747 56%, #7A7A7A 57%, #5a5a5a 68%)',
      'boxShadow': 'inset 0 1px 1px 1px #39373C, 0 0 1px 1px #69696A',
      'border': 'solid 1px #7E7E7E',
      'transition': '.5s',
  }),
}