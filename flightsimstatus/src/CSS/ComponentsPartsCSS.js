import { css } from 'glamor';

// ========================= LED Light =========================
export const ledBasicCSS = {
  ledBContainer: css({
    'height': '30px',
    'width': '25%',
    'margin': '10px 0 0 0',
    'float': 'left',
  }),
}
export const ledGenerallCSS = {
  ledGreenUnlight: css({
    'margin': '0 auto',
    'width': '24px',
    'height': '24px',
    'backgroundColor': '#304701',
    'borderRadius': '50%',
  }),
  ledGreenLight: css({
    'backgroundColor': '#ABFF00',
    'boxShadow': 'rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #304701 0 -1px 9px, #89FF00 0 2px 12px',
  }),

  ledStatusStr: css({
    'position': 'relative',
    'top': '2px',
    'left': '4px',
  }),
}
// ========================= Switches =========================
/* export const ledBasicCSS = {
  ledBContainer: css({

  }),
}


.mds-switch{
  left: -27px;
  transform: rotate(90deg);
  position: relative;
  display: inline-block;
  z-index: 1;
  top: 10px;
  left: -25px;
}
.mds-switch__SwitchState{
  margin-top: -37px;
  margin-left: 54px;
}
.mds-switch__chhide{
  margin-top: -50px;
  margin-left: -33px;
  height: 50px;
  width: 100px;
  border-radius: 50px;
  display: block;
  opacity: 0;
  z-index: 1;
}
.mds-switch__slider{
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 7.7px;
  width: 18px;
  border-radius: 15px;
  background-color: white;
  transition: .4s;
  z-index: -1;
}
.slider__shaft{
  position: absolute;
  background-color: green;
  box-shadow: 0 3px 15px 5px .757575;
  border-radius: 20px;
  height: 10px;
  margin-left: -1px;
  width: 10px;
  top: -1.5px;
  transition: .4s;
  z-index: 0;
}
.mds-switch__chhide:checked + .mds-switch__slider {
  background-color: white;
}
.mds-switch__chhide:checked + .mds-switch__slider::before {
  background-color: red;
  transform: translateY(26px);
}

// Format 2 poss vertical
.switch2PossVertical{
  width: 20px;
  height: 60px;
}
.spdt{
  font-size: 0.7em;
}
.spdtLabelTop{
  position: relative;
  top: -4px;
  width: 13px;
  text-align: center;
}
.spdtLabelBottom{
  position: relative;
  bottom: 20px;
  width: 13px;
  text-align: center;
}

// Poss of components
.vs1_1_p1{
  position: relative;
  top: 5%;
  left: 2%;
} */