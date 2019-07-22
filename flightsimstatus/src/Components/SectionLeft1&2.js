import React, { useState  } from 'react';
import { BasicCSS } from '../CSS/GenerallCSS.js';
import { SectionLeft1_2CSS } from '../CSS/Sections/SectionLeft1CSS.js';
import { SPDTVertical } from './ComponentsParts.js';


export function SectionLeft2(props){
    return(
      <section className={ SectionLeft1_2CSS.sectionLeft1_2Container }> 
        <p className={ BasicCSS.sectionHeadline }>Vänster sektion 2:1 & 2:2</p>
        <div className={ SectionLeft1_2CSS.sectionLeft2_1 }>
          <div className={ SectionLeft1_2CSS.sectionLeft2_1Row1 }>
            <div><SPDTVertical spdtStatus={props.thisState.fsApi.test }/></div>
            <div><SPDTVertical spdtStatus={props.thisState.fsApi.test }/></div>
            <div><SPDTVertical spdtStatus={props.thisState.fsApi.test }/></div>
            <div><SPDTVertical spdtStatus={props.thisState.fsApi.test }/></div>
            <div><SPDTVertical spdtStatus={props.thisState.fsApi.test }/></div>
            <div><SPDTVertical spdtStatus={props.thisState.fsApi.test }/></div>
          </div>
          <div className={ SectionLeft1_2CSS.sectionLeft2_1Row2 }>
            <div><SPDTVertical spdtStatus={props.thisState.fsApi.test }/></div>
            <div><SPDTVertical spdtStatus={props.thisState.fsApi.test }/></div>
            <div className={ SectionLeft1_2CSS.sectionLeft2_1Row2Spdt3 }><SPDTVertical spdtStatus={props.thisState.fsApi.test }/></div>
            <div><SPDTVertical spdtStatus={props.thisState.fsApi.test }/></div>
            <div><SPDTVertical spdtStatus={props.thisState.fsApi.test }/></div>
            <div><SPDTVertical spdtStatus={props.thisState.fsApi.test }/></div>
          </div>
        </div>
        <div className={ SectionLeft1_2CSS.sectionLeft2_2 }>
        <div className={ SectionLeft1_2CSS.sectionLeft2_2Row1 }>
            <div><SPDTVertical spdtStatus={props.thisState.fsApi.test }/></div>
            <div className={ SectionLeft1_2CSS.sectionLeft2_2Row1Spdt2_3_4 }><SPDTVertical spdtStatus={props.thisState.fsApi.test }/></div>
            <div className={ SectionLeft1_2CSS.sectionLeft2_2Row1Spdt2_3_4 }><SPDTVertical spdtStatus={props.thisState.fsApi.test }/></div>
            <div className={ SectionLeft1_2CSS.sectionLeft2_2Row1Spdt2_3_4 }><SPDTVertical spdtStatus={props.thisState.fsApi.test }/></div>
            <div><SPDTVertical spdtStatus={props.thisState.fsApi.test }/></div>
          </div>
          <div className={ SectionLeft1_2CSS.sectionLeft2_2Row2 }>
            <div><SPDTVertical spdtStatus={props.thisState.fsApi.test }/></div>
            <div className={ SectionLeft1_2CSS.sectionLeft2_2Row22_3_4 }><SPDTVertical spdtStatus={props.thisState.fsApi.test }/></div>
            <div className={ SectionLeft1_2CSS.sectionLeft2_2Row22_3_4 }><SPDTVertical spdtStatus={props.thisState.fsApi.test }/></div>
            <div className={ SectionLeft1_2CSS.sectionLeft2_2Row22_3_4 }><SPDTVertical spdtStatus={props.thisState.fsApi.test }/></div>
            <div><SPDTVertical spdtStatus={props.thisState.fsApi.test }/></div>
          </div>
          <div className={ SectionLeft1_2CSS.sectionLeft2_2Row3 }>
            <div className={ SectionLeft1_2CSS.sectionLeft2_2Row3Spdt }><SPDTVertical spdtStatus={props.thisState.fsApi.test }/></div>
            <div className={ SectionLeft1_2CSS.sectionLeft2_2Row3Spdt }><SPDTVertical spdtStatus={props.thisState.fsApi.test }/></div>
            <div className={ SectionLeft1_2CSS.sectionLeft2_2Row3Spdt }><SPDTVertical spdtStatus={props.thisState.fsApi.test }/></div>
            <div className={ SectionLeft1_2CSS.sectionLeft2_2Row3Spdt }><SPDTVertical spdtStatus={props.thisState.fsApi.test }/></div>
            <div className={ SectionLeft1_2CSS.sectionLeft2_2Row3Spdt5 }><SPDTVertical spdtStatus={props.thisState.fsApi.test }/></div>
            <div className={ SectionLeft1_2CSS.sectionLeft2_2Row3Spdt }><SPDTVertical spdtStatus={props.thisState.fsApi.test }/></div>
            <div className={ SectionLeft1_2CSS.sectionLeft2_2Row3Spdt }><SPDTVertical spdtStatus={props.thisState.fsApi.test }/></div>
          </div>
        </div>
      </section>
    );
  }
  export function SectionLeft1(props){
    return(
      <section className={ SectionLeft1_2CSS.sectionLeft1_2Container }> 
        <p className={ BasicCSS.sectionHeadline }>Vänster sektion 1 - Nivå 1</p>
        <div className={ SectionLeft1_2CSS.sectionLeft1 }>
          <SPDTVertical spdtStatus={props.thisState.fsApi.test }/>
        </div>
      </section>
    );
  }