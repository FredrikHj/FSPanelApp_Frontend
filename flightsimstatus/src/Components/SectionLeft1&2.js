import React, { useState  } from 'react';
import { componentsPartsBasicCSS, spdtGenerallCSS } from '../CSS/ComponentsPartsCSS.js';
import { SectionsPartsBasicCSS, SectionsHeadContainersCSS, SectionsHeadpartsCSS } from '../CSS/SectionsCSS.js';
import { SPDTVertical } from './ComponentsParts.js';


export function SectionLeft2(props){
    return(
      <section className={ SectionsPartsBasicCSS.sectionLeft1_2Container }> 
        <p className={ SectionsPartsBasicCSS.sectionHeadline }>Vänster sektion 2:1 & 2:2</p>
        <div className={ SectionsHeadpartsCSS.sectionLeft2_1 }>
          2:2
        </div>
        <div className={ SectionsHeadpartsCSS.sectionLeft2_2 }>
            2:1
        </div>
      </section>
    );
  }
  export function SectionLeft1(props){
    return(
      <section className={ SectionsPartsBasicCSS.sectionLeft1_2Container }> 
        <p className={ SectionsPartsBasicCSS.sectionHeadline }>Vänster sektion 1 - Nivå 1</p>
        <div className={ SectionsHeadpartsCSS.sectionLeft1 }>
          <SPDTVertical
            spdtStatus={props.thisState.fsApi.test }
          />


        </div>
      </section>
    );
  }