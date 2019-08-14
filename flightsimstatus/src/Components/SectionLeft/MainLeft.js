import React, { useState  } from 'react';
import { SectionLeft1_2CSS } from '../../CSS/Sections/SectionLeft1CSS.js';
import { BasicCSS, SectionsCSS } from '../../CSS/GenerallCSS.js';
import { Left2_2Row1, Left2_2Row2 } from './Left2_2Rows.js';
import { Left2_1Row1, Left2_1Row2, Left2_1Row3 } from './Left2_1Rows.js';
import { SPDTVertical } from '../ComponentsParts.js';

export let Left2 = (props) => {
  let fsDataApi = props.importedFsDataApi;
  console.log(fsDataApi);
  return(
        <section className={ SectionLeft1_2CSS.sectionLeft1_2Container }> 
            <p className={ SectionsCSS.sectionHeadline }>Vänster sektion 2:2 & 2:1</p>
            <div className={ SectionLeft1_2CSS.sectionLeft2_2 }>
                <Left2_2Row1
                    fsDataApi={ fsDataApi }
                />
                <Left2_2Row2
                    fsDataApi={ fsDataApi }
                />
            </div>  
            <div className={ SectionLeft1_2CSS.sectionLeft2_1 }>
                <Left2_1Row1
                    fsDataApi={ fsDataApi }
                />
                <Left2_1Row2
                    fsDataApi={ fsDataApi }
                />
                <Left2_1Row3
                    fsDataApi={ fsDataApi }
                />
            </div>
        </section>
    );
};
export let Left1 = (props) => {
    let fsDataApi = props.importedFsDataApi;
    return(
        <section className={ SectionLeft1_2CSS.sectionLeft1_2Container }> 
            <p className={ SectionsCSS.sectionHeadline }>Vänster sektion 1 - Nivå 1</p>
            <div className={ SectionLeft1_2CSS.sectionLeft1 }>
                <SPDTVertical commandName={ 'Name' } spdtStatus={ fsDataApi.fsDataValuesApi.test } />
            </div>
        </section>
    );
};