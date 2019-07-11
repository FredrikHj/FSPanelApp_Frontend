import React, { useState  } from 'react';

export function SectionLeft2_1(props){
    return(
      <section className="sectionLeft1_2Container"> 
        <p className="sectionHeadline">Vänster sektion 1 - Nivå 2:2</p>
        <div className="sectionLeft2_1">
          2:2
        </div>
      </section>
    );
  }
  export function SectionLeft2_2(props){
    return(
      <section className="sectionLeft1_2Container"> 
        <p className="sectionHeadline">Vänster sektion 1 - Nivå 2:1</p>
        <div className="sectionLeft2_2">
            2:1
        </div>
      </section>
    );
  }
  export function SectionLeft1(props){
    return(
      <section className="sectionLeft1_2Container"> 
        <p className="sectionHeadline">Vänster sektion 1 - Nivå 1</p>
        <div className="sectionLeft1">
          <div className="vs1_1_p1" className="spdt switch2PossVertical">
            <p className="spdtLabelTop">on</p>
  
            <div className="mds-switch">
              <input type="checkbox" className="mds-switch__chhide"/>
              <label className="mds-switch__slider"></label>
              <div className="slider__shaft" style={(props.thisState.fsApi.test === "0") ? {left: '10px'} : {left: '0px'}}></div>
              <p className="mds-switch__SwitchState"></p>
            </div>
  
            <p className="spdtLabelBottom">off</p>
          </div>
        </div>
      </section>
    );
  }